import React from 'react';

const SectionDivider = ({ position = 'bottom', color = 'var(--color-bg-secondary)' }) => {
  const invert = position === 'top' ? 'rotate(180deg)' : 'none';
  
  return (
    <div className="wave-divider" style={{ transform: invert, marginTop: position === 'top' ? '-1px' : '0', marginBottom: position === 'bottom' ? '-1px' : '0' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        {/* Puffy Cloud Shape */}
        <path fill={color} d="M0,60 C50,20 100,20 150,60 C200,80 250,80 300,50 C350,10 400,10 450,50 C500,80 550,80 600,60 C650,20 700,20 750,60 C800,90 850,90 900,60 C950,20 1000,20 1050,60 C1100,90 1150,90 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};

export default SectionDivider;
