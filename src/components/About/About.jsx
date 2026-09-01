import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../assets/images';
import './About.css';

const pillars = [
  {
    num: '01',
    title: 'Master Craftsmanship',
    desc: 'Two decades of rigorous execution combining time-honored construction discipline with modern structural techniques.',
  },
  {
    num: '02',
    title: 'Engineering Precision',
    desc: 'From soil testing to final handover, every millimetre is verified against strict safety and seismic standards.',
  },
  {
    num: '03',
    title: 'Transparent Collaboration',
    desc: 'Direct communication with project leads, milestone reporting, and zero hidden contingencies.',
  },
];

export default function About() {
  return (
    <section className="about-editorial section">
      <div className="container">
        {/* Top Header */}
        <div className="about-header">
          <div className="about-header__left">
            <span className="studio-tag">WHO WE ARE · AHMEDABAD, GUJARAT</span>
            <h2 className="section-title">
              Crafting structures that anchor communities and <span className="highlight-blue">stand the test of time.</span>
            </h2>
          </div>
          <div className="about-header__right">
            <p className="about-lead">
              Founded in 2005, Ai Shri Khodiyar Construction is an established
              construction studio known for uncompromising build quality across
              Gujarat’s residential, commercial, and industrial landscape.
            </p>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="about-showcase">
          {/* Left Media with real engineers / people on site */}
          <div className="about-media">
            <div className="about-img-frame">
              <img
                src={IMAGES.engineersPeople}
                alt="Khodiyar Construction senior engineers on site with blueprints"
                className="about-img"
                loading="lazy"
              />
              <div className="about-img-caption">
                <span className="about-caption-dot" />
                <span>Senior civil engineering team on-site · Gujarat</span>
              </div>
            </div>
          </div>

          {/* Right Pillars */}
          <div className="about-pillars">
            <div className="about-pillars-list">
              {pillars.map((p) => (
                <div className="about-pillar-item" key={p.num}>
                  <span className="about-pillar-num">{p.num}</span>
                  <div className="about-pillar-body">
                    <h3 className="about-pillar-title">{p.title}</h3>
                    <p className="about-pillar-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-action">
              <Link to="/about" className="btn-pill-dark">
                <span>Read our full story</span>
                <div className="btn-arrow-circle">→</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
