import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: "Khodiyar Construction executed our 8-storey corporate headquarters in Ahmedabad with unmatched technical discipline. Their structural engineers solved complex cantilever spans without compromising our architectural vision. Delivered 3 weeks ahead of schedule.",
    author: "Rajeshbhai Mehta",
    role: "Managing Director",
    company: "Mehta Infrastructure Group",
    project: "Nexus Corporate Headquarters · Ahmedabad",
    year: "2023",
  },
  {
    id: 2,
    quote: "Entrusting our family estate to Khodiyar was the best decision we made. The precision in concrete masonry, thermal insulation, and custom stone cladding is world-class. Two years later, the residence feels as pristine as day one.",
    author: "Priyaben Sharma",
    role: "Private Owner",
    company: "The Haven Estate",
    project: "45,000 sq.ft Villa · Gandhinagar",
    year: "2024",
  },
  {
    id: 3,
    quote: "For our heavy logistics and manufacturing facility in Rajkot, safety protocols and floor load capacity were paramount. Khodiyar's industrial division executed 8,00,000 sq.ft with zero downtime and total compliance.",
    author: "Amitbhai Patel",
    role: "Chief Operating Officer",
    company: "Patel Polymers & Logistics",
    project: "Mega Logistics Park · Rajkot",
    year: "2022",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const t = testimonials[activeIdx];

  return (
    <section className="testimonials-editorial section">
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <span className="studio-tag">VERIFIED CLIENT TESTIMONIALS</span>
          <h2 className="section-title">
            Words from the people who <span className="highlight-blue">live and work in our builds.</span>
          </h2>
        </div>

        <div className="testimonials-box" data-aos="fade-up">
          {/* Main Featured Quote */}
          <div className="testimonials-main">
            <span className="quote-mark">“</span>
            
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIdx}
                className="testimonial-quote"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {t.quote}
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${activeIdx}`}
                className="testimonial-meta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="testimonial-author-wrap">
                  <span className="testimonial-author-name">{t.author}</span>
                  <span className="testimonial-author-role">{t.role}, {t.company}</span>
                </div>
                <div className="testimonial-project-tag">
                  <span>📍 {t.project}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side Selector Tabs */}
          <div className="testimonials-selector">
            <h4 className="selector-heading">Select Case Study</h4>
            <div className="selector-list">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  className={`selector-item ${idx === activeIdx ? 'selector-item--active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className="selector-item-header">
                    <span className="selector-item-name">{item.author}</span>
                    <span className="selector-item-year">{item.year}</span>
                  </div>
                  <span className="selector-item-company">{item.company}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
