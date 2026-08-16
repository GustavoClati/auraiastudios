import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';
import { MessageCircle, Image as ImageIcon, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';
import princessImg from '../assets/hero_princess.jpg';
import spidermanImg from '../assets/hero_spiderman.jpg';
import pawpatrolImg from '../assets/hero_pawpatrol.jpg';

const images = [princessImg, spidermanImg, pawpatrolImg];

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
      <div className="hero-glow"></div>
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <span className="text-gradient">ENSAIOS INFANTIS CRIADOS COM INTELIGÊNCIA ARTIFICIAL</span>
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
    </section>
  );
};

export default Hero;
