import React from 'react';
import './Button.css';

export default function Button({ children, href, onClick, className = '', download, ...props }) {
  if (href) {
    return (
      <a href={href} className={`btn ${className}`} download={download} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
}
