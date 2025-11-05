// src/App.tsx
import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products';
import CurrentDesign from './pages/current_design';
import DesignProcess from './pages/design_process';
import WhyUs from './pages/why_us';
import ComingSoon from './pages/coming_soon';
import logo from './images/logo.jpg';
import './styles.css';

function App() {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar (shared across all pages) */}
      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Company Logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            Home
          </Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={closeMenu}>
            Our Products
          </Link>
          <Link to="/current-design" className={location.pathname === '/current-design' ? 'active' : ''} onClick={closeMenu}>
            Current Design
          </Link>
          <Link to="/design-process" className={location.pathname === '/design-process' ? 'active' : ''} onClick={closeMenu}>
            Design Process
          </Link>
          <Link to="/why-us" className={location.pathname === '/why-us' ? 'active' : ''} onClick={closeMenu}>
            Why Us
          </Link>
          <Link to="/coming-soon" className={location.pathname === '/coming-soon' ? 'active' : ''} onClick={closeMenu}>
            Coming Soon
          </Link>
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
