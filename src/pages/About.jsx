import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA/CTA';
import './Page.css';

const team = [
  { name: 'Rajeshbhai Patel', role: 'Founder & Principal Director', exp: '25+ Years' },
  { name: 'Dinesh Khodiyar', role: 'Chief Structural Engineer', exp: '18+ Years' },
  { name: 'Meena Shah', role: 'Lead Architect & Design Head', exp: '15+ Years' },
  { name: 'Suresh Desai', role: 'Site Operations & Safety Director', exp: '14+ Years' },
];

const milestones = [
  { year: '2005', event: 'Founded in Ahmedabad, Gujarat with a committed founding crew of master masons and engineers.' },
  { year: '2009', event: 'Delivered landmark multi-storey commercial complex in Surat with zero structural defects.' },
  { year: '2014', event: 'Commissioned specialized industrial infrastructure division for mega-warehouses and manufacturing plants.' },
  { year: '2019', event: 'Crossed 300+ completed builds. Standardized ISO 9001 quality audits across all active sites.' },
  { year: '2022', event: 'Pioneered sustainable concrete masonry and eco-efficient architectural builds across Gujarat.' },
  { year: '2026', event: '500+ landmark builds delivered. Over 12 million square feet constructed with an enduring standard of craft.' },
];

export default function About() {
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
              <span>About Studio</span>
            </div>
            <span className="studio-tag" style={{ marginTop: '0.5rem' }}>STUDIO PROFILE · EST. 2005</span>
            <h1 className="page-hero__title">
              Two decades of master craft & <span className="highlight-blue">structural discipline.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Narrative */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="about-page__grid">
            <div data-aos="fade-right">
              <span className="studio-tag">OUR ORIGIN & PHILOSOPHY</span>
              <h2 className="section-title">
                Building integrity into every <span className="highlight-blue">foundation we pour.</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                Ai Shri Khodiyar Construction began with a straightforward conviction: that
                buildings should not merely stand; they should endure for generations with dignity.
              </p>
              <p className="section-desc">
                From luxury private estates along Gandhinagar’s green belts to high-yield
                commercial towers in Ahmedabad and industrial parks in Rajkot, our multidisciplinary
                team combines generational craftsmanship with strict civil engineering standards.
              </p>
            </div>
            <div className="about-page__img" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85&auto=format&fit=crop"
                alt="Khodiyar Construction architectural headquarters"
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', aspectRatio: '4/3', objectFit: 'cover', boxShadow: 'var(--shadow-card)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div data-aos="fade-up">
            <span className="studio-tag">CHRONOLOGY</span>
            <h2 className="section-title">Twenty years of <span className="highlight-blue">milestones.</span></h2>
          </div>
          <div className="milestones">
            {milestones.map((m, idx) => (
              <div key={m.year} className="milestone" data-aos="fade-up" data-aos-delay={idx * 60}>
                <div className="milestone__year">{m.year}</div>
                <div className="milestone__line"><div className="milestone__dot" /></div>
                <div className="milestone__event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div data-aos="fade-up">
            <span className="studio-tag">LEADERSHIP</span>
            <h2 className="section-title">Senior engineering & <span className="highlight-blue">project leads.</span></h2>
          </div>
          <div className="team-grid">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <div className="team-card__avatar">
                  {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <span className="team-card__exp">{member.exp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
