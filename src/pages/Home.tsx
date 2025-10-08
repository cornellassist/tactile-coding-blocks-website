import React from 'react';
import '../styles.css'; // Adjust the path if your CSS is elsewhere

const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Tactile Coding Blocks</h1>
        <p>Make CS Accessible for Low Vision/Blind Learners</p>
      </section>

      {/* Media Placeholder */}
      <section className="media-placeholder">
        <p>Animation in CAD</p>
      </section>
    </div>
  );
};

export default Home;
