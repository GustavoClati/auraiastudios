import React from 'react';

const SectionDivider = ({ position = 'bottom', color = 'var(--color-bg-secondary)' }) => {
  const invert = position === 'top' ? 'rotate(180deg)' : 'none';
  
  return (
    <div className="wave-divider" style={{ transform: invert, marginTop: position === 'top' ? '-1px' : '0', marginBottom: position === 'bottom' ? '-1px' : '0' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 120" preserveAspectRatio="none">
        <path fill={color} d="M0,60 C300,120 400,0 1000,60 C1600,120 1700,0 2000,60 L2000,120 L0,120 Z" />
        <path fill={color} d="M0,60 C300,120 400,0 1000,60 C1600,120 1700,0 2000,60 L2000,120 L0,120 Z" transform="translate(2000, 0)" />
      </svg>
    </div>
  );
};

export default SectionDivider;
