import React from 'react';
import '../styles/why_us.css';
import teamPic from '../images/team_pic.jpg';

const WhyUs: React.FC = () => {
  return (
    <div className="page">
      {/* Page Heading */}
      <section className="page-header">
        <h1>Why Us</h1>
      </section>

      {/* Main Content */}
      <section className="why-us-content">
        <div className="why-us-text">
          <h3>Our Motivation</h3>
          <p>Existing tools are expensive ($500 sets)</p>
          <p>Knowledge isn't transferable to more advanced programming</p>
          <p>Advanced computing concepts are not taught</p>

          <h3>Perks of Our Solution</h3>
          <p>Cost - Less than $15 to manufacture</p>
          <p>Any coding language, anywhere</p>
          <p>Customization built-in from color scheme to coding language to concepts</p>
        </div>

        <div className="team-image">
          <img src={teamPic} alt="Picture of the team" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="testimonial-card">
          <blockquote>
            "Using the blocks GREATLY simplifies the task at hand by initially
            eliminating the technology load-navigation, time in listening to
            what a screen reader is doing, zooming issues with a LV student,
            just starting up the laptop and the program. I love this as a first
            step before the computer —even for tech capable students."
          </blockquote>
        </div>

        <div className="testimonial-card">
          <blockquote>
            "I loved that they could emulate the block program they had just set
            up tactually with physical pieces into the coding environment in
            Quorum. They went back and forth between the tactile blocks and the
            coding interface on the laptop."
          </blockquote>
        </div>

        <div className="testimonial-card">
          <blockquote>
            "I think the number of and concepts included in the blocks you sent
            was perfect. Students were able to work through the physical blocks
            and set up the Quorum program and then mess with it just a bit
            within an hour."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
