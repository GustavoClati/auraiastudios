import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './FloatingElements.css';

const Cloud3D = ({ className, delay = 0 }) => (
  <motion.svg 
    className={`cloud-3d ${className}`}
    width="150" height="100" viewBox="0 0 150 100" 
    fill="none" xmlns="http://www.w3.org/2000/svg"
    animate={{ 
      y: [0, -15, 0],
      rotate: [-2, 2, -2]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay: delay
    }}
  >
    <defs>
      <radialGradient id="cloudGrad" cx="30%" cy="30%" r="70%" fx="30%" fy="30%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#F1E8FF" />
        <stop offset="100%" stopColor="#D9C2FA" />
      </radialGradient>
      <filter id="cloudShadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="0" dy="15" stdDeviation="10" floodColor="#370B73" floodOpacity="0.2"/>
        <feDropShadow dx="0" dy="5" stdDeviation="2" floodColor="#6B17D6" floodOpacity="0.1"/>
      </filter>
    </defs>
    
    <g filter="url(#cloudShadow)">
      {/* Back puffs */}
      <circle cx="45" cy="50" r="30" fill="url(#cloudGrad)" />
      <circle cx="105" cy="50" r="25" fill="url(#cloudGrad)" />
      
      {/* Main middle puff */}
      <circle cx="75" cy="35" r="35" fill="url(#cloudGrad)" />
      
      {/* Bottom base to connect them */}
      <rect x="40" y="45" width="70" height="35" rx="17.5" fill="url(#cloudGrad)" />
      
      {/* Front highlights (for 3D effect) */}
      <path d="M60 25 Q75 10 90 25" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M35 40 Q45 25 55 40" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.7" />
    </g>
  </motion.svg>
);

const FloatingElements = () => {
  const { scrollY } = useScroll();
  
  // Create parallax effects based on scroll position
  const y1 = useTransform(scrollY, [0, 3000], [0, 800]);
  const y2 = useTransform(scrollY, [0, 3000], [0, 1200]);
  const y3 = useTransform(scrollY, [0, 3000], [0, 600]);

  return (
    <div className="floating-container">
      {/* Sticky cloud that stays in view (follows the scroll) */}
      <motion.div 
        className="sticky-cloud-right"
        style={{ y: y1 }}
      >
        <Cloud3D />
      </motion.div>

      <motion.div 
        className="sticky-cloud-left"
        style={{ y: y2 }}
      >
        <Cloud3D delay={2} />
      </motion.div>

      {/* Decorative stars scattered across the height */}
      <motion.div className="scattered-star" style={{ top: '15%', left: '10%', y: y3 }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#FFC700" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 5px 0px #D99A00)' }}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </motion.div>

      <motion.div className="scattered-star" style={{ top: '45%', right: '8%', y: y1 }}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="#00B4D8" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 5px 0px #0087A1)' }}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </motion.div>
      
      <motion.div className="scattered-star" style={{ top: '75%', left: '5%', y: y2 }}>
        <svg width="45" height="45" viewBox="0 0 24 24" fill="#FF4D8C" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 5px 0px #D13B6B)' }}>
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default FloatingElements;
