import React from 'react';
import '../styles/why_us.css';
import teamPic from '../images/team_pic.jpg';

const WhyUs: React.FC = () => {
  return (
    <div className="page">

      {/* HERO — matches other pages */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle-border">
            <h1>WHY US</h1>
            <p>What makes our approach different</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="why-us-section">

        {/* LEFT SIDE */}
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

        {/* RIGHT SIDE IMAGE */}
        <div className="team-image">
          <img src={teamPic} alt="Picture of the team" />
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
