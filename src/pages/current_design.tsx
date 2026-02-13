import React from 'react';
import '../styles/current_design.css';
import digitalBrailleGenerator from '../images/digital_braille_generator.jpg';
import backendOpenscad from '../images/backend_openscad.jpg';
import blockDesign from '../images/block_design.jpg';

const CurrentDesign: React.FC = () => {
  return (
    <div className="page">
      {/* Heading */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-border">
            <h1>CURRENT DESIGN</h1>
            <p>
              How our tactile coding system is built, generated, and optimized for accessibility.
            </p>
          </div>
        </div>
      </section>


      {/* Section 1: OpenSCAD Frontend */}
      <section className="product-grid">
        {/* Image */}
        <div className="product-card">
          <div className="product-image">
            <img src={digitalBrailleGenerator} alt="OpenSCAD Frontend" />
          </div>
        </div>

        {/* Description */}
        <div className="product-card">
          <div className="text-box">
            <h2>OpenSCAD Frontend</h2>
            <p>
              We are leveraging OpenSCAD in order to digitally generate a visual
              representation of the coding blocks. On the left hand side of the
              screen, you will be able to input code which you desire to convert
              into block form. This should automatically generate the 3D
              visualization. This will enable you to customize your own blocks
              and tailor your or your students learning!
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: OpenSCAD Backend */}
      <section className="product-grid">
        {/* Description */}
        <div className="product-card">
          <div className="text-box">
            <h2>OpenSCAD Backend</h2>
            <p>
              From the backend side, we are leveraging OpenSCAD in order to
              generate digital blocks. This means that with every time you
              create a sequence of code, it also creates an OpenSCAD file which
              can be downloaded for your viewing. This autogeneration software
              enables us to generate blocks within mere minutes, whereas this is
              something that used to take us hours!
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="product-card">
          <div className="product-image">
            <img src={backendOpenscad} alt="OpenSCAD Backend" />
          </div>
        </div>
      </section>

      {/* Section 3: Block Design */}
      <section className="product-grid">
        {/* Image */}
        <div className="product-card">
          <div className="product-image">
            <img src={blockDesign} alt="Block Design" />
          </div>
        </div>

        {/* Description */}
        <div className="product-card">
          <div className="text-box">
            <h2>The Blocks Design</h2>
            <p>
              In order to optimize accessibility to visually impaired students,
              we have implemented various design features. The integrated
              braille, dovetail connections, and rubbery texture ensure that the
              blocks are easy to use and play around with.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentDesign;
