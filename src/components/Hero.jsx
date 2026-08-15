import React from 'react';
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
        
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} className="text-gradient" />
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
        </div>

        <div className="hero-visual">
          <div className="images-composition">
            <div className="photo-card card-1">
              <div className="photo-placeholder" style={{ backgroundImage: `url(${princessImg})` }}></div>
            </div>
            <div className="photo-card card-2">
              <div className="photo-placeholder" style={{ backgroundImage: `url(${spidermanImg})` }}></div>
              <div className="floating-bubble">
                <p>Qual tema dos sonhos do seu pequeno?</p>
                <Sparkles size={14} />
              </div>
            </div>
            <div className="photo-card card-3">
              <div className="photo-placeholder" style={{ backgroundImage: `url(${pawpatrolImg})` }}></div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
