import React from 'react';

export default function EducationCard({ item }) {
  const { status, degree, uni, year } = item;
  return (
    <div className="edu-card">
      <div className="journey-badge edu" style={{ marginBottom: '.8rem' }}>{status}</div>
      <div className="edu-degree">{degree}</div>
      <div className="edu-uni">{uni}</div>
      <div className="edu-year">{year}</div>
    </div>
  );
}
