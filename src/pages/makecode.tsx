import React from "react";
import "../styles/microbit.css";
import microbitLogo from "../images/microbitLogo.png";
import doorbellImg from "../images/doorbell.png";
import shakeAlarmImg from "../images/shakeAlarm.png";
import startSoundImg from "../images/startSound.png";
import sets from "../images/sets.png";
import fusion from "../images/fusion.png";
import editor from "../images/editor.png";



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

      {/* MICROBIT HERO — NOT SHARED WITH OTHER PAGES */}
      <section className="microbit-hero">

        <h1 className="hero-title">
          Microsoft MakeCode Blocks
          <img 
            src={microbitLogo} 
            alt="MakeCode logo" 
            className="microbit-logo"
          />
        </h1>

        <div className="card-grid">

          {/* CARD 1 */}
          <div className="card">
            <h3>Download Pre-Made MakeCode Program Sets</h3>

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

            <img
              src={fusion}
              alt="Pre-made MakeCode sets"
              className="card-image"
            />

            <p>
              Download ready-to-use projects and starter kits to explore
              examples, learn the basics, and start building quickly.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <h3>Order physical MakeCode Block Kits</h3>

            <a
              className="card-btn"
            >
              Coming Soon
              {/* Order Here */}
            </a>

            <img
              src={sets}
              alt="makecode kits"
              className="card-image"
            />

            <p>
              Order physical MakeCode kits for micro:bit blocks with the components you need for
              hands-on learning, classroom use, or personal projects.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <h3>Try MakeCode Block Editor</h3>

<a
              href="https://makecode.microbit.org/#editor"
              className="card-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Editor
            </a>

            <img
              src={editor}
              alt="microbit editor"
              className="card-image"
            />

            <p>
              Open the MakeCode editor to create, test, and experiment with
              block-based programs for your micro:bit.
            </p>
          </div>

        </div>
      </section>

      {/* PREMADE SETS */}
      <section className="premade-section" id="premade">

        <h2>Pre-Made MakeCode Program Sets</h2>

        {/* DOORBELL */}
        <div className="premade-card">

          <div className="premade-left">
            <h3>Doorbell program</h3>

            <img
              src={doorbellImg}
              alt="Doorbell blocks"
              className="premade-image"
            />
          </div>

          <div className="premade-actions">
            
            <div className="download-row">
              <a
                href="/doorbell_blocks.zip"
                className="action-btn"
                target="_blank"
              >
                Download Doorbell program ZIP File
              </a>
              <span className="download-disclaimer">
                Personal use only. No commercial use allowed.
              </span>
            </div>

            <a 
              href="https://makecode.microbit.org/S96517-87655-58408-89888"
              className="action-btn"
              target="_blank"
            >
              Open program in MakeCode
            </a>

          </div>
        </div>

        {/* SHAKE ALARM */}
        <div className="premade-card">

          <div className="premade-left">
            <h3>Shake alarm program</h3>

            <img
              src={shakeAlarmImg}
              alt="Shake alarm blocks"
              className="premade-image"
            />
          </div>

          <div className="premade-actions">

            <div className="download-row">
              <a
                href="/shake_alarm_blocks.zip"
                className="action-btn"
                target="_blank"
              >
                Download Shake alarm program ZIP File
              </a>
              <span className="download-disclaimer">
                Personal use only. No commercial use allowed.
              </span>
            </div>

            <a 
              href="https://makecode.microbit.org/S01644-42538-29964-54980"
              className="action-btn"
              target="_blank"
            >
              Open program in MakeCode
            </a>

          </div>
        </div>

        <div className="premade-card">
          {/* START SOUND */}
          <div className="premade-left">
            <h3>Start sound program</h3>

            <img
              src={startSoundImg}           
              alt="Start sound blocks"
              className="premade-image"
            />
          </div>

          <div className="premade-actions">

            <div className="download-row">
              <a
                href="/start_sound_blocks.zip" 
                className="action-btn"
                target="_blank"
              >
                Download Start sound program ZIP File
              </a>
              <span className="download-disclaimer">
                Personal use only. No commercial use allowed.
              </span>
            </div>

            <a
              href="https://makecode.microbit.org/S07721-59216-14601-19555" 
              className="action-btn"
              target="_blank"
            >
              Open program in MakeCode
            </a>

          </div>
        </div>

      </section>
      
      {/* Kudos to Micro:Bit Accessibility */}
      <section className="micro:bit-kudos"> 
        <p>
          Find additional screen-reader based accessibility resources at{" "}
          <a
            href="https://microbit.org/accessibility/makecode-screenreader"
            target="_blank"
            rel="noopener noreferrer"
          >
            microbit.org/accessibility/makecode-screenreader
          </a>
        </p>
      </section>

    </div>
  );
};

export default MicrobitPage;
