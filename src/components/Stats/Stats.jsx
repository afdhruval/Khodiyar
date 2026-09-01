import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const stats = [
  { num: 500, suffix: '+', label: 'Completed Builds', desc: 'Residential, commercial and heavy industrial projects delivered.' },
  { num: 20, suffix: '+', label: 'Years Active', desc: 'Continuous construction leadership across Gujarat since 2005.' },
  { num: 12, suffix: 'M+', label: 'Square Feet Built', desc: 'Precision engineered floor space standing with zero structural failure.' },
  { num: 99, suffix: '%', label: 'On-Time Handover', desc: 'Milestone-tracked execution with transparent weekly reporting.' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="stats-editorial" ref={ref}>
      <div className="container">
        <div className="stats-header">
          <span className="studio-tag">VERIFIABLE PERFORMANCE</span>
          <h2 className="section-title">
            The metrics behind our <span className="highlight-blue">twenty-year reputation.</span>
          </h2>
        </div>

        <div className="stats-strip">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <div className="stat-value">
                {inView ? (
                  <CountUp
                    start={0}
                    end={s.num}
                    duration={2.2}
                    suffix={s.suffix}
                  />
                ) : (
                  `${s.num}${s.suffix}`
                )}
              </div>
              <div className="stat-indicator-line" />
              <h3 className="stat-title">{s.label}</h3>
              <p className="stat-explanation">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
