import React from 'react';
import '../styles.css';
import advancedConceptsImage from '../images/advanced_concepts.jpg';
import Curriculum from '../images/curriculums.jpg';

const ComingSoon: React.FC = () => {
  return (
    <div className="page">
      {/* Page Heading */}
      <section className="products-header">
        <h1>Coming Soon</h1>
      </section>

      {/* Row 1: Curriculums */}
      <section className="product-grid">
        {/* Image 1 */}
        <div className="product-card">
          <div className="product-image">
            <img src={Curriculum} alt="Curriculum Materials" />
          </div>
        </div>

        {/* Description 1 */}
        <div className="product-card">
          <h2>Curriculums</h2>
          <div className="product-content">
            <div className="text-box">
              <p>
                We are currently leveraging curriculums available on OpenSCAD to
                build curriculums for your students to learn. We aim to have a
                wide range of curriculums available which can accommodate for
                students with a wide range of skills and interests. We hope they
                will find curriculums ranging from building videogames to web
                development interesting and challenging!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Advanced Concepts */}
      <section className="product-grid">
        {/* Description 2 */}
        <div className="product-card">
          <h2>Advanced Concepts</h2>
          <div className="product-content">
            <div className="text-box">
              <p>
                Our goal is to convey advanced (college-level) computer science
                concepts. The images to the left are some visualizations of the
                ongoing work we have been doing to convey the concept of call
                frames through our tactile coding blocks.
              </p>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="product-card">
          <div className="product-image">
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