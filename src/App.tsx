// src/App.tsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products';
import CurrentDesign from './pages/current_design';
import DesignProcess from './pages/design_process';
import WhyUs from './pages/why_us';
import ComingSoon from './pages/coming_soon';
import logo from './images/logo.jpg';
import './styles.css';

function App() {
  return (
    <>
      {/* Navbar (shared across all pages) */}
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/current-design">Current Design</Link>
          <Link to="/design-process">Design Process</Link>
          <Link to="/why-us">Why Us</Link>
          <Link to="/coming-soon">Coming Soon</Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/current-design" element={<CurrentDesign />} />
        <Route path="/design-process" element={<DesignProcess />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default App;
