import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Page.css';

const contactInfo = [
  {
    label: 'Studio Headquarters',
    value: 'Plot No. 12, Industrial Hub, Phase-II,\nAhmedabad – 380001, Gujarat, India',
  },
  {
    label: 'Direct Inquiries',
    value: '+91 98765 43210\n+91 79 2234 5678',
    links: ['tel:+919876543210', 'tel:+917922345678'],
  },
  {
    label: 'Electronic Mail',
    value: 'info@khodiyarconstruction.com\nprojects@khodiyarconstruction.com',
    links: ['mailto:info@khodiyarconstruction.com', 'mailto:projects@khodiyarconstruction.com'],
  },
  {
    label: 'Working Hours',
    value: 'Monday – Saturday: 9:00 AM – 6:30 PM\nSunday: By Prior Appointment',
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
          <motion.div
            className="page-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="page-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact Studio</span>
            </div>
            <span className="studio-tag" style={{ marginTop: '0.5rem' }}>DIRECT CONSULTATION</span>
            <h1 className="page-hero__title">
              Let’s initiate your <span className="highlight-blue">next build.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="contact-page__grid">
            {/* Direct Info */}
            <div className="contact-info" data-aos="fade-right">
              <div>
                <span className="studio-tag">COMMUNICATION</span>
                <h2 className="section-title">
                  Speak directly with our <span className="highlight-blue">senior engineering team.</span>
                </h2>
                <p className="section-desc">
                  Whether you possess finalized CAD drawings or require preliminary site
                  feasibility guidance, our partners review every submission within 24 hours.
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
            <div data-aos="fade-left">
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
                    Thank you. A senior project manager will contact you within 24 hours to schedule an architectural consultation.
                  </p>
                  <button className="btn-pill-dark" onClick={() => setSubmitted(false)} style={{ marginTop: '0.5rem' }}>
                    <span>Submit another inquiry</span>
                    <div className="btn-arrow-circle">→</div>
                  </button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="contact-form__title">Project Consultation Request</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="fname">First Name *</label>
                      <input id="fname" name="fname" type="text" placeholder="Rajesh" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lname">Last Name *</label>
                      <input id="lname" name="lname" type="text" placeholder="Mehta" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input id="email" name="email" type="email" placeholder="rajesh@company.com" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="service">Discipline *</label>
                      <select id="service" name="service" required>
                        <option value="">Select building discipline…</option>
                        <option>Custom Luxury Residence / Villa</option>
                        <option>Commercial / Corporate Tower</option>
                        <option>Industrial Plant / Logistics Park</option>
                        <option>Civil Infrastructure / Urban Works</option>
                        <option>Architectural Renovation & Retrofit</option>
                      </select>
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="location">Site Location in Gujarat</label>
                      <input id="location" name="location" type="text" placeholder="e.g. SG Highway, Ahmedabad / Surat / Rajkot" />
                    </div>
                    <div className="form-group form-group--full">
                      <label htmlFor="message">Project Scope & Requirements *</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Briefly describe square footage, timeline, and architectural status (blueprint ready / concept phase)…"
                        rows="4"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-pill-dark" style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}>
                    <span>Submit Project Brief</span>
                    <div className="btn-arrow-circle">→</div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section style={{ height: '420px', background: 'var(--color-bg-alt)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--color-border)' }}>
        <iframe
          title="Khodiyar Construction Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.6434039067!2d72.43826185!3d23.0204978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          style={{ width: '100%', height: '100%', border: 0, filter: 'grayscale(15%) contrast(95%)' }}
          allowFullScreen
          loading="lazy"
        />
      </section>
    </>
  );
}
