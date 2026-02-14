import React from "react";
import "../styles/microbit.css";
import microbitLogo from "../images/microbitLogo.png";
import doorbellImg from "../images/doorbell.png";
import shakeAlarmImg from "../images/shakeAlarm.png";

const MicrobitPage: React.FC = () => {
    const scrollToPremade = () => {
    const el = document.getElementById("premade");
    if (!el) return;

    const yOffset = -110;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });
    };

    return (
        
    <div className="microbit-page">

      {/* HERO SECTION */}
      <section className="hero">

        <h1 className="hero-title">
        micro:bit blocks 
        <img 
            src={microbitLogo} 
            alt="micro:bit logo" 
            className="microbit-logo"
        />
        </h1>


        <div className="card-grid">

          {/* CARD 1 */}
          <div className="card">
            <h3>Download Pre-Made micro:bit Sets</h3>

            <a
            href="#premade"
            className="card-btn"
            onClick={(e) => {
                e.preventDefault();
                scrollToPremade();
            }}
            >
            View ZIP Sets
            </a>


            <div className="img-placeholder">PUT IMAGE HERE</div>

            <p>
              Download ready-to-use projects and starter kits to explore
              examples, learn the basics, and start building quickly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <h3>Order micro:bit Block Kits</h3>

            <a
            href="https://microbit.org/"
            className="card-btn"
            target="_blank"
            rel="noopener noreferrer"
            >
            Order Here
            </a>

            <div className="img-placeholder">PUT IMAGE HERE</div>

            <p>
              Order physical micro:bit kits with the components you need for
              hands-on learning, classroom use, or personal projects.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <h3>Try micro:bit Block Editor</h3>

            <button className="card-btn">Open Editor</button>

            <div className="img-placeholder">PUT IMAGE HERE</div>

            <p>
              Open the MakeCode editor to create, test, and experiment with
              block-based programs for your micro:bit.
            </p>
          </div>

        </div>
      </section>

      {/* PREMADE SETS */}
    <section className="premade-section" id="premade">


    <h2>Pre-Made Sets</h2>

    {/* DOORBELL */}
    <div className="premade-card">

        <div className="premade-left">
        <h3>Doorbell</h3>

        <img
            src = {doorbellImg}
            alt="Doorbell blocks"
            className="premade-image"
        />
        </div>

        <div className="premade-actions">
        
        {/* ZIP DOWNLOAD LINK */}
        <a 
            href="/doorbell_blocks.zip"
            className="action-btn"
            target="_blank"
        >
            Download Doorbell ZIP File
        </a>

        {/* MAKECODE DEMO LINK */}
        <a 
            href="https://makecode.microbit.org/39554-92625-62501-54261"
            className="action-btn"
            target="_blank"
        >
            MakeCode Demo
        </a>

        </div>
    </div>

    {/* SHAKE ALARM */}
    <div className="premade-card">

        <div className="premade-left">
        <h3>Shake Alarm</h3>

        <img
            src = {shakeAlarmImg}
            alt="Shake alarm blocks"
            className="premade-image"
        />
        </div>

        <div className="premade-actions">

        <a 
            href="/shake_alarm_blocks.zip"
            className="action-btn"
            target="_blank"
        >
            Download Shake Alarm ZIP File
        </a>

        <a 
            href="https://makecode.microbit.org/S93931-92433-49899-05213"
            className="action-btn"
            target="_blank"
        >
            MakeCode Demo
        </a>

        </div>
    </div>

    </section>

    </div>
  );
};

export default MicrobitPage;
