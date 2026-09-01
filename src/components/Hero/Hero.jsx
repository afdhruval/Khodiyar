import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

// Architectural sculpture / organic concrete form matching the reference circular frame
const HERO_SCULPTURE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=90&auto=format&fit=crop';

// Floating dots coordinates for subtle authentic craft
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
          {/* Left Column: Massive Editorial Headline */}
          <div className="hero-left">
            <motion.div
              className="studio-tag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              PREMIER BUILDER · EST. 2005 · GUJARAT
            </motion.div>

            <motion.h1
              className="editorial-headline hero-title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              We build landmark<br />
              structures people<br />
              <span className="highlight-blue">remember <span className="hero-title-dot">.</span></span>
            </motion.h1>
          </div>

          {/* Right Column: Architectural Circle & Boutique Pitch */}
          <div className="hero-right">
            <motion.div
              className="hero-media-wrapper"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hero-circle-mask">
                <img
                  src={HERO_SCULPTURE}
                  alt="Architectural masterwork by Khodiyar Construction"
                  className="hero-circle-img"
                />
                <div className="hero-circle-badge">
                  <span>20+ YRS</span>
                  <span>EXPERTISE</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-bio-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="hero-bio-text">
                Two decades, one obsession — turning ambitious blueprints into enduring
                landmarks with the craft of master builders and the precision of a modern team.
              </p>

              <div className="hero-cta-wrap">
                <Link to="/contact" className="btn-pill-dark">
                  <span>Start a project</span>
                  <div className="btn-arrow-circle">→</div>
                </Link>
                <Link to="/projects" className="hero-text-link">
                  <span>Explore 500+ builds</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Bottom Trust Band */}
        <motion.div
          className="hero-footer-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
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
            <span className="hero-trust-label">ISO & Safety Compliant</span>
          </div>
          <div className="hero-trust-divider" />
          <div className="hero-trust-item">
            <span className="hero-trust-num">Gujarat</span>
            <span className="hero-trust-label">Ahmedabad · Surat · Rajkot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
