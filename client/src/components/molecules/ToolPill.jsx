import React from 'react';
import './ToolPill.css';

export default function ToolPill({ name }) {
  return (
    <div className="tool-pill">
      <span className="tool-dot"></span>
      <span>{name}</span>
    </div>
  );
}
