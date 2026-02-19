import React from 'react';
import '../styles/products.css';
import { useNavigate } from "react-router-dom";


// Product images
import tactileBlocks from '../images/tactileset.jpeg';
import digitalBrailleGenerator from '../images/fusion.png';

const Products: React.FC = () => {
  const navigate = useNavigate(); 
  return (
    <div className="page">

      {/* HERO — identical to Home */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-border">
            <h1>OUR PRODUCTS</h1>
            <p className="hero-tagline">
              tools designed to make computer science accessible through touch
            </p>
          </div>
        </div>
      </section>

      {/* TWO COLUMN PRODUCTS */}
      <section className="products-columns">

        {/* COLUMN 1 */}
        <div className="product-column">
          <h2>Tactile Coding Blocks Kits</h2>
          <p>Ready to use kits that allow students and educators to explore programming concepts through hands-on, tactile interaction.</p>

          <div>
            
            <button
              className="product-btn"
              onClick={() => navigate("/products/microbit")}
            >
              Click to learn more and order kits
            </button>

          </div>

          <img src={tactileBlocks} alt="Tactile Coding Blocks Kit" />
        </div>

        {/* COLUMN 2 */}
        <div className="product-column">
          <h2>3D Print Files</h2>
          <p>Ready to download designs that let educators and makers create their own accessible coding tools locally and affordably.</p>

          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn"
          >
            Click to order 3D Prints
          </a>

          <img
            src={digitalBrailleGenerator}
            alt="Digital Braille Generator"
          />
        </div>

      </section>

    </div>
  );
};

export default Products;
