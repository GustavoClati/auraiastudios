import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { MessageCircle, Image as ImageIcon, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';
import princessImg from '../assets/hero_princess.jpg';
import spidermanImg from '../assets/hero_spiderman.jpg';
import pawpatrolImg from '../assets/hero_pawpatrol.jpg';

const Hero = () => {
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
            Transforme uma foto simples em um <span className="text-gradient font-italic">ensaio dos sonhos.</span>
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
          <div className="images-composition">
            <motion.div 
              className="photo-card card-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="photo-placeholder" style={{ backgroundImage: `url(${princessImg})` }}></div>
            </motion.div>
            <motion.div 
              className="photo-card card-2"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="photo-placeholder" style={{ backgroundImage: `url(${spidermanImg})` }}></div>
            </motion.div>
            <motion.div 
              className="photo-card card-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
            >
              <div className="photo-placeholder" style={{ backgroundImage: `url(${pawpatrolImg})` }}></div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
