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
              AI SHRI KHODIYAR CONSTRUCTION · VASAD, ANAND
            </span>
            <h2 className="cta-title">
              મકાન નું બાંધકામ લેબર તથા <span className="cta-blue-highlight">મટીરીયલ સાથે કરી આપનાર.</span>
            </h2>
            <p className="cta-paragraph">
              Whether you are building a new residential home, bungalow, commercial complex,
              or industrial warehouse in Vasad, Anand, Vadodara, or anywhere in Gujarat — contact
              <strong> Dilipbhai Prajapati</strong> for an honest estimate and master construction.
            </p>

            <div className="cta-actions">
              <a href="tel:+918320703484" className="btn-pill-blue cta-btn">
                <span>📞 Call Dilipbhai: +91 83207 03484</span>
              </a>
              <Link to="/contact" className="btn-pill-outline cta-outline-btn">
                <span>Request Building Estimate</span>
                <span style={{ marginLeft: '0.4rem' }}>→</span>
              </Link>
            </div>

            <div className="cta-badges">
              <span className="cta-badge">● મો. ૮૩૨૦૭ ૦૩૪૮૪</span>
              <span className="cta-badge">● બાર ઓરડા ફળીયું, વાસદ, તા.જી. આણંદ</span>
              <span className="cta-badge">● લેબર તથા મટીરીયલ સાથે</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
