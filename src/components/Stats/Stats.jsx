import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const stats = [
  { num: 500, suffix: '+', label: 'Completed Builds', desc: 'Residential, commercial and heavy industrial projects delivered across Gujarat.' },
  { num: 20, suffix: '+', label: 'Years of Excellence', desc: 'Continuous construction leadership and structural integrity since 2005.' },
  { num: 12, suffix: 'M+', label: 'Square Feet Built', desc: 'Precision-engineered floor space delivered with zero structural failure.' },
  { num: 99, suffix: '%', label: 'On-Time Handover', desc: 'Milestone-tracked execution with transparent weekly client reporting.' },
];

function AnimatedNumber({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const startVal = 0;

          const step = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * (target - startVal) + startVal));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} className="stat-value">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats-editorial" id="stats">
      <div className="container">
        <div className="stats-header">
          <span className="studio-tag">VERIFIABLE PERFORMANCE</span>
          <h2 className="section-title">
            The numbers behind our <span className="highlight-blue">twenty-year reputation.</span>
          </h2>
        </div>

        <div className="stats-strip">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <AnimatedNumber target={s.num} suffix={s.suffix} />
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
