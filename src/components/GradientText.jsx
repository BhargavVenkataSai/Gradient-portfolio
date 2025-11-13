import React from 'react';
import './GradientText.css';

const GradientText = ({ children, className = '' }) => {
  return (
    <span className={`gradient-text-wrapper ${className}`}>
      <span className="gradient-text-animated">{children}</span>
      <span className="gradient-text-animated gradient-text-glow" aria-hidden="true">
        {children}
      </span>
    </span>
  );
};

export default GradientText;
