import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Image as ImageIcon, Sparkles, Clock, ShieldCheck, Heart, Rocket, Star, Puzzle } from 'lucide-react';
import './Hero.css';
import SectionDivider from './SectionDivider';
import FloatingElements from './FloatingElements';

const images = ['/imgs/real-1.jpg', '/imgs/real-2.jpg', '/imgs/real-3.jpg'];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <FloatingElements />
      {/* Floating elements for magic child theme */}
      <div className="floating-element" style={{ top: '10%', left: '8%', opacity: 0.9 }}>
        <Rocket size={70} color="#FFC700" fill="#FFC700" />
      </div>
      <div className="floating-element" style={{ top: '25%', right: '12%', opacity: 1, animationDelay: '1s' }}>
        <Puzzle size={80} color="#FF4D8C" fill="#FF4D8C" />
      </div>
      <div className="floating-element" style={{ bottom: '25%', left: '15%', opacity: 0.8, animationDelay: '3s' }}>
        <Star size={60} color="#00B4D8" fill="#00B4D8" />
      </div>

      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <span>ENSAIOS INFANTIS COM MAGIA E IA</span>
          </div>
          
          <h1 className="hero-title">
            Transforme uma foto simples em um <br/> <span className="text-gradient font-italic">ensaio dos sonhos.</span>
          </h1>
          
          <p className="hero-description">
            Criamos ensaios infantis incríveis em qualquer tema, usando Inteligência Artificial. 
            Tudo online, sem precisar sair de casa e com entrega direto pelo WhatsApp.
          </p>
          
          <div className="hero-buttons">
            <a href="#contato" className="btn-primary btn-large">
              <MessageCircle size={22} />
              Quero meu ensaio
            </a>
            <a href="#ensaios" className="btn-secondary btn-large">
              <ImageIcon size={22} />
              Ver ensaios
            </a>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <Sparkles size={18} className="feature-icon" />
              <span>Qualquer tema</span>
            </div>
            <div className="feature-item">
              <Clock size={18} className="feature-icon" />
              <span>Entrega rápida</span>
            </div>
            <div className="feature-item">
              <ShieldCheck size={18} className="feature-icon" />
              <span>100% online</span>
            </div>
            <div className="feature-item">
              <Heart size={18} className="feature-icon" />
              <span>Feito com amor</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image-border"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                className="hero-main-image"
                style={{ backgroundImage: `url(${images[currentImage]})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
        
      </div>
      
      {/* Animated Wave Divider separating Hero from Gallery */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <SectionDivider color="var(--color-bg-secondary)" />
      </div>
    </section>
  );
};

export default Hero;
