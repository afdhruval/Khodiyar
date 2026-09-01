import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServicesComponent from '../components/Services/Services';
import Process from '../components/Process/Process';
import CTA from '../components/CTA/CTA';
import './Page.css';

export default function Services() {
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
              <span>Capabilities</span>
            </div>
            <span className="studio-tag" style={{ marginTop: '0.5rem' }}>SERVICES & DISCIPLINES</span>
            <h1 className="page-hero__title">
              Full-spectrum construction & <span className="highlight-blue">civil execution.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <ServicesComponent />
      <Process />
      <CTA />
    </>
  );
}
