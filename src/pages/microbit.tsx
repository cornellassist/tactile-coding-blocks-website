import React from 'react';
import { useNavigate } from "react-router-dom";
import basicKitImage from "../images/microbitKit.jpg";
import "../styles/microbit.css";

const MicrobitPage = () => {
    const navigate = useNavigate();

    const downloadLink = "/files/microbit-blocks.zip"; // Update with actual path when available

    const handleFileDownload = () => {
        // Trigger file download (placeholder behavior)
        window.open(downloadLink, "_blank");
    };

    return (
        <div className="microbit-page">
            <div className="microbit-container">
                <div className="breadcrumb">
                    <button onClick={() => navigate('/download')} className="breadcrumb-link">← Back to Downloads</button>
                </div>

                <h1 className="microbit-title">micro:bit</h1>

                <div className="microbit-grid">
                    <div className="left-column">
                        <section className="microbit-section tutorial-section box">
                            <h2>micro:bit Block Editor</h2>
                            <p>
                                Learn how to use block-based programming with the official MakeCode editor.
                                Open the editor to create and test programs for your micro:bit.
                            </p>
                            <a
                                className="external-link"
                                href="https://makecode.microbit.org/#editor"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open MakeCode Editor
                            </a>
                        </section>

                        <section className="microbit-section contents-section box">
                            <h2>What's in the ZIP</h2>
                            <p>The micro:bit download ZIP includes the following files:</p>
                            <ul>
                                <li>All STL files for the micro:bit tactile coding blocks</li>
                                <li>Assembly instructions (PDF)</li>
                                <li>Example programs and Hex files for the micro:bit</li>
                                <li>Readme with printing and fitting notes</li>
                            </ul>
                        </section>
                    </div>

                    <div className="right-column">
                        <div className="download-card box">
                            <div className="download-card-image">
                                <img src={basicKitImage} alt="Download micro:bit" />
                            </div>
                            <div className="download-card-body">
                                <h3>Download micro:bit Files</h3>
                                <p>Click below to download the ZIP containing the micro:bit files.</p>
                                <button className="btn-download-file" onClick={handleFileDownload}>Download ZIP</button>
                            </div>
                        </div>

                        <div className="download-card box">
                            <div className="download-card-image">
                                <img src={basicKitImage} alt="Order micro:bit blocks" />
                            </div>
                            <div className="download-card-body">
                                <h3>Order micro:bit Blocks</h3>
                                <p>If you'd like physical micro:bit blocks, place an order.</p>
                                <button className="btn-download-file" onClick={() => navigate('/order/microbit')}>Order micro:bit Blocks</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MicrobitPage;
