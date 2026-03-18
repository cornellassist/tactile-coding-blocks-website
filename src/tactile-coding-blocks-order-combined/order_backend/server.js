require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { Shippo } = require('shippo');
const { google } = require('googleapis');
const shippo = new Shippo({
  apiKeyHeader: process.env.SHIPPO_API_KEY
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Backend is running successfully!',
    shippo_configured: !!process.env.SHIPPO_API_KEY,
    google_sheets_configured: !!(process.env.GOOGLE_SHEETS_DOCUMENT_ID && process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY),
    timestamp: new Date().toISOString()
  });
});

async function appendOrderToGoogleSheet(orderData) {
  const sheetsId = process.env.GOOGLE_SHEETS_DOCUMENT_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!sheetsId || !serviceAccountEmail || !privateKey) {
    console.warn('Google Sheets not configured; skipping order append');
    return;
  }

  privateKey = privateKey.replace(/\\n/g, '\n');

  const auth = new google.auth.JWT(
    serviceAccountEmail,
    null,
    privateKey,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });
  const values = [
    [
      orderData.orderId || '',
      new Date().toISOString(),
      orderData.customer?.name || '',
      orderData.customer?.email || '',
      orderData.customer?.phone || '',
      orderData.customer?.address || '',
      orderData.shippingOption?.carrier_friendly_name || '',
      orderData.shippingOption?.shipping_amount?.amount || '',
      orderData.shippingOption?.shipping_amount?.currency || '',
      orderData.shippingOption?.estimated_delivery_date || '',
      JSON.stringify(orderData.items || orderData.cart || {}),
      JSON.stringify(orderData.customFields || orderData.meta || {})
    ]
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetsId,
    range: 'Orders!A1',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values
    }
  });
}


app.post('/api/shipping-rates', async (req, res) => {
  try {
    const { toAddress, weight = 1 } = req.body;

    console.log('Calculating shipping rates for:', toAddress);

    const parcel = {
      length: "13",
      width: "11",
      height: "2",
      distanceUnit: "in",
      weight: "1",
      massUnit: "lb"
    };

    console.log('Creating Shippo shipment...');

    const shipment = await shippo.shipments.create({
      addressFrom: {
        name: "Cornell University",
        company: "Cornell University",
        street1: "Day Hall",
        city: "Ithaca",
        state: "NY",
        zip: "14850",
        country: "US",
        phone: "+1 607 379 2418",
        email: "st798@cornell.edu"
      },
      addressTo: {
        name: toAddress?.name || "Customer",
        street1: toAddress?.address_line1 || toAddress?.street1 || "",
        city: toAddress?.city_locality || toAddress?.city || "",
        state: toAddress?.state_province || toAddress?.state || "",
        zip: toAddress?.postal_code || toAddress?.zip || "",
        country: toAddress?.country_code || toAddress?.country || "US",
        phone: toAddress?.phone || "",
        email: toAddress?.email || ""
      },
      parcels: [parcel],
      async: false
    });

    console.log('Shipment response:', {
      object_id: shipment?.objectId,
      status: shipment?.status,
      rates_count: Array.isArray(shipment?.rates) ? shipment.rates.length : 0
    });

    if (!shipment?.rates || shipment.rates.length === 0) {
      throw new Error('No shipping rates available');
    }

    const formattedRates = shipment.rates
      .filter(rate => rate && rate.amount && !isNaN(parseFloat(rate.amount)))
      .map(rate => ({
        rate_id: rate.objectId,
        service_type: rate.servicelevel?.token || 'standard',
        service_code: rate.servicelevel?.token || 'standard',
        carrier_friendly_name: `${rate.provider || 'Unknown'} ${rate.servicelevel?.name || ''}`.trim(),
        shipping_amount: {
          amount: parseFloat(rate.amount),
          currency: (rate.currency || 'USD').toLowerCase()
        },
        delivery_days: rate.estimatedDays || null,
        duration_terms: rate.durationTerms || null,
        estimated_delivery_date: rate.arrivesBy || null,
        servicelevel_name: rate.servicelevel?.name || ''
      }))
      .sort((a, b) => (a.shipping_amount.amount || 0) - (b.shipping_amount.amount || 0))
      .slice(0, 5); // Return only top 5 cheapest options

    console.log(`Retrieved ${formattedRates.length} shipping rates`);
    console.log("Formatted rates:", JSON.stringify(formattedRates, null, 2));
    return res.json({ rates: formattedRates });

  } catch (error) {
    console.error('Shipping calculation error:', error);

    return res.status(500).json({
      error: 'Failed to calculate shipping rates',
      message: error.message || 'Please verify your shipping address and try again.',
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body || {};
    const orderId = 'ORD-' + Date.now();

    console.log('Order received:', orderData);

    if (orderData.shippingOption?.rate_id) {
      try {
        const transaction = await shippo.transactions.create({
          rate: orderData.shippingOption.rate_id,
          labelFileType: "PDF",
          async: false
        });

        if (transaction?.status === 'SUCCESS') {
          console.log('Shipping label created:', transaction.labelUrl);
        } else {
          console.warn('Label creation failed:', {
            status: transaction.status,
            messages: transaction.messages
          });
        }
      } catch (labelError) {
        console.error('Label creation error:', labelError);
      }
    }

    try {
      await appendOrderToGoogleSheet({
        orderId,
        ...orderData
      });
      console.log('Order appended to Google Sheets successfully');
    } catch (sheetError) {
      console.error('Failed to append order to Google Sheets:', sheetError);
    }

    return res.json({
      success: true,
      orderId,
      message: 'Order submitted successfully!',
      estimatedShipping: orderData.shippingOption?.estimated_delivery_date || null
    });

  } catch (error) {
    console.error('Order submission error:', error);
    return res.status(500).json({
      error: 'Failed to submit order',
      message: 'Please try again later.'
    });
  }
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found', message: `Route ${req.method} ${req.path} not found` });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Shippo integration: ${process.env.SHIPPO_API_KEY ? 'Configured' : 'Missing API key'}`);
});
