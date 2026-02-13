import React from 'react';
import '../styles/global.css';
import '../styles/home.css';

// Block drawings
import b1 from "../images/block1drawing.png"
import b2 from "../images/block2drawing.png"
import b3 from "../images/block3drawing.png"
import b4 from "../images/block1drawing.png"


// Collage images
import h1 from '../images/h1.jpg';
import h2 from '../images/h2.jpg';
import h3 from '../images/h3.jpg';
import h4 from '../images/h4.jpg';
import h5 from '../images/h5.jpg';
import h6 from '../images/h6.jpg';

const Home: React.FC = () => {
  return (
    <div className="page">

    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <div className="hero-subtitle-border">
        <h1>TACTILE CODING BLOCKS</h1>
          <p className="hero-tagline">
            Making computer science accessible for blind and low-vision learners through
            hands-on, tactile programming tools.
          </p>
        </div>
      </div>
    </section>

  <div className="block-strip-between"></div>

    {/* Block Drawings Strip */}
    <section className="block-strip">
      <div className="block-strip-inner">
        <img src={b1} alt="Tactile block drawing" />
        <img src={b2} alt="Tactile block drawing" />
        <img src={b3} alt="Tactile block drawing" />
        <img src={b4} alt="Tactile block drawing" />
      </div>
    </section>


      {/* Collage Section */}
      <section className="collage-section">
        <div className="collage-grid">
          <img src={h4} alt="Assembly of tactile coding blocks in progress" />
          <img src={h1} alt="Close-up of tactile coding block design" />
          <img src={h2} alt="Braille integration on tactile blocks" />
          <img src={h3} alt="3D printing process for tactile blocks" />
          <img src={h5} alt="Completed tactile coding block set" />
          <img src={h6} alt="Students using tactile coding blocks in classroom" />
        </div>
      </section>

    </div>
  );
};

export default Home;
