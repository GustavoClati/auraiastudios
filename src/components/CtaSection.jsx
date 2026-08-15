import React from 'react';
import './CtaSection.css';
import { Camera, Heart, MessageCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <div className="cta-icon-wrapper">
              <Camera size={32} className="cta-icon" />
              <Heart size={16} className="cta-icon-heart" fill="var(--color-accent-pink)" />
            </div>
            
            <h2 className="cta-title">
              Pronto para transformar a foto do seu pequeno em um <span className="text-gradient">ensaio inesquecível?</span>
            </h2>
          </div>
          
          <a href="#contato" className="btn-primary cta-btn">
            <MessageCircle size={22} />
            QUERO MEU ENSAIO AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
