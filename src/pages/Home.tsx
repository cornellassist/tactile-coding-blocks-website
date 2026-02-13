import React from 'react';
import '../styles/global.css';
import '../styles/home.css';

// Block drawings
import b1 from "../images/block1drawing.png"
import b2 from "../images/block2drawing.png"
import b3 from "../images/block3drawing.png"
import b4 from "../images/block1drawing.png"


// Collage images
import h7 from '../images/annotatedTeam.jpg';

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

    {/* Collage Section */}
    <section className="collage-section">
      <div className="collage-grid">
        <img src={h7} alt="Team photo of the tacticle coding blocks group" />
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

    </div>
  );
};

export default Home;
