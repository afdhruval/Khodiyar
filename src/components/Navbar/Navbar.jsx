import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import navLogo from '../../assets/nav_logo.png';
import './Navbar.css';

const servicesList = [
  { name: 'Residential Construction', desc: 'Complete Home & Villa Building with Material & Labor', path: '/services' },
  { name: 'Commercial Construction', desc: 'Commercial Complexes, Shops & Offices', path: '/services' },
  { name: 'Industrial Infrastructure', desc: 'Warehouses, Sheds & Manufacturing Units', path: '/services' },
  { name: 'Civil & Foundation Works', desc: 'RCC Structural Work, Masonry & Slab Castings', path: '/services' },
  { name: 'Renovation & Remodeling', desc: 'Structural Modernization, Tile Work & Finishing', path: '/services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesDropdown(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        {/* Top Mini Bar with Verified Phone Number 83207 03484 */}
        <div className="navbar__topbar">
          <div className="navbar__container navbar__topbar-inner">
            <div className="navbar__topbar-left">
              <span className="navbar__topbar-item">
                <span className="navbar__topbar-dot" /> મકાન નું બાંધકામ લેબર તથા મટીરીયલ સાથે કામ કરી આપનાર
              </span>
              <span className="navbar__topbar-sep">|</span>
              <span className="navbar__topbar-item">Vasad, Anand · Est. 2005</span>
            </div>
            <div className="navbar__topbar-right">
              <a href="tel:+918320703484" className="navbar__topbar-link">
                <span>📞 Call Dilipbhai: +91 83207 03484</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="navbar__main">
          <div className="navbar__container">
            {/* Brand Logo with User's Architectural Building Logo */}
            <Link to="/" className="navbar__brand">
              <img src={navLogo} alt="Ai Shri Khodiyar Construction Logo" className="navbar__brand-logo" />
              <div className="navbar__brand-text">
                <span className="navbar__brand-title">KHODIYAR</span>
                <span className="navbar__brand-subtitle">CONSTRUCTION</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="navbar__nav" aria-label="Main Navigation">
              <ul className="navbar__links">
                <li>
                  <Link
                    to="/"
                    className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className={`navbar__link ${location.pathname === '/about' ? 'navbar__link--active' : ''}`}
                  >
                    Company
                  </Link>
                </li>

                {/* Services with Dropdown */}
                <li
                  className="navbar__dropdown-trigger"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    to="/services"
                    className={`navbar__link ${location.pathname === '/services' ? 'navbar__link--active' : ''}`}
                  >
                    <span>Services</span>
                    <span className={`navbar__dropdown-arrow ${servicesDropdown ? 'navbar__dropdown-arrow--open' : ''}`}>▾</span>
                  </Link>

                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        className="navbar__mega-menu"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="navbar__mega-header">
                          <span className="studio-tag" style={{ margin: 0 }}>BUILDING SERVICES</span>
                          <Link to="/services" className="navbar__mega-all-link">All Capabilities →</Link>
                        </div>
                        <div className="navbar__mega-grid">
                          {servicesList.map((s) => (
                            <Link key={s.name} to={s.path} className="navbar__mega-item">
                              <span className="navbar__mega-item-name">{s.name}</span>
                              <span className="navbar__mega-item-desc">{s.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link
                    to="/projects"
                    className={`navbar__link ${location.pathname === '/projects' ? 'navbar__link--active' : ''}`}
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className={`navbar__link ${location.pathname === '/contact' ? 'navbar__link--active' : ''}`}
                  >
                    Contact & Quote
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right Action */}
            <div className="navbar__actions">
              <a href="tel:+918320703484" className="navbar__phone-badge">
                <span className="navbar__phone-icon">📞</span>
                <div className="navbar__phone-text">
                  <span className="navbar__phone-label">Call Dilipbhai</span>
                  <span className="navbar__phone-num">+91 83207 03484</span>
                </div>
              </a>

              <Link to="/contact" className="btn-pill-dark navbar__cta-btn">
                <span>Get a Free Quote</span>
                <div className="btn-arrow-circle">→</div>
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
                <span className="studio-tag">KHODIYAR CONSTRUCTION · VASAD</span>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
                  પ્રો. પ્રજાપતિ દિલીપભાઈ · મો. ૮૩૨૦૭ ૦૩૪૮૪
                </p>
              </div>

              <ul className="mobile-overlay__links">
                <li><Link to="/" className="mobile-overlay__link">Home</Link></li>
                <li><Link to="/about" className="mobile-overlay__link">Company Overview</Link></li>
                <li><Link to="/services" className="mobile-overlay__link">Services & Contracts</Link></li>
                <li><Link to="/projects" className="mobile-overlay__link">Projects</Link></li>
                <li><Link to="/contact" className="mobile-overlay__link">Contact & Estimate</Link></li>
              </ul>

              <div className="mobile-overlay__footer">
                <a href="tel:+918320703484" className="btn-pill-blue" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>📞 Call Dilipbhai: +91 83207 03484</span>
                </a>
                <Link to="/contact" className="btn-pill-dark" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Get Estimate & Quote</span>
                  <div className="btn-arrow-circle">→</div>
                </Link>
                <div className="mobile-overlay__contact-details">
                  <p>📍 બાર ઓરડા ફળીયું, વાસદ, તા.જી. આણંદ</p>
                  <p>📞 મો. ૮૩૨૦૭ ૦૩૪૮૪</p>
                  <p>✉️ info@khodiyarconstruction.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
