import React from 'react';
import '../styles/coming_soon.css';
import advancedConceptsImage from '../images/advanced_concepts.jpg';
import Curriculum from '../images/curriculums.jpg';

const ComingSoon: React.FC = () => {
  return (
    <div className="page">

      {/* HERO — same as other pages */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-border">
            <h1>COMING SOON</h1>
            <p>What we’re building next</p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}

      {/* Curriculums */}
      <section className="coming-section">
        <div className="coming-grid">

          {/* LEFT: Title */}
          <div className="coming-title">
            <h2>Curriculums</h2>
          </div>

          {/* RIGHT: Description + Image */}
          <div className="coming-content">
            <p>
              We are currently leveraging curriculums available on OpenSCAD to
              build curriculums for your students to learn. We aim to have a
              wide range of curriculums available which can accommodate for
              students with a wide range of skills and interests. We hope they
              will find curriculums ranging from building videogames to web
              development interesting and challenging!
            </p>

            <img src={Curriculum} alt="Curriculum Materials" />
          </div>

        </div>
      </section>

      {/* Advanced Concepts */}
      <section className="coming-section">
        <div className="coming-grid">

          {/* LEFT: Title */}
          <div className="coming-title">
            <h2>Advanced Concepts</h2>
          </div>

          {/* RIGHT: Description + Image */}
          <div className="coming-content">
            <p>
              Our goal is to convey advanced (college-level) computer science
              concepts. The images to the left are some visualizations of the
              ongoing work we have been doing to convey the concept of call
              frames through our tactile coding blocks.
            </p>

            <img
              src={advancedConceptsImage}
              alt="Image of Tactile Call Frame Work"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default ComingSoon;
