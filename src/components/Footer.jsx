import React from 'react';
import './Footer.css';
import { Camera, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Camera className="logo-icon" size={28} />
            <div className="logo-text">
              <h2>Aura.IA</h2>
              <span>ESTÚDIOS INFANTIS COM IA</span>
            </div>
          </div>
          <p className="footer-description">
            Transformando fotos simples em ensaios mágicos através do poder da Inteligência Artificial.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#ensaios">Nossos ensaios</a></li>
            <li><a href="#pacotes">Pacotes</a></li>
            <li><a href="#duvidas">Dúvidas Frequentes</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aura IA Studios. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
