import React, { useEffect, useRef, useState } from 'react';
import JourneyCard from '../molecules/JourneyCard';
import EducationCard from '../molecules/EducationCard';

export default function JourneySection({ journey = {} }) {
  const [spineHeight, setSpineHeight] = useState('0%');
  const timelineWrapRef = useRef(null);
  const experiences = journey.experience || [];
  const educations = journey.education || [];

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineWrapRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - rect.top);
      const pct = Math.min(100, (visibleHeight / rect.height) * 110);
      setSpineHeight(`${pct}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="journey">
      <div className="journey-bg-word">Journey</div>
      
      <div className="journey-header reveal">
        <div>
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            The<br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'rgba(245,240,232, .45)', fontSize: '.92em' }}>
              Journey
            </span>
          </h2>
        </div>
        <div className="journey-years">2018 — Present</div>
      </div>

      <div className="timeline-wrap" id="timelineWrap" ref={timelineWrapRef}>
        <div className="timeline-spine">
          <div className="timeline-spine-fill" style={{ height: spineHeight }}></div>
        </div>

        {experiences.map((exp) => (
          <div className="journey-entry" key={exp.id}>
            <div className="journey-dot"></div>
            <div className="journey-connector"></div>
            <JourneyCard item={exp} />
          </div>
        ))}

        {educations.length > 0 && (
          <>
            <div className="journey-edu-divider reveal">
              <div className="edu-line"></div>
              <div className="edu-word">Education</div>
              <div className="edu-line"></div>
            </div>

            <div className="journey-edu-cards">
              {educations.map((edu) => (
                <EducationCard key={edu.id} item={edu} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
