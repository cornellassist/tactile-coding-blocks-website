import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { kit, kitName, addons, filamentType, filamentColor, shippingAddress, donationAmount = 0, shippingRates = [] } = state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    address: shippingAddress || '',
    deliveryNote: '',
    acceptTerms: false
  });

  const [selectedShipping, setSelectedShipping] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state) navigate('/');
  }, [state, navigate]);

  if (!state) return null;

  const handleSubmitOrder = async () => {
    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions');
      return;
    }

    if (!selectedShipping) {
      alert('Please select a shipping option');
      return;
    }

    if (!formData.fullName.trim()) {
      alert('Please enter your full name');
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        kit,
        kitName,
        addOns: Object.keys(addons).filter(key => addons[key]),
        filamentType,
        filamentColor,
        customerInfo: formData,
        shippingOption: selectedShipping,
        donationAmount,
        totalCost: selectedShipping.shipping_amount.amount + donationAmount
      };

      const response = await fetch('http://localhost:5001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit order');
      }

      const data = await response.json();
      if (data.success) {
        alert(`Order submitted successfully! Order ID: ${data.orderId}\n\nYou will receive an email confirmation shortly.`);
        navigate('/');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Error submitting order. Please try again.');
    }
    setLoading(false);
  };

  const totalCost = (Number(selectedShipping?.shipping_amount.amount) || 0) + donationAmount;

  // Helper function to format addon names
  const getAddonDisplayName = (addonKey) => {
    const addonNames = {
      callFrame: 'Call Frame + Counter',
      makeGame: 'Make a Game',
      sensorPack: 'Sensor Pack',
      advancedLogic: 'Advanced Logic Blocks'
    };
    return addonNames[addonKey] || addonKey;
  };

  return (
    <div className="container">
      <div className="breadcrumb">
        <button onClick={() => navigate(-1)} className="breadcrumb-link">
          ← Back to Order
        </button>
      </div>

      <h1 className="title">Checkout</h1>
      <div className="flex-box">
        <div className="summary">
          <h2>Order Summary</h2>
          <div className="order-item">
            <h3>1 x {kitName || kit}</h3>
            <div className="order-details">
              <p><strong>Add-ons:</strong> {
                Object.keys(addons).filter(key => addons[key]).length > 0
                  ? Object.keys(addons).filter(key => addons[key]).map(key => getAddonDisplayName(key)).join(', ')
                  : 'None'
              }</p>
              <p><strong>Filament Type:</strong> {filamentType}</p>
              <p><strong>Filament Color:</strong> {filamentColor}</p>
            </div>
          </div>

          {donationAmount > 0 && (
            <div className="donation-summary">
              <h3>Donation: ${donationAmount.toFixed(2)}</h3>
              <p>Thank you for supporting the project!</p>
            </div>
          )}

          <div className="shipping-section">
            <h3>Shipping Options</h3>
            <p className="shipping-info">We ship from Cornell University</p>
            {shippingRates.length > 0 ? (
              shippingRates.map((rate, index) => (
                <label key={index} className="shipping-option">
                  <input
                    type="radio"
                    name="shipping"
                    value={rate.rate_id}
                    onChange={() =>
                      setSelectedShipping({
                        ...rate,
                        shipping_amount: {
                          ...rate.shipping_amount,
                          amount: Number(rate.shipping_amount.amount)
                        }
                      })
                    }
                    checked={selectedShipping?.rate_id === rate.rate_id}
                  />
                  <div className="shipping-details">
                    <div className="shipping-main">
                      <span className="carrier">{rate.carrier_friendly_name}</span>
                      <span className="cost">${Number(rate.shipping_amount.amount).toFixed(2)}</span>
                    </div>
                    <div className="shipping-delivery">
                      {rate.duration_terms
                        ? rate.duration_terms
                        : `Delivery in ${rate.delivery_days ?? '—'} business days`}
                    </div>
                  </div>
                </label>
              ))
            ) : (
              <p>No shipping rates available. Please go back and enter your address.</p>
            )}
          </div>

          <div className="total-section">
            <h3>Total: ${totalCost.toFixed(2)}</h3>
            <div className="total-breakdown">
              {selectedShipping && (
                <p>Shipping: ${Number(selectedShipping.shipping_amount.amount).toFixed(2)}</p>
              )}
              {donationAmount > 0 && (
                <p>Donation: ${donationAmount.toFixed(2)}</p>
              )}
              <p>Kit: Free</p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Shipping Information</h2>

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Complete Address *</label>
            <input
              type="text"
              placeholder="Street address, city, state, ZIP code"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Delivery Note (Optional)</label>
            <input
              type="text"
              placeholder="Special delivery instructions, etc."
              value={formData.deliveryNote}
              onChange={(e) => setFormData({ ...formData, deliveryNote: e.target.value })}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label className="checkbox-label terms-label">
              <input
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                required
              />
              <span>I accept the terms and conditions</span>
              <a href="#terms" className="terms-link">Read our T&Cs</a>
            </label>
          </div>

          <button
            onClick={handleSubmitOrder}
            className={`btn-primary ${loading ? 'loading' : ''}`}
            disabled={loading || !formData.acceptTerms || !selectedShipping}
          >
            {loading ? 'Submitting Order...' : 'Submit Order'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;