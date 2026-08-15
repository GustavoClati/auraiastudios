import React from 'react';
import { motion } from 'framer-motion';
import './CtaSection.css';
import { Camera, Heart, MessageCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
