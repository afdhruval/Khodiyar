import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

export const projectsData = [
  {
    id: 'skyline-residency',
    title: 'Skyline Private Residency',
    category: 'Residential',
    location: 'Ahmedabad, Gujarat',
    year: '2024',
    sqft: '1,20,000',
    type: 'Luxury Villa Complex',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'nexus-corporate-hub',
    title: 'Nexus Corporate Headquarters',
    category: 'Commercial',
    location: 'Surat, Gujarat',
    year: '2023',
    sqft: '2,50,000',
    type: '12-Storey Commercial Hub',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'green-valley-township',
    title: 'Green Valley Eco-Township',
    category: 'Residential',
    location: 'Vadodara, Gujarat',
    year: '2023',
    sqft: '5,00,000',
    type: 'Sustainable Community',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'industrial-mega-park',
    title: 'Precision Industrial Logistics Park',
    category: 'Industrial',
    location: 'Rajkot, Gujarat',
    year: '2022',
    sqft: '8,00,000',
    type: 'Heavy Industrial Facility',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'marina-bridge',
    title: 'Sabarmati Overpass & Infrastructure',
    category: 'Infrastructure',
    location: 'Gandhinagar, Gujarat',
    year: '2022',
    sqft: '3,00,000',
    type: 'Civil Transportation Structure',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=85&auto=format&fit=crop',
    featured: false,
  },
  {
    id: 'luxury-villa-estate',
    title: 'The Haven Private Estate',
    category: 'Residential',
    location: 'Gandhinagar, Gujarat',
    year: '2024',
    sqft: '45,000',
    type: 'Bespoke Architectural Villa',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85&auto=format&fit=crop',
    featured: false,
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'];

export default function Projects({ showAll = false }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const displayed = showAll
    ? projectsData
    : projectsData.slice(0, 4);

  const filtered = activeFilter === 'All'
    ? displayed
    : displayed.filter(p => p.category === activeFilter);

  return (
    <section className="projects-editorial section" id="projects">
      <div className="container">
        {/* Header */}
        <div className="projects-header" data-aos="fade-up">
          <div className="projects-header__left">
            <span className="studio-tag">PORTFOLIO · 2005–2026</span>
            <h2 className="section-title">
              Selected works defining our <span className="highlight-blue">built legacy.</span>
            </h2>
          </div>
          {!showAll && (
            <div className="projects-header__right">
              <Link to="/projects" className="btn-pill-dark">
                <span>View all 500+ builds</span>
                <div className="btn-arrow-circle">→</div>
              </Link>
            </div>
          )}
        </div>

        {/* Filter */}
        {showAll && (
          <div className="projects-filters" data-aos="fade-up">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`projects-filter-btn ${activeFilter === cat ? 'projects-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.article
                key={project.id}
                className={`project-entry ${idx === 0 && !showAll ? 'project-entry--large' : ''}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={`/projects/${project.id}`} className="project-card-wrap">
                  <div className="project-frame">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-photo"
                      loading="lazy"
                    />
                    <div className="project-frame-tag">{project.category}</div>
                  </div>

                  <div className="project-details">
                    <div className="project-main-info">
                      <h3 className="project-heading">{project.title}</h3>
                      <p className="project-type-label">{project.type}</p>
                    </div>

                    <div className="project-meta-row">
                      <span className="project-meta-item">📍 {project.location}</span>
                      <span className="project-meta-sep">•</span>
                      <span className="project-meta-item">{project.sqft} sq.ft</span>
                      <span className="project-meta-sep">•</span>
                      <span className="project-meta-item">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {!showAll && (
          <div className="projects-bottom-cta" data-aos="fade-up">
            <Link to="/projects" className="btn-pill-outline">
              <span>Explore the complete project archive</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
