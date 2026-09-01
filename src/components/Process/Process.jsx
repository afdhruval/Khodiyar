import React from 'react';
import './Process.css';

const stages = [
  {
    step: '01',
    name: 'Discovery & Consultation',
    desc: 'Initial site assessment, spatial feasibility study, and aligning on vision, scale, and budgetary framework.',
  },
  {
    step: '02',
    name: 'Structural Planning',
    desc: 'Geotechnical soil analysis, architectural coordination, and meticulous Bill of Quantities (BOQ) development.',
  },
  {
    step: '03',
    name: 'Engineering & Design',
    desc: 'BIM 3D modeling, material selection, seismic calculations, and local statutory building approvals.',
  },
  {
    step: '04',
    name: 'Precision Construction',
    desc: 'Foundation to superstructure execution led by dedicated site managers, ISO quality checks, and real-time client updates.',
  },
  {
    step: '05',
    name: 'Multi-Phase Quality Audit',
    desc: 'Comprehensive snag lists, pressure testing, electrical safety audits, and material finish inspections.',
  },
  {
    step: '06',
    name: 'Commissioning & Handover',
    desc: 'Complete occupancy documentation, structural warranties, as-built drawings, and post-handover support.',
  },
];

export default function Process() {
  return (
    <section className="process-editorial section">
      <div className="container">
        {/* Header */}
        <div className="process-header">
          <div className="process-header__left">
            <span className="studio-tag">METHODOLOGY · STEP BY STEP</span>
            <h2 className="section-title">
              From raw blueprint to handover: <span className="highlight-blue">a seamless sequence.</span>
            </h2>
          </div>
          <div className="process-header__right">
            <p className="section-desc">
              Every Khodiyar build follows a disciplined, transparent execution
              framework engineered to eliminate delays and preserve quality.
            </p>
          </div>
        </div>

        {/* Roadmap Grid */}
        <div className="process-grid">
          {stages.map((stage) => (
            <div className="process-card" key={stage.step}>
              <div className="process-card__header">
                <span className="process-card__num">{stage.step}</span>
                <span className="process-card__line" />
              </div>
              <h3 className="process-card__title">{stage.name}</h3>
              <p className="process-card__desc">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
