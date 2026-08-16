import React from 'react';
import './Header.css';
import { MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logoImg} alt="Encanta Studio" className="logo-img" />
          <div className="logo-text">
            <h1>Encanta Studio</h1>
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
