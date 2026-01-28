import React from 'react';
import '../styles.css';

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
        <h1>Tactile Coding Blocks</h1>
        <p>Make Computer Science Accessible for Low Vision/Blind Learners</p>
      </section>

      <section className="collage-section">
        <div className="collage-grid">
          <img src={h4} alt="Assembly in progress" />
          <img src={h1} alt="Tactile block design detail" />
          <img src={h2} alt="Braille integration detail" />
          <img src={h3} alt="3D printing process" />
          <img src={h5} alt="Completed tactile blocks" />
          <img src={h6} alt="Classroom usage example" />
        </div>
      </section>
  </div>
  );
};

export default Home;
