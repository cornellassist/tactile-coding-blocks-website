import React, { useRef } from 'react';
import '../styles/design_process.css';

import SaintJoseph from "../images/saint_josephs.jpg";
import Epiq from "../images/epiq.jpg";
import Island from "../images/island.jpg";
import Assistive from "../images/assistive_tech.jpg";
import Abacus from "../images/abacus_bee.jpg";
import Microbit from "../images/microbitpic.png";
import Teach from "../images/teach.png";
import Resna from "../images/resnapic.png";

const DesignProcess: React.FC = () => {

  const juneRef = useRef<HTMLElement | null>(null);
  const sepRef = useRef<HTMLElement | null>(null);
  const julyRef = useRef<HTMLElement | null>(null);
  const febRef = useRef<HTMLElement | null>(null);
  const augRef = useRef<HTMLElement | null>(null);
  const febTeachRef = useRef<HTMLElement | null>(null);
  const aprilRef = useRef<HTMLElement | null>(null);
  const decRef = useRef<HTMLElement | null>(null);


  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

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

          <div className="timeline-item" onClick={() => scrollToSection(juneRef)}>
            <div className="dot"></div>
            <p className="timeline-date">June 2023</p>
            <p className="timeline-label">First Design with Scratch</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(sepRef)}>
            <div className="dot"></div>
            <p className="timeline-date">Sep 2023</p>
            <p className="timeline-label">Feedback from Abacus Bee Princeton</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(julyRef)}>
            <div className="dot"></div>
            <p className="timeline-date">July 2024</p>
            <p className="timeline-label">EPIQ Conference</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(febRef)}>
            <div className="dot"></div>
            <p className="timeline-date">Feb 2025</p>
            <p className="timeline-label">Cornell Assistive Tech</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(augRef)}>
            <div className="dot"></div>
            <p className="timeline-date">Aug 2025</p>
            <p className="timeline-label">ISLAND Conference & NYPL</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(decRef)}>
            <div className="dot"></div>
            <p className="timeline-date">Dec 2025</p>
            <p className="timeline-label">Micro:Bit International Testing</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(febTeachRef)}>
            <div className="dot"></div>
            <p className="timeline-date">Feb 2026</p>
            <p className="timeline-label">Teach Access Student Academy Conference</p>
          </div>

          <div className="timeline-item" onClick={() => scrollToSection(aprilRef)}>
            <div className="dot"></div>
            <p className="timeline-date">April 2026</p>
            <p className="timeline-label">RESNA Competition</p>
          </div>

        </div>
      </div>

      {/* ===================== */}
      {/* JUNE 2023 */}
      {/* ===================== */}

      <section className="product-grid" ref={juneRef}>

        <div className="product-card">
          <h2>First Design with Scratch</h2>
          <div className="product-image">
            <img src={SaintJoseph} alt="Saint Joseph" />
          </div>
        </div>

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
      {/* SEPTEMBER 2023 */}
      {/* ===================== */}

      <section className="product-grid" ref={sepRef}>

        <div className="product-card">
          <h2>Feedback from Abacus Bee Princeton</h2>
          <div className="product-image">
            <img src={Abacus} alt="Abacus Bee" />
          </div>
        </div>

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
      {/* JULY 2024 */}
      {/* ===================== */}

      <section className="product-grid" ref={julyRef}>

        <div className="product-card">
          <h2>EPIQ Conference</h2>
          <div className="product-image">
            <img src={Epiq} alt="EPIQ" />
          </div>
        </div>

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
      {/* FEBRUARY 2025 */}
      {/* ===================== */}

      <section className="product-grid" ref={febRef}>

        <div className="product-card">
          <h2>Cornell Assistive Tech</h2>
          <div className="product-image">
            <img src={Assistive} alt="Assistive Tech Team" />
          </div>
        </div>

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
      {/* AUGUST 2025 */}
      {/* ===================== */}

      <section className="product-grid" ref={augRef}>

        <div className="product-card">
          <h2>ISLAND Conference & NYPL</h2>
          <div className="product-image">
            <img src={Island} alt="Island" />
          </div>
        </div>

        <div className="product-card">
          <h2>August 2025</h2>
          <div className="text-box">
            <p>
              We began building the public website and forming partnerships while presenting at major accessibility conferences to expand reach and adoption.
            </p>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* DEC 2024 - JAN 2025 */}
      {/* ===================== */}

      <section className="product-grid" ref={decRef}>

        <div className="product-card">
          <h2>Micro:Bit International Testing</h2>
          <div className="product-image">
            <img src={Microbit} alt="Microbit Picture" />
          </div>
        </div>

        <div className="product-card">
          <h2>Dec 2025</h2>
          <div className="text-box">
            <p>
              We collaborated with the Raspberry Pi Foundation to test our tactile
              coding system with Micro:Bit Blockly environments. This international
              testing phase explored how tactile blocks could integrate with existing
              accessible coding platforms used by students worldwide.
            </p>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* FEBRUARY 2026 - TEACH ACCESS */}
      {/* ===================== */}

      <section className="product-grid" ref={febTeachRef}>

        <div className="product-card">
          <h2>Teach Access Student Academy Conference</h2>
            <div className="product-image">
              <img src={Teach} alt="Teach Access Logo" />
            </div>
        </div>

        <div className="product-card">
        <h2>February 2026</h2>
        <div className="text-box">
          <p>
            We presented our work at the Teach Access Student Academy, sharing our
            work with accessibility researchers, students, educators, and technology leaders focused on inclusive learning.
          </p>
            <a
              href="https://www.youtube.com/watch?v=dHbV2fi1qdg"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              ▶ Watch Presentation
            </a>
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* APRIL 2026 */}
      {/* ===================== */}

      <section className="product-grid" ref={aprilRef}>

        <div className="product-card">
          <h2>RESNA Student Design Challenge: 2nd Place</h2>
          <div className="product-image">
            <img src={Resna} alt="RESNA" />
          </div>
        </div>

        <div className="product-card">
        <h2>April 2026</h2>
          <div className="text-box">
            <p>
              Our project won 2nd Place at the RESNA Student Design Challenge
              Competition, recognizing our work in assistive technology and
              accessible computing education.
            </p>
            <a
              href="https://www.resna.org/Events/RESNA-2026-Conference-Information/New-York-Metro/2026-RESNA-Student-Design-Challenge-Winners-Finalists"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              🏆 View RESNA Finalists
            </a>
          </div>
        </div>

      </section>

    </div>
  );
};

export default DesignProcess;