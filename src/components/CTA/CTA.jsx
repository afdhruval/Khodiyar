import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-editorial section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <span className="studio-tag" style={{ color: '#93C5FD', opacity: 0.9 }}>
              START YOUR PROJECT WITH KHODIYAR
            </span>
            <h2 className="cta-title">
              Let’s construct a landmark that <span className="cta-blue-highlight">defines your legacy.</span>
            </h2>
            <p className="cta-paragraph">
              Whether you are planning a private luxury residence, a commercial
              headquarters, or expanding an industrial logistics facility — schedule
              an architectural consultation with our senior civil engineering team today.
            </p>

            <div className="cta-actions">
              <Link to="/contact" className="btn-pill-blue cta-btn">
                <span>Request comprehensive quote</span>
                <span className="cta-btn-arrow">→</span>
              </Link>
              <a href="tel:+919876543210" className="btn-pill-outline cta-outline-btn">
                <span>Call Us: +91 98765 43210</span>
              </a>
            </div>

            <div className="cta-badges">
              <span className="cta-badge">● ISO 9001:2015 Certified</span>
              <span className="cta-badge">● Gujarat State Registered</span>
              <span className="cta-badge">● Zero-Accident Site Standard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
