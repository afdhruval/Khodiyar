import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';
import './Navbar.css';

const navLinks = [
  { label: 'Studio', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo brand reference */}
          <Link to="/" className="navbar__brand">
            <span className="navbar__brand-dot" />
            <div className="navbar__brand-wrap">
              <span className="navbar__brand-name">khodiyar_</span>
              <span className="navbar__brand-tag">construction</span>
            </div>
          </Link>

          {/* Center Navigation */}
          <nav className="navbar__nav" aria-label="Main Navigation">
            <ul className="navbar__links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action */}
          <div className="navbar__actions">
            <Link to="/contact" className="btn-pill-outline navbar__cta">
              <span>Start a project</span>
              <span className="navbar__cta-arrow">→</span>
            </Link>

            <button
              className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-overlay__inner">
              <div className="mobile-overlay__meta">
                <span className="studio-tag">EST. 2005 · GUJARAT</span>
              </div>
              <ul className="mobile-overlay__links">
                <li>
                  <Link to="/" className="mobile-overlay__link">Home</Link>
                </li>
                {navLinks.map((link, i) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`mobile-overlay__link ${location.pathname === link.path ? 'mobile-overlay__link--active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mobile-overlay__footer">
                <Link to="/contact" className="btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Start a project</span>
                  <div className="btn-arrow-circle">→</div>
                </Link>
                <div className="mobile-overlay__contact-details">
                  <p>Ahmedabad, Gujarat, India</p>
                  <p>+91 98765 43210</p>
                  <p>info@khodiyarconstruction.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
