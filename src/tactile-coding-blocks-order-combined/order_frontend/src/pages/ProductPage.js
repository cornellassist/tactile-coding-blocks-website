import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import quorumKitImage from './quorumKit.png';
import microbitKitImage from './microbitKit.jpg';

const ProductPage = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: "quorum",
      name: "Quorum Blocks Kit",
      description: "Description",
      features: [
        "...",
        "..."
      ],
      image: quorumKitImage,
      route: "/order/quorum"
    },
    {
      id: "microbit",
      name: "Micro:bit Blocks Kit",
      description: "Description",
      features: [
        "...",
        "..."
      ],
      image: microbitKitImage,
      route: "/order/microbit"
    }
  ];

  return (
    <div className="product-page">
      <div className="product-container">
        <h1 className="product-title">Choose Your Tactile Coding Kit</h1>
        <p className="product-subtitle">
          Select the kit that best fits your learning needs.
          Both kits are designed for accessible, hands-on coding education.
        </p>

        <div className="cad-download-section">
          <div className="cad-content">
            <h2>Download CAD Files for Free</h2>
            <p>Print the blocks yourself if you have access to a 3D printer</p>
          </div>
          <button className="btn-download" onClick={() => navigate('/download')}>
            Download
          </button>
        </div>

        <p className="cad-info-text">
          If you don't have CAD knowledge or access to a 3D printer, don't worry—you can order the kit ready-made below!
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                  <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>

                <ul className="product-features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="product-pricing">
                  <span className="price-label">Kit Price:</span>
                  <span className="price">Free</span>
                  <span className="shipping-note">+ shipping costs</span>
                </div>

                <button
                  className="btn-order"
                  onClick={() => navigate(product.route)}
                >
                  Order This Kit
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="info-section">
          <h3>About Our Kits</h3>
          <p>
            All kits include high-quality 3D printed components, detailed instructions,
            and are designed with accessibility in mind. Choose optional add-ons and
            filament colors during the ordering process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;