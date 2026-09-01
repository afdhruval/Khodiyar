import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../assets/images';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Custom Residential Builds',
    category: 'Architecture & Living',
    desc: 'Architect-designed private estates, luxury villas, and multi-family residences engineered with bespoke materials and sustainable finishes.',
    tags: ['Luxury Villas', 'Private Estates', 'Bespoke Finishing', 'Smart Living'],
    image: IMAGES.luxuryVilla,
  },
  {
    num: '02',
    title: 'Commercial & Corporate Towers',
    category: 'Commercial Spaces',
    desc: 'High-density commercial hubs, modern corporate offices, and retail complexes crafted for durability, footfall, and business growth.',
    tags: ['Office Towers', 'Retail Hubs', 'Corporate Headquarters', 'Mixed-Use'],
    image: IMAGES.commercialTower,
  },
  {
    num: '03',
    title: 'Industrial & Manufacturing Parks',
    category: 'Heavy Infrastructure',
    desc: 'Heavy-duty industrial facilities, logistics warehouses, and processing plants built to stringent technical and environmental standards.',
    tags: ['Logistics Warehouses', 'Manufacturing Plants', 'Industrial Parks', 'Heavy Foundations'],
    image: IMAGES.industrialHub,
  },
  {
    num: '04',
    title: 'Civil & Urban Infrastructure',
    category: 'Public Works',
    desc: 'Large-scale civil engineering projects including access roads, bridges, drainage channels, and public development utilities.',
    tags: ['Road Infrastructure', 'Flyovers & Bridges', 'Drainage Networks', 'Site Development'],
    image: IMAGES.civilBridge,
  },
  {
    num: '05',
    title: 'Architectural Renovation & Retrofit',
    category: 'Restoration',
    desc: 'Structural rehabilitation, modern facade overhauls, and interior remodeling transforming legacy properties into modern masterpieces.',
    tags: ['Facade Transformation', 'Structural Strengthening', 'Interior Fit-Out', 'Adaptive Reuse'],
    image: IMAGES.luxuryEstate,
  },
];

export default function Services() {
  return (
    <section className="services-editorial section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div className="services-header__left">
            <span className="studio-tag">CAPABILITIES & DISCIPLINES</span>
            <h2 className="section-title">
              Comprehensive expertise across the entire <span className="highlight-blue">construction spectrum.</span>
            </h2>
          </div>
          <div className="services-header__right">
            <p className="section-desc">
              From concept engineering to turnkey delivery, we deploy specialized
              teams tailored to the demands of each building type.
            </p>
          </div>
        </div>

        {/* Services Showcase Grid */}
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-card__top">
                <span className="service-card__num">{s.num}</span>
                <span className="service-card__cat">{s.category}</span>
              </div>

              <div className="service-card__media">
                <img src={s.image} alt={s.title} className="service-card__img" loading="lazy" />
              </div>

              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>

                <div className="service-card__tags">
                  {s.tags.map((tag) => (
                    <span key={tag} className="service-card__tag">{tag}</span>
                  ))}
                </div>

                <div className="service-card__cta">
                  <Link to="/contact" className="service-link">
                    <span>Consult on this service</span>
                    <span className="service-link-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
