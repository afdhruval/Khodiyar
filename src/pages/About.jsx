import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../assets/images';
import CTA from '../components/CTA/CTA';
import './Page.css';

const milestones = [
  { year: '2005', event: 'Founded by Prajapati Dilipbhai in Vasad, Anand with a dedicated team of master masons and RCC specialists.' },
  { year: '2010', event: 'Expanded into complete Turnkey Residential Construction (Labor + Material contracts) across Anand and Vadodara.' },
  { year: '2015', event: 'Delivered major commercial shop complexes and residential row houses across Central Gujarat.' },
  { year: '2020', event: 'Crossed 350+ successfully commissioned building projects with 100% on-time milestone delivery.' },
  { year: '2024', event: 'Established specialized industrial warehouse construction and modernization division.' },
  { year: '2026', event: '500+ projects standing strong. Over 12 million square feet built under Dilipbhai Prajapati’s leadership.' },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <div className="page-hero__breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Company</span>
            </div>
            <span className="studio-tag" style={{ marginTop: '0.5rem' }}>AI SHRI KHODIYAR CONSTRUCTION · VASAD, ANAND</span>
            <h1 className="page-hero__title">
              Built on trust, integrity & <span className="highlight-blue">quality craftsmanship.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Narrative */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="about-page__grid">
            <div>
              <span className="studio-tag">OUR PROMISE · મકાન નું બાંધકામ</span>
              <h2 className="section-title">
                મકાન નું બાંધકામ લેબર તથા <span className="highlight-blue">મટીરીયલ સાથે કામ કરી આપનાર.</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                Led by <strong>Prajapati Dilipbhai (પ્રો. પ્રજાપતિ દિલીપભાઈ)</strong>, Ai Shri Khodiyar Construction
                has been constructing landmark residential homes, bungalows, commercial buildings, and industrial
                sheds across Vasad, Anand, Vadodara, and Central Gujarat since 2005.
              </p>
              <p className="section-desc">
                Whether you need complete Turnkey Building Construction with premium grade cement, steel, and finishing
                materials, or specialized Labor Contracts for RCC structural framing, our team guarantees rigorous
                execution, structural safety, and transparent costing at every stage.
              </p>
            </div>
            <div className="about-page__img">
              <img
                src={IMAGES.engineersPeople}
                alt="Khodiyar Construction on-site team led by Dilipbhai Prajapati"
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', aspectRatio: '4/3', objectFit: 'cover', boxShadow: 'var(--shadow-card)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div>
            <span className="studio-tag">CHRONOLOGY</span>
            <h2 className="section-title">Twenty years of <span className="highlight-blue">building milestones.</span></h2>
          </div>
          <div className="milestones">
            {milestones.map((m) => (
              <div key={m.year} className="milestone">
                <div className="milestone__year">{m.year}</div>
                <div className="milestone__line"><div className="milestone__dot" /></div>
                <div className="milestone__event">{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
