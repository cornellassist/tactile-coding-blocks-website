import React from 'react';
import '../styles.css';

// Product images
import tactileBlocks from '../images/tactile_blocks.jpg';
import digitalBrailleGenerator from '../images/digital_braille_generator.jpg';

// Collage images
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';


const Products: React.FC = () => {
  return (
    <div className="page">
      <section className="products-header">
        <h1>Our Products</h1>
        <p className="tagline">Available to you!</p>
      </section>

      <section className="product-grid">
        <div className="product-card">
          <div className="product-image">
            <img src={tactileBlocks} alt="Tactile Coding Blocks Kit" />
          </div>
          <div className="product-content">
            <h2>Tactile Coding Blocks Kits</h2>
            <p>For you or your students to build!</p>
          </div>
          <a
            href="http://localhost:4000"
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn"
          >
            Click to learn more and order kits
          </a>
        </div>

        <div className="product-card">
          <div className="product-image">
            <img
              src={digitalBrailleGenerator}
              alt="Digital Braille Generator"
            />
          </div>
          <div className="product-content">
            <h2>3D Print Files</h2>
            <p>So you can create yourself!</p>
          </div>
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="product-btn"
          >
            Click to order 3D Prints
          </a>
        </div>
      </section>

      <section className="collage-section">
        <div className="collage-grid">
          <img src={h1} alt="Tactile block design detail" />
          <img src={h2} alt="Braille integration detail" />
          <img src={h3} alt="3D printing process" />
          <img src={h4} alt="Assembly in progress" />
          <img src={h5} alt="Completed tactile blocks" />
          <img src={h6} alt="Classroom usage example" />
        </div>
      </section>
    </div>
  );
};

export default Products;
