import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Page.css';

const contactInfo = [
  {
    label: 'Proprietor / Contact Person',
    value: 'Prajapati Dilipbhai (દિલીપભાઈ પ્રજાપતિ)\nMaster Builder & Turnkey Contractor',
  },
  {
    label: 'Direct Phone & WhatsApp',
    value: '+91 83207 03484 (Dilipbhai)',
    links: ['tel:+918320703484'],
  },
  {
    label: 'Office & Workshop Address',
    value: 'બાર ઓરડા ફળીયું, વાસદ, તા.જી. આણંદ – 388306, ગુજરાત\nBar Orda Faliyu, Vasad, Anand, Gujarat',
  },
  {
    label: 'Scope of Work',
    value: 'મકાન નું બાંધકામ લેબર તથા મટીરીયલ સાથે કામ કરી આપનાર\n(Labor Contracts & Turnkey Material Contracts)',
  },
  {
    label: 'Electronic Mail',
    value: 'info@khodiyarconstruction.com',
    links: ['mailto:info@khodiyarconstruction.com'],
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <div className="page-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact & Estimates</span>
            </div>
            <span className="studio-tag" style={{ marginTop: '0.5rem' }}>DIRECT ESTIMATES & CONSULTATION</span>
            <h1 className="page-hero__title">
              Let’s discuss your <span className="highlight-blue">building project.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="contact-page__grid">
            {/* Direct Info */}
            <div className="contact-info">
              <div>
                <span className="studio-tag">KHODIYAR CONSTRUCTION · VASAD, ANAND</span>
                <h2 className="section-title">
                  Speak directly with <span className="highlight-blue">Dilipbhai Prajapati.</span>
                </h2>
                <p className="section-desc">
                  We undertake residential home construction, commercial complexes, and industrial
                  sheds with complete material supply or labor contract across Anand, Vadodara, and Gujarat.
                </p>
              </div>

              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info__item">
                  <div className="contact-info__icon">●</div>
                  <div>
                    <p className="contact-info__label">{item.label}</p>
                    {item.value.split('\n').map((line, i) => (
                      <p key={i} className="contact-info__value">
                        {item.links ? (
                          <a href={item.links[i]}>{line}</a>
                        ) : line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <motion.div
                  className="contact-form"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 440, textAlign: 'center', gap: '1.25rem' }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--color-blue)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>Inquiry Received</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', maxWidth: 420 }}>
                    Thank you. Dilipbhai Prajapati will contact you directly on your phone or WhatsApp (+91 83207 03484) within 24 hours.
                  </p>
                  <a href="tel:+918320703484" className="btn-pill-blue" style={{ marginTop: '0.5rem' }}>
                    <span>Call Now: +91 83207 03484</span>
                  </a>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="contact-form__title">Request Building Estimate / Quote</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="fname">Your Name *</label>
                      <input id="fname" name="fname" type="text" placeholder="e.g. Ramesh Patel" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp Number *</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 83207 03484" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contractType">Contract Preference *</label>
                      <select id="contractType" name="contractType" required>
                        <option value="">Select Contract Type…</option>
                        <option>Complete Turnkey (Material + Labor)</option>
                        <option>Labor Contract Only</option>
                        <option>RCC Structural Frame & Masonry</option>
                        <option>Finishing & Renovation</option>
                      </select>
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="service">Construction Category *</label>
                      <select id="service" name="service" required>
                        <option value="">Select building type…</option>
                        <option>Residential House / Bungalow</option>
                        <option>Row House / Duplex</option>
                        <option>Commercial Complex / Shops</option>
                        <option>Industrial Shed / Warehouse</option>
                        <option>Boundary Wall / Civil Structure</option>
                      </select>
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="location">Site Location</label>
                      <input id="location" name="location" type="text" placeholder="e.g. Vasad / Anand / Vadodara / Nadiad" />
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="message">Plot Size & Project Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Provide details about plot dimensions, built-up area (sq.ft), floors (G+1/G+2), and expected start date…"
                        rows="4"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-pill-dark" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
                    <span>Send Estimate Request</span>
                    <div className="btn-arrow-circle">→</div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed centered on Vasad, Anand, Gujarat */}
      <section style={{ height: '420px', background: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
        <iframe
          title="Khodiyar Construction Vasad Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29547.452684128527!2d73.06013235!3d22.4497746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc08031d279cf%3A0xe54d3e8b4e72322!2sVasad%2C%20Gujarat%20388306!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(15%) contrast(95%)' }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </>
  );
}
