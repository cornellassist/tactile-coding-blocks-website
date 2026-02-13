import React from 'react';
import '../styles/design_process.css';
import SaintJoseph from "../images/saint_josephs.jpg"
import Epiq from "../images/epiq.jpg"
import Island from "../images/island.jpg"
import Assistive from "../images/assistive_tech.jpg"
import Abacus from "../images/abacus_bee.jpg"

const DesignProcess: React.FC = () => {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-border">
            <h1>DESIGN PROCESS</h1>
            <p>our timeline + history</p>
          </div>
        </div>
      </section>

      {/* Timeline Navigation */}
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-events">
          <div className="timeline-item">
            <a href="#june2023">
              <div className="dot"></div>
              <p className="timeline-date">June 2023</p>
              <p className="timeline-label">First Design with Scratch</p>
            </a>
          </div>

          <div className="timeline-item">
            <a href="#sep2023">
              <div className="dot"></div>
              <p className="timeline-date">Sep 2023</p>
              <p className="timeline-label">Feedback from Abacus Bee Princeton</p>
            </a>
          </div>

          <div className="timeline-item">
            <a href="#july2024">
              <div className="dot"></div>
              <p className="timeline-date">July 2024</p>
              <p className="timeline-label">EPIQ Conference</p>
            </a>
          </div>

          <div className="timeline-item">
            <a href="#feb2025">
              <div className="dot"></div>
              <p className="timeline-date">Feb 2025</p>
              <p className="timeline-label">Cornell Assistive Tech</p>
            </a>
          </div>

          <div className="timeline-item">
            <a href="#aug2025">
              <div className="dot"></div>
              <p className="timeline-date">Aug 2025</p>
              <p className="timeline-label">ISLAND Conference & NYPL</p>
            </a>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* JUNE 2023             */}
      {/* ===================== */}

      <section className="product-grid" id="june2023">

        {/* LEFT: title + image */}
        <div className="product-card">
          <h2>First Design with Scratch</h2>
          <div className="product-image">
            <img src={SaintJoseph} alt="Saint Joseph" />
          </div>
        </div>

        {/* RIGHT: description */}
        <div className="product-card">
          <h2>June 2023</h2>
          <div className="text-box">
            <p>
              We designed our first iteration of the tactile coding blocks for the Mountain Lakes Makers Space at St. Joseph's School for Blind in New Jersey. 
              Our original idea used Scratch to translate blocks into a 3D printed tactile format, but the system still required heavy teacher support and was not fully accessible.
            </p>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* SEPTEMBER 2023        */}
      {/* ===================== */}

      <section className="product-grid" id="sep2023">

        {/* LEFT */}
        <div className="product-card">
          <h2>Feedback from Abacus Bee Princeton</h2>
          <div className="product-image">
            <img src={Abacus} alt="Abacus Bee" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-card">
          <h2>September 2023</h2>
          <div className="text-box">
            <p>
              We created a redesigned block system and tested it with blind adults at Abacus Bee Princeton. 
              The feedback highlighted improvements in tactile clarity and accessibility, while also helping us refine usability and interaction design.
            </p>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* JULY 2024             */}
      {/* ===================== */}

      <section className="product-grid" id="july2024">

        {/* LEFT */}
        <div className="product-card">
          <h2>EPIQ Conference</h2>
          <div className="product-image">
            <img src={Epiq} alt="EPIQ" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-card">
          <h2>July 2024</h2>
          <div className="text-box">
            <p>
              We developed a teaching curriculum and presented it at the EPIQ Conference to visually impaired educators across the U.S., gaining valuable direction and support for scaling the project.
            </p>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* FEBRUARY 2025         */}
      {/* ===================== */}

      <section className="product-grid" id="feb2025">

        {/* LEFT */}
        <div className="product-card">
          <h2>Cornell Assistive Tech</h2>
          <div className="product-image">
            <img src={Assistive} alt="Assistive Tech Team" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-card">
          <h2>February 2025</h2>
          <div className="text-box">
            <p>
              The project expanded within Cornell Assistive Technologies, adding engineering support, OpenSCAD automation, and new tactile design explorations.
            </p>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* AUGUST 2025           */}
      {/* ===================== */}

      <section className="product-grid" id="aug2025">

        {/* LEFT */}
        <div className="product-card">
          <h2>ISLAND Conference & NYPL</h2>
          <div className="product-image">
            <img src={Island} alt="Island" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-card">
          <h2>August 2025</h2>
          <div className="text-box">
            <p>
              We began building the public website and forming partnerships while presenting at major accessibility conferences to expand reach and adoption.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default DesignProcess;
