import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMAGES } from '../../assets/images';
import stampLogo from '../../assets/stamp_logo.png';
import './Hero.css';

const particles = [
  { top: '15%', left: '8%', size: 4, delay: 0 },
  { top: '28%', left: '32%', size: 5, delay: 1.2 },
  { top: '65%', left: '12%', size: 6, delay: 0.6 },
  { top: '80%', left: '42%', size: 4, delay: 1.8 },
  { top: '18%', left: '52%', size: 5, delay: 0.9 },
  { top: '45%', left: '68%', size: 4, delay: 1.5 },
  { top: '75%', left: '88%', size: 5, delay: 0.3 },
];

export default function Hero() {
  return (
    <section className="hero-editorial">
      {/* Background Floating Micro Particles */}
      <div className="hero-particles" aria-hidden="true">
        {particles.map((p, idx) => (
          <motion.span
            key={idx}
            className="hero-particle"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 4 + idx,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Massive Editorial Headline with Official Stamp */}
          <div className="hero-left">
            <div className="hero-badge-row">
              <img src={stampLogo} alt="Ai Shri Khodiyar Stamp" className="hero-mini-stamp" />
              <div className="studio-tag" style={{ margin: 0 }}>
                AI SHRI KHODIYAR CONSTRUCTION · EST. 2005 · VASAD, ANAND
              </div>
            </div>

            <h1 className="editorial-headline hero-title">
              We build landmark<br />
              structures people<br />
              <span className="highlight-blue">remember <span className="hero-title-dot">.</span></span>
            </h1>

            <p className="hero-tagline-gujarati">
              મકાન નું બાંધકામ લેબર તથા મટીરીયલ સાથે કામ કરી આપનાર
            </p>
          </div>

          {/* Right Column: Real Construction Showcase with Official Stamp */}
          <div className="hero-right">
            <div className="hero-media-wrapper">
              <div className="hero-circle-mask">
                <img
                  src={IMAGES.heroConstruction}
                  alt="Khodiyar Construction modern house building in progress"
                  className="hero-circle-img"
                />
                
                {/* Official Circular Stamp Badge */}
                <div className="hero-seal-badge">
                  <img src={stampLogo} alt="Khodiyar Construction Stamp Logo" className="hero-seal-stamp-img" />
                </div>
              </div>
            </div>

            <div className="hero-bio-block">
              <p className="hero-bio-text">
                Under the leadership of <strong>Prajapati Dilipbhai</strong>, we deliver residential,
                commercial, and industrial builds with unmatched craftsmanship, structural safety,
                and on-time handover across Gujarat.
              </p>

              <div className="hero-cta-wrap">
                <a href="tel:+918320703484" className="btn-pill-dark">
                  <span>Call Dilipbhai: +91 83207 03484</span>
                  <div className="btn-arrow-circle">📞</div>
                </a>
                <Link to="/contact" className="btn-pill-outline">
                  <span>Get Free Estimate →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Band */}
        <div className="hero-footer-bar">
          <div className="hero-trust-item">
            <span className="hero-trust-num">500+</span>
            <span className="hero-trust-label">Structures Delivered</span>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-trust-item">
            <span className="hero-trust-num">12M+</span>
            <span className="hero-trust-label">Square Feet Built</span>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-trust-item">
            <span className="hero-trust-num">100%</span>
            <span className="hero-trust-label">Turnkey Material & Labor</span>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-trust-item">
            <span className="hero-trust-num">Vasad · Anand</span>
            <span className="hero-trust-label">Vadodara · Ahmedabad · Gujarat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
