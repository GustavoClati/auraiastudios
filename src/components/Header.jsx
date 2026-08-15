import React from 'react';
import './Header.css';
import { Camera, MessageCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Camera className="logo-icon" size={32} />
          <div className="logo-text">
            <h1>Aura.IA</h1>
            <span>ESTÚDIOS INFANTIS COM IA</span>
          </div>
        </div>
        
        <nav className="desktop-nav">
          <ul>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#ensaios">Nossos ensaios</a></li>
            <li><a href="#pacotes">Pacotes</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
          </ul>
        </nav>

        <a href="#contato" className="btn-primary header-cta">
          <MessageCircle size={20} />
          <span>Fazer meu ensaio</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
