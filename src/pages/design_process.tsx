import React from 'react';
import '../styles.css';
import SaintJoseph from "../images/saint_josephs.jpg"
import Epiq from "../images/epiq.jpg"
import Island from "../images/island.jpg"
import Assistive from "../images/assistive_tech.jpg"
import Abacus from "../images/abacus_bee.jpg"

const DesignProcess: React.FC = () => {
  return (
    <div className="page">
      {/* Page Heading */}
      <section className="products-header">
        <h1>Design Process</h1>
        <p className="tagline">Our Timeline</p>
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
              <p className="timeline-label">
                Feedback from Abacus Bee Princeton
              </p>
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

      {/* Timeline Sections */}

      {/* June 2023 */}
      <section className="product-grid" id="june2023">
        <div className="product-card">
          <h2>First Design with Scratch</h2>
          <div className="product-image">
            <img src={SaintJoseph} alt="Saint Joseph" />
          </div>        
          </div>
        <div className="product-card">
          <h2>June 2023</h2>
          <div className="text-box">
            <p>We designed our first iteration of the tactile coding blocks for the Mountain Lakes Makers Space at St. Joseph's School for Blind in New Jersey. 
              Our original idea used scratch to translate scratch blocks into a 3D printed tactile format. Kids were able to pick up on the skill but they needed a teacher
              to help them, and it was not user friendly because it was entirely drag and drop which is difficult for people with visual impairments.
            </p>
          </div>
        </div>
      </section>

      {/* September 2023 */}
      <section className="product-grid" id="sep2023">
        <div className="product-card">
          <h2>September 2023</h2>
          <div className="text-box">
            <p>We created a new design of a set of 3D printed blocks and got feedback from blind adults at Abacus Bee Princeton. These blocks in quorum were screen reader friendly
              and implented error messages which made sense. We recieved positive feedback overall about parts of the design such as indentation, as well as a lot of people being happy in general that
              someone was considering the blind community in learning computer science. 
            </p>
          </div>
        </div>
        <div className="product-card">
          <h2>Feedback from Abacus Bee Princeton</h2>
          <div className="product-image">
            <img src={Abacus} alt="Abacus Bee" />
          </div> 
        </div>
      </section>

      {/* July 2024 */}
      <section className="product-grid" id="july2024">
        <div className="product-card">
          <h2>EPIQ Conference</h2>
          <div className="product-image">
            <img src={Epiq} alt="EPIQ" />
          </div>
        </div>
        <div className="product-card">
          <h2>July 2024</h2>
          <div className="text-box">
            <p>At this point, we had developed a curriculum to teach a few demo lessons in for loops, repeat blocks, and potentially assigning variables. 
              With this, we attended the EPIQ Conference in Washington, with over 70 attendees being visually impaired teachers from all over the US. We taught the teachers how to teach with the blocks 
              with sample lesson plans. Overall, they were excited about our product and helped give us more direction for where to take this project next. </p>
          </div>
        </div>
      </section>

      {/* February 2025 */}
      <section className="product-grid" id="feb2025">
        <div className="product-card">
          <h2>February 2025</h2>
          <div className="text-box">
            <p>Savaas started to lead the project within Cornell Assistive Technologies Project team, getting a lot more help, leading weekly work sessions, and spearheading the autogeneration portion.
              The team also met with Richard He to learn more about his braille generator project, and how he could incorporate a similar workflow to ours. Team memebers started learning OpenSCAD and quorum to make an algorithm to put the output block together. 
              They also started to learn basic CAD to create new block ideas, make a game development curriculum, as well as tactile representations of advanced computer science concepts from a call frame to a counter.  
             </p>
          </div>
        </div>
        <div className="product-card">
          <h2>Cornell Assistive Tech</h2>
          <div className="product-image">
            <img src={Assistive} alt="Asstive Tech Team" />
          </div>        </div>
      </section>

      {/* August 2025 */}
      <section className="product-grid" id="aug2025">
        <div className="product-card">
          <h2>ISLAND Conference & NYPL</h2>
          <div className="product-image">
            <img src={Island} alt="Island" />
          </div>        </div>
        <div className="product-card">
          <h2>August 2025</h2>
          <div className="text-box">
            <p>We have now started developing a website to showcase the entire tactile coding blocks project, as well as an ordering page.
              We also started having talks with blockly at Google and Micro:Bit at Microsoft to potentially collaborate and share our work further. 
              Most recently, we have been accepted into the Princeton Island Conference and New York Public Library Accessible Technology Conference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignProcess;
