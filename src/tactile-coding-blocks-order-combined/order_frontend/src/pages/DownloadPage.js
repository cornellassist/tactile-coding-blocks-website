import React from "react";
import { useNavigate } from "react-router-dom";
import microbitImage from './MicrobitFileScreenshot.jpg';
import quorumImage from './QuorumFileScreenshot.jpg';
import "./DownloadPage.css";

const DownloadPage = () => {
  const navigate = useNavigate();

  const downloadFiles = [
    {
      id: "quorum",
      title: "Quorum Blocks Kit - CAD Files",
      description: "Complete set of 3D printable files for the Quorum tactile coding blocks",
      fileSize: "?? MB",
      fileType: "ZIP (STL files)",
      downloadLink: "/files/quorum-blocks.zip", // Update with actual path
      image: quorumImage,
      includes: [
        "All block STL files",
        "Assembly instructions (PDF)",
        "..."
      ]
    },
    {
      id: "microbit",
      title: "Micro:bit Blocks Kit - CAD Files",
      description: "Complete set of 3D printable files for the Micro:bit tactile coding blocks",
      fileSize: "?? MB",
      fileType: "ZIP (STL files)",
      downloadLink: "/files/microbit-blocks.zip", // Update with actual path
      image: microbitImage,
      includes: [
        "All block STL files",
        "Assembly instructions (PDF)",
        "..."
      ]
    }
  ];

  const handleDownload = (downloadLink, title) => {
    // For now, open in new tab. Replace with actual download logic!!
    window.open(downloadLink, '_blank');
    // Or trigger actual download:
    // const link = document.createElement('a');
    // link.href = downloadLink;
    // link.download = title;
    // link.click();
  };

  return (
    <div className="download-page">
      <div className="download-container">
        <div className="breadcrumb">
          <button onClick={() => navigate('/')} className="breadcrumb-link">
            ← Back to Products
          </button>
        </div>

        <h1 className="download-title">Download CAD Files</h1>
        <p className="download-subtitle">
          Free 3D printable files for our tactile coding block kits. Print them yourself
          with your own 3D printer!
        </p>

        <div className="download-grid">
          {downloadFiles.map((file) => (
            <div key={file.id} className="download-card">
              
              <div className="download-card-header">
                <h2>{file.title}</h2>
              </div>

              <div className="download-card-image">
                <img src={file.image} alt={file.title} />
              </div>
              
              <div className="download-card-body">
                <p className="download-description">{file.description}</p>
                
                <div className="download-specs">
                  <div className="spec-item">
                    <span className="spec-label">File Size:</span>
                    <span className="spec-value">{file.fileSize}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Format:</span>
                    <span className="spec-value">{file.fileType}</span>
                  </div>
                </div>

                <div className="includes-section">
                  <h4>What's Included:</h4>
                  <ul>
                    {file.includes.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn-download-file"
                  onClick={() => handleDownload(file.downloadLink, file.title)}
                >
                  Download Files
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="printing-info">
          <h3>Printing Instructions</h3>
          <div className="info-content">
            <div className="info-section">
              <h4>Recommended Settings:</h4> 
              {/* These are just placeholders, change them!! */}
              <ul>
                <li><strong>Material:</strong> PLA or TPU</li>
                <li><strong>Layer Height:</strong> 0.2mm</li>
                <li><strong>Infill:</strong> 20-30%</li>
                <li><strong>Supports:</strong> Not required for most pieces</li>
                <li><strong>Build Plate Adhesion:</strong> Brim recommended</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;