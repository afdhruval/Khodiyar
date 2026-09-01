import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../components/Projects/Projects';
import CTA from '../components/CTA/CTA';
import './Page.css';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) return <Navigate to="/projects" />;

  const related = projectsData.filter(p => p.id !== id).slice(0, 2);

  return (
    <>
      {/* Project Detail Header */}
      <section className="detail-header-editorial">
        <div className="container">
          <div className="page-hero__breadcrumb" style={{ marginBottom: '1.25rem' }}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/projects">Projects</Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>

          <div className="detail-header-top">
            <span className="studio-tag">{project.category} · {project.year}</span>
            <h1 className="detail-header-title">{project.title}</h1>
            <p className="detail-header-subtitle">{project.type} · {project.location}</p>
          </div>

          <div className="detail-metadata-bar">
            <div className="detail-meta-cell">
              <span className="detail-cell-label">Location</span>
              <span className="detail-cell-value">{project.location}</span>
            </div>
            <div className="detail-meta-cell">
              <span className="detail-cell-label">Total Floor Area</span>
              <span className="detail-cell-value">{project.sqft} sq.ft</span>
            </div>
            <div className="detail-meta-cell">
              <span className="detail-cell-label">Handover Year</span>
              <span className="detail-cell-value">{project.year}</span>
            </div>
            <div className="detail-meta-cell">
              <span className="detail-cell-label">Discipline</span>
              <span className="detail-cell-value">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Large Featured Photograph */}
      <section className="detail-hero-frame">
        <div className="container">
          <div className="detail-large-photo">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </section>

      {/* Narrative & Specifications */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="detail-body-grid">
            <div className="detail-narrative" data-aos="fade-right">
              <span className="studio-tag">ARCHITECTURAL BRIEF</span>
              <h2 className="section-title">
                Engineering excellence executed with <span className="highlight-blue">uncompromising rigor.</span>
              </h2>
              <p className="section-desc" style={{ marginBottom: '1.5rem' }}>
                The {project.title} represents a signature commission in {project.location},
                spanning {project.sqft} square feet of high-precision built space. Delivered in {project.year},
                the development showcases Khodiyar Construction’s specialized capability in managing
                complex structural engineering while adhering strictly to environmental standards.
              </p>
              <p className="section-desc">
                From high-density concrete reinforcement to precision thermal facade installation,
                every component underwent rigorous multi-tier inspection ensuring long-term seismic resilience
                and operational efficiency.
              </p>

              <div className="detail-spec-checks">
                {[
                  'ISO 9001:2015 Structural Safety Verification',
                  'Seismic Zone III/IV Engineered Foundation',
                  'High-Grade Ready-Mix Concrete Standard',
                  'Turnkey Handover Ahead of Target Milestone',
                ].map((item) => (
                  <div key={item} className="detail-spec-item">
                    <span className="detail-spec-dot">●</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Card */}
            <div className="detail-sidebar-wrap" data-aos="fade-left">
              <div className="detail-sidebar-card">
                <h3 className="detail-sidebar-title">Project Summary</h3>
                <div className="detail-sidebar-rows">
                  {[
                    { label: 'Client / Sector', value: project.category },
                    { label: 'Location', value: project.location },
                    { label: 'Built Area', value: `${project.sqft} sq.ft` },
                    { label: 'Execution Period', value: `${project.year} (Delivered)` },
                    { label: 'Supervision', value: 'Khodiyar Lead Civil Team' },
                    { label: 'Status', value: '100% Commissioned' },
                  ].map((row) => (
                    <div key={row.label} className="detail-sidebar-row">
                      <span className="detail-sidebar-label">{row.label}</span>
                      <span className="detail-sidebar-value">{row.value}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn-pill-dark" style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
                  <span>Inquire about similar builds</span>
                  <div className="btn-arrow-circle">→</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Builds */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div data-aos="fade-up" style={{ marginBottom: '3rem' }}>
            <span className="studio-tag">MORE BUILDS</span>
            <h2 className="section-title">Related <span className="highlight-blue">case studies.</span></h2>
          </div>

          <div className="projects-grid">
            {related.map((p) => (
              <article key={p.id} className="project-entry">
                <Link to={`/projects/${p.id}`} className="project-card-wrap">
                  <div className="project-frame">
                    <img src={p.image} alt={p.title} className="project-photo" />
                    <div className="project-frame-tag">{p.category}</div>
                  </div>
                  <div className="project-details">
                    <div className="project-main-info">
                      <h3 className="project-heading">{p.title}</h3>
                      <p className="project-type-label">{p.type}</p>
                    </div>
                    <div className="project-meta-row">
                      <span>📍 {p.location}</span>
                      <span>•</span>
                      <span>{p.sqft} sq.ft</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
