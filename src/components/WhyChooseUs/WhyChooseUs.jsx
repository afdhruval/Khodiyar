import React from 'react';
import { Link } from 'react-router-dom';
import './WhyChooseUs.css';

const criteria = [
  {
    num: '01',
    title: 'Architectural Fidelity & Craft',
    desc: 'We treat blueprints as contractual commitments. Every curve, cantilever, and concrete pour matches exact structural specifications.',
  },
  {
    num: '02',
    title: '200+ Certified In-House Specialists',
    desc: 'We do not rely on unvetted subcontractors. Our core civil engineers, project managers, and quality supervisors are full-time team members.',
  },
  {
    num: '03',
    title: 'Zero-Accident Safety Protocols',
    desc: 'Certified safety compliance across every active site, rigorous gear checks, and active HSE supervision on all multi-storey developments.',
  },
  {
    num: '04',
    title: 'Predictable Timelines & Cost Transparency',
    desc: 'Comprehensive bill of quantities (BOQ), milestone-locked schedules, and transparent material sourcing with no mid-project surprises.',
  },
  {
    num: '05',
    title: 'Lifetime Structural Integrity Guarantee',
    desc: 'Engineered for resilience against seismic shifts, extreme weather, and continuous structural load for generations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-editorial section">
      <div className="container">
        <div className="why-grid">
          {/* Sticky Left Column */}
          <div className="why-left" data-aos="fade-right">
            <span className="studio-tag">THE KHODIYAR STANDARD</span>
            <h2 className="section-title">
              Why Gujarat’s leading developers and homeowners <span className="highlight-blue">trust our build.</span>
            </h2>
            <p className="why-left-text">
              Construction is not merely assembling materials; it is an enduring
              covenant between the builder and the future occupants. We take that
              responsibility seriously.
            </p>

            <div className="why-badge-box">
              <span className="why-badge-num">99.2%</span>
              <span className="why-badge-label">Client Retention & Referral Rate</span>
            </div>

            <div className="why-left-cta">
              <Link to="/contact" className="btn-pill-dark">
                <span>Discuss your specifications</span>
                <div className="btn-arrow-circle">→</div>
              </Link>
            </div>
          </div>

          {/* Right Column: Numbered Criteria */}
          <div className="why-right">
            <div className="why-criteria-list">
              {criteria.map((item, idx) => (
                <div
                  className="why-criterion-card"
                  key={item.num}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                >
                  <div className="why-criterion-header">
                    <span className="why-criterion-num">{item.num}</span>
                    <h3 className="why-criterion-title">{item.title}</h3>
                  </div>
                  <p className="why-criterion-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
