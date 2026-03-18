import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import quorumKitImage from './quorumKit.png';
import microbitKitImage from './microbitKit.jpg';

const OrderPage = ({ kit: propKit }) => {
  const navigate = useNavigate();
  const { kit: paramKit } = useParams();

  // Capitalize first letter to match config keys
  const capitalizeKit = (kit) => {
    if (!kit) return "Quorum";
    return kit.charAt(0).toUpperCase() + kit.slice(1).toLowerCase();
  };

  const kitType = capitalizeKit(propKit || paramKit);

  // Kit-specific configurations
  const kitConfigs = {
    Quorum: {
      name: "Quorum Blocks Kit",
      description: "Complete tactile coding kit for learning Quorum programming language. Includes coding blocks with Braille labels and detailed instructions for your first projects.",
      image: quorumKitImage,
      addons: {
        callFrame: {
          label: "Call Frame + Counter",
          description: "Advanced frame system with built-in counting mechanism for function calls"
        }
      },
      filamentTypes: ["PLA", "TPU"],
      filamentColors: ["Red", "Blue", "Green", "Black", "White", "Yellow"]
    },
    Microbit: {
      name: "Micro:bit Blocks Kit",
      description: "Tactile coding blocks designed for BBC micro:bit programming. Includes coding blocks with Braille labels and detailed instructions for your first projects.",
      image: microbitKitImage,
      addons: {
        callFrame: {
          label: "Call Frame + Counter",
          description: "Advanced frame system with built-in counting mechanism for function calls"
        }
      },
      filamentTypes: ["PLA", "TPU"],
      filamentColors: ["Red", "Blue", "Green", "Black", "White", "Yellow"]
    }
  };

  const currentKit = kitConfigs[kitType];

  const [addons, setAddons] = useState(
    Object.keys(currentKit.addons).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {})
  );
  const [filamentType, setFilamentType] = useState(currentKit.filamentTypes[0]);
  const [filamentColor, setFilamentColor] = useState(currentKit.filamentColors[0]);
  const [shippingAddress, setShippingAddress] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const calculateShipping = async () => {
    if (!shippingAddress.trim()) {
      alert('Please enter a shipping address');
      return;
    }

    setLoading(true);
    try {
      // Parse basic address info
      const addressParts = shippingAddress.split(',');
      const response = await fetch('http://localhost:5001/api/shipping-rates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toAddress: {
            name: "Customer",
            address_line1: addressParts[0]?.trim() || shippingAddress,
            city_locality: addressParts[1]?.trim() || "Unknown City",
            state_province: addressParts[2]?.trim() || "NY",
            postal_code: addressParts[3]?.trim() || "12345",
            country_code: "US"
          },
          weight: 1 + (Object.values(addons).filter(Boolean).length * 0.5)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate shipping');
      }

      const data = await response.json();

      // Navigate to checkout with all data
      navigate("/checkout", {
        state: {
          kit: kitType,
          kitName: currentKit.name,
          addons,
          filamentType,
          filamentColor,
          shippingAddress,
          donationAmount,
          shippingRates: data.rates
        }
      });
    } catch (error) {
      console.error('Error calculating shipping:', error);
      alert('Error calculating shipping rates. Please check your address and try again.');
    }
    setLoading(false);
  };

  const handleDonate = () => {
    if (donationAmount <= 0) {
      alert('Please enter a donation amount greater than $0');
      return;
    }
    alert(`Thank you for your donation of $${donationAmount.toFixed(2)}!`);
  };

  const toggleAddon = (addonKey) => {
    setAddons({ ...addons, [addonKey]: !addons[addonKey] });
  };

  return (
    <div className="container">
      <div className="breadcrumb">
        <button onClick={() => navigate('/')} className="breadcrumb-link">
          ← Back to Products
        </button>
      </div>

      <h1 className="title">Order Your {currentKit.name}</h1>
      <div className="flex-box">
        <div className="image-container">
          <img
            src={currentKit.image}
            alt={currentKit.name}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        <div className="form-section">
          <h2>{currentKit.name}</h2>
          <p className="description">
            {currentKit.description}
          </p>

          <div className="form-group">
            <h3>Add-Ons</h3>
            {Object.entries(currentKit.addons).map(([key, addon]) => (
              <label key={key} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={addons[key]}
                  onChange={() => toggleAddon(key)}
                />
                <div>
                  <span>{addon.label}</span>
                  <div className="addon-description">{addon.description}</div>
                </div>
              </label>
            ))}
          </div>

          <div className="form-group">
            <label>Filament Type</label>
            <select value={filamentType} onChange={(e) => setFilamentType(e.target.value)}>
              {currentKit.filamentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Filament Color</label>
            <select value={filamentColor} onChange={(e) => setFilamentColor(e.target.value)}>
              {currentKit.filamentColors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Shipping Address *</label>
            <input
              type="text"
              placeholder="Street, City, State, ZIP (e.g., 123 Main St, Ithaca, NY, 14850)"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
            />
            <div className="help-text">Required for shipping cost calculation</div>
          </div>

          <button
            onClick={calculateShipping}
            className={`btn-primary ${loading ? 'loading' : ''}`}
            disabled={loading || !shippingAddress.trim()}
          >
            {loading ? 'Calculating Shipping...' : 'Continue to Checkout'}
          </button>
        </div>
      </div>

      <div className="donation-section">
        <h2>Support the Project</h2>
        <p>The kit is free, but donations are welcome to support the project!</p>
        <div className="donation-input">
          <input
            type="number"
            placeholder="0.00"
            value={donationAmount}
            onChange={(e) => setDonationAmount(parseFloat(e.target.value) || 0)}
            min="0"
            step="0.01"
            className="donation-field"
          />
          <button onClick={handleDonate} className="btn-secondary">
            Add Donation
          </button>
        </div>
        {donationAmount > 0 && (
          <div className="donation-display">
            Current donation: ${donationAmount.toFixed(2)}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;