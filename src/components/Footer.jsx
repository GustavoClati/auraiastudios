import React from 'react';
import './Footer.css';
import { Camera } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <Camera className="logo-icon" size={28} />
            <div className="logo-text">
              <h2>Encanta Studio</h2>
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
            <a href="https://www.instagram.com/encantastudios/" aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Encanta Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
