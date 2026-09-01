import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/nav_logo.png';
import './Footer.css';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer-studio" id="footer">
      <div className="container">
        {/* Massive Top Inquiry Callout */}
        <div className="footer-hero">
          <div className="footer-hero__left">
            <span className="footer-tag">READY TO START YOUR BUILD?</span>
            <h2 className="footer-headline">
              મકાન નું બાંધકામ લેબર તથા મટીરીયલ સાથે.<br />
              <span className="footer-headline-blue">Let's build with master craft.</span>
            </h2>
          </div>

          <div className="footer-hero__right">
            <a href="tel:+919979252150" className="btn-pill-blue footer-main-cta">
              <span>Call Dilipbhai: +91 99792 52150</span>
              <span className="footer-cta-arrow">📞</span>
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Main Footer Directory */}
        <div className="footer-grid">
          {/* Brand Info & Real Details */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <img src={navLogo} alt="Khodiyar Construction" className="footer-brand-img" />
              <div className="footer-brand-text-wrap">
                <span className="footer-brand-name">KHODIYAR</span>
                <span className="footer-brand-sub">CONSTRUCTION</span>
              </div>
            </div>
            <p className="footer-brand-gujarati">
              ॥ આઈ શ્રી ખોડીયાર માં ॥<br />
              પ્રો. પ્રજાપતિ દિલીપભાઈ
            </p>
            <p className="footer-brand-bio">
              Complete building construction solutions with labor and material contracts.
              Trusted by homeowners and commercial developers across Anand, Vadodara & Gujarat.
            </p>

            {/* Live studio time */}
            <div className="footer-time-badge">
              <span className="footer-live-dot" />
              <span>Vasad, Anand, Gujarat — {currentTime || '04:00 PM'} IST</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services & Contracts</Link></li>
              <li><Link to="/projects">Project Portfolio</Link></li>
              <li><Link to="/contact">Get an Estimate</Link></li>
            </ul>
          </div>

          {/* Disciplines */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Residential House Construction</Link></li>
              <li><Link to="/services">Material & Labor Contracts</Link></li>
              <li><Link to="/services">Commercial Complexes</Link></li>
              <li><Link to="/services">RCC Foundation & Slabs</Link></li>
              <li><Link to="/services">Renovation & Finishing</Link></li>
            </ul>
          </div>

          {/* Contact Direct with Verified Single Phone Number */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-col-heading">Direct Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Proprietor Contact</span>
                <a href="tel:+919979252150" className="footer-contact-val">
                  +91 99792 52150 (Dilipbhai)
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Office Address</span>
                <p className="footer-contact-val">
                  બાર ઓરડા ફળીયું, વાસદ, તા.જી. આણંદ – 388306, ગુજરાત
                </p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Electronic Mail</span>
                <a href="mailto:info@khodiyarconstruction.com" className="footer-contact-val">
                  info@khodiyarconstruction.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ai Shri Khodiyar Construction (દિલીપભાઈ પ્રજાપતિ - વાસદ, આણંદ). All rights reserved.
          </p>
          <div className="footer-legal">
            <span className="footer-legal-status">● Serving Anand, Vadodara, Ahmedabad & Gujarat</span>
            <span className="footer-legal-sep">/</span>
            <Link to="/contact">Get Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
