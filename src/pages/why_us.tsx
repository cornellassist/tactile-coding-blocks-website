import React from 'react';
import '../styles/why_us.css';

import leadsPic from '../images/leads.JPG';
import mechePic from '../images/meche.JPG';
import softwarePic from '../images/software.JPG';

const WhyUs: React.FC = () => {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-border">
            <h1>WHY US</h1>
            <p>what makes our approach different</p>
          </div>
        </div>
      </section>

      {/* FULL WIDTH TEAM SECTION */}
      <section className="team-section">

        {/* LEADS */}
        <div className="team-card-wide">
          <img src={leadsPic} alt="Project leads" />
          <h2>Project Leads</h2>
          <p>
            Savaas Iqbal (left), William Ellis (right)
          </p>
        </div>

        {/* MECHE */}
        <div className="team-card-wide">
          <img src={mechePic} alt="Mechanical engineering team" />
          <h2>Mechanical Engineering</h2>
          <p>
            Shannon Lin, Rishabh Dholakia, Andy Chen, William Ellis, Emily Wang, Sahana Behera
          </p>
        </div>

        {/* SOFTWARE */}
        <div className="team-card-wide">
          <img src={softwarePic} alt="Software team" />
          <h2>Software</h2>
          <p>
            Shannon Lin, Lila Alderete, Madhu Balaji, Sahana Behera
          </p>
        </div>

      </section>

      {/* MOTIVATION + PERKS */}
      <section className="why-us-section">

        <div className="why-us-text">

          <div className="why-block">
            <h2>Our Motivation</h2>
            <ul>
              <li>Existing tools are expensive (often $500+ per set)</li>
              <li>Skills learned don’t transfer into real programming</li>
              <li>Advanced computing concepts are rarely introduced</li>
            </ul>
          </div>

          <div className="why-block">
            <h2>Perks of Our Solution</h2>
            <ul>
              <li>Manufacturing cost under $15</li>
              <li>Works with any language and any environment</li>
              <li>Fully customizable for curriculum and accessibility needs</li>
            </ul>
          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">

        <div className="testimonial-card">
          <blockquote>
            "Using the blocks greatly simplifies learning by removing the
            technological barrier and allowing students to focus on concepts first."
          </blockquote>
        </div>

        <div className="testimonial-card">
          <blockquote>
            "Students seamlessly moved between tactile blocks and Quorum,
            reinforcing understanding through physical interaction."
          </blockquote>
        </div>

        <div className="testimonial-card">
          <blockquote>
            "Within an hour, students were able to build, test, and modify programs
            using the tactile system."
          </blockquote>
        </div>

      </section>

    </div>
  );
};

export default WhyUs;
