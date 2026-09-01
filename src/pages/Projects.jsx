import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectsComponent from '../components/Projects/Projects';
import CTA from '../components/CTA/CTA';
import './Page.css';

export default function Projects() {
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
              <span>Selected Works</span>
            </div>
            <span className="studio-tag" style={{ marginTop: '0.5rem' }}>COMPREHENSIVE ARCHIVE</span>
            <h1 className="page-hero__title">
              Our portfolio of landmark builds <span className="highlight-blue">across Gujarat.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <ProjectsComponent showAll={true} />
      <CTA />
    </>
  );
}
