// src/App.tsx
import { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/products';
import CurrentDesign from './pages/current_design';
import DesignProcess from './pages/design_process';
import WhyUs from './pages/why_us';
import ComingSoon from './pages/coming_soon';
import './styles/global.css';
import logo from './images/logo.jpg'


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
        <Link to="https://www.cornellassist.com/" className="brand">
          CORNELL ASSISTIVE TECHNOLOGIES
        </Link>

        {/* Hamburger Menu Button */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
            HOME
          </Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={closeMenu}>
            PRODUCTS
          </Link>
          <Link to="/current-design" className={location.pathname === '/current-design' ? 'active' : ''} onClick={closeMenu}>
            CURRENT DESIGN
          </Link>
          <Link to="/design-process" className={location.pathname === '/design-process' ? 'active' : ''} onClick={closeMenu}>
            DESIGN PROCESS
          </Link>
          <Link to="/why-us" className={location.pathname === '/why-us' ? 'active' : ''} onClick={closeMenu}>
            WHY US
          </Link>
          <Link to="/coming-soon" className={location.pathname === '/coming-soon' ? 'active' : ''} onClick={closeMenu}>
            COMING SOON
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

      {/* FOOTER */}
    <footer className="footer">

          <div className="footer-container">

            {/* LEFT SIDE */}
            <div className="footer-left">

              <div className="footer-text">
                <h2>Cornell Assistive Technologies</h2>
                <p className="footer-copyright">
                  © 2026 Cornell Assistive Technologies
                </p>
              </div>

              <img
                src={logo}
                alt="Cornell Assistive Technologies Logo"
                className="footer-logo"
              />

            </div>

            {/* RIGHT SIDE */}
            <div className="footer-links">

              <div className="link-column">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/design-process">Design Process</Link>
              </div>

              <div className="link-column">
                <Link to="/why-us">Why Us</Link>
                <Link to="/current-design">Current Design</Link>
                <Link to="/coming-soon">Coming Soon</Link>
              </div>

            </div>

          </div>

        </footer>
    </>
  );
}

export default App;
