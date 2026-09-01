import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
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
        <div className="footer-hero" data-aos="fade-up">
          <div className="footer-hero__left">
            <span className="footer-tag">READY TO BUILD</span>
            <h2 className="footer-headline">
              Have an upcoming build?<br />
              <span className="footer-headline-blue">Let's craft something lasting.</span>
            </h2>
          </div>

          <div className="footer-hero__right">
            <Link to="/contact" className="btn-pill-blue footer-main-cta">
              <span>Start your project</span>
              <span className="footer-cta-arrow">↗</span>
            </Link>
          </div>
        </div>

        <div className="footer-divider" />

        {/* Main Footer Directory */}
        <div className="footer-grid">
          {/* Brand Info & Gujarati Heritage */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <span className="footer-brand-dot" />
              <span className="footer-brand-name">khodiyar_</span>
            </div>
            <p className="footer-brand-gujarati">॥ આઈ શ્રી ખોડીયાર કન્સ્ટ્રકશન ॥</p>
            <p className="footer-brand-bio">
              Architectural construction studio delivering landmark residential,
              commercial and civil infrastructure across Gujarat since 2005.
            </p>

            {/* Live studio time */}
            <div className="footer-time-badge">
              <span className="footer-live-dot" />
              <span>Ahmedabad, IN — {currentTime || '03:30 PM'} IST</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Studio</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/services">Capabilities</Link></li>
              <li><Link to="/projects">Selected Works</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Disciplines */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Disciplines</h4>
            <ul className="footer-links">
              <li><Link to="/services">Custom Residential</Link></li>
              <li><Link to="/services">Commercial Complexes</Link></li>
              <li><Link to="/services">Industrial Facilities</Link></li>
              <li><Link to="/services">Infrastructure & Civil</Link></li>
              <li><Link to="/services">Restoration & Retrofit</Link></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="footer-col footer-col--contact">
            <h4 className="footer-col-heading">Direct Inquiry</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a href="mailto:info@khodiyarconstruction.com" className="footer-contact-val">
                  info@khodiyarconstruction.com
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <a href="tel:+919876543210" className="footer-contact-val">
                  +91 98765 43210
                </a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Headquarters</span>
                <p className="footer-contact-val">
                  Plot No. 12, Industrial Hub, Ahmedabad – 380001, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ai Shri Khodiyar Construction. All rights reserved.
          </p>
          <div className="footer-legal">
            <span className="footer-legal-status">● Accepting select projects for 2026/2027</span>
            <span className="footer-legal-sep">/</span>
            <Link to="/about">Privacy</Link>
            <span className="footer-legal-sep">/</span>
            <Link to="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
