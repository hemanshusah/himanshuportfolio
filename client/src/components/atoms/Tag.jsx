import React from 'react';
import './Tag.css';

export default function Tag({ text, className = '' }) {
  return <span className={`tag ${className}`}>{text}</span>;
}
