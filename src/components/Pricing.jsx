import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Clock, Heart, ShieldCheck, Camera, Sparkles } from 'lucide-react';
import './Pricing.css';
import princessImg from '../assets/hero_princess.jpg';
import spidermanImg from '../assets/hero_spiderman.jpg';
import pawpatrolImg from '../assets/hero_pawpatrol.jpg';

const categories = ['Infantil', 'Newborn', 'Família', 'Aniversário adulto', 'Adolescente', 'Corporativo'];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState('Infantil');

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="pacotes" className="pricing-section">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle"><Camera size={14} style={{display:'inline', marginRight: '4px', verticalAlign:'middle'}}/> INVESTIMENTO</span>
          <h2 className="section-title">Escolha seu <span className="text-gradient font-italic">pacote</span></h2>
          <p className="section-description" style={{marginBottom: '1rem'}}>
            Quanto mais fotos no pacote, melhor o valor por unidade.
          </p>
          
          <div className="pricing-features-badge">
            <Sparkles size={14} />
            <span><strong>TODOS OS ENSAIOS INCLUEM:</strong> edição profissional • qualquer tema • entrega em alta qualidade</span>
          </div>
        </motion.div>

        <motion.div 
          className="pricing-categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="pricing-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {/* Pacote 1 */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <div className="p-card-img" style={{ backgroundImage: `url(${pawpatrolImg})` }}></div>
            <div className="p-card-content">
              <h3>1 FOTO</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">13<span className="cents">,90</span></span>
              </div>
              <ul className="features-list">
                <li><Check size={16} className="check-icon"/> 1 foto profissional</li>
                <li><Check size={16} className="check-icon"/> Edição de alta qualidade</li>
                <li><Check size={16} className="check-icon"/> Entrega rápida</li>
              </ul>
              <a href="#contato" className="btn-secondary w-full">
                <MessageCircle size={18} /> Quero esse pacote
              </a>
            </div>
          </motion.div>

          {/* Pacote 2 */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <div className="p-card-img" style={{ backgroundImage: `url(${spidermanImg})` }}></div>
            <div className="p-card-content">
              <h3>2 FOTOS</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">18<span className="cents">,90</span></span>
              </div>
              <ul className="features-list">
                <li><Check size={16} className="check-icon"/> 2 fotos profissionais</li>
                <li><Check size={16} className="check-icon"/> Edição de alta qualidade</li>
                <li><Check size={16} className="check-icon"/> Entrega rápida</li>
              </ul>
              <a href="#contato" className="btn-secondary w-full">
                <MessageCircle size={18} /> Quero esse pacote
              </a>
            </div>
          </motion.div>

          {/* Pacote 3 - Mais Escolhido */}
          <motion.div className="pricing-card highlighted" variants={cardVariants}>
            <div className="popular-badge">⭐ MAIS ESCOLHIDO</div>
            <div className="p-card-img" style={{ backgroundImage: `url(${princessImg})` }}></div>
            <div className="p-card-content">
              <h3>5 FOTOS</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">29<span className="cents">,90</span></span>
              </div>
              <ul className="features-list">
                <li><Check size={16} className="check-icon pink-check"/> 5 fotos profissionais</li>
                <li><Check size={16} className="check-icon pink-check"/> Edição de alta qualidade</li>
                <li><Check size={16} className="check-icon pink-check"/> Entrega rápida</li>
              </ul>
              <a href="#contato" className="btn-primary w-full">
                <MessageCircle size={18} /> Quero esse pacote
              </a>
            </div>
          </motion.div>

          {/* Pacote 4 */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <div className="p-card-img" style={{ backgroundImage: `url(${pawpatrolImg})` }}></div>
            <div className="p-card-content">
              <h3>10 FOTOS</h3>
              <div className="price">
                <span className="currency">R$</span>
                <span className="amount">44<span className="cents">,90</span></span>
              </div>
              <ul className="features-list">
                <li><Check size={16} className="check-icon blue-check"/> 10 fotos profissionais</li>
                <li><Check size={16} className="check-icon blue-check"/> Edição de alta qualidade</li>
                <li><Check size={16} className="check-icon blue-check"/> Entrega rápida</li>
              </ul>
              <a href="#contato" className="btn-secondary w-full blue-btn">
                <MessageCircle size={18} /> Quero esse pacote
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div 
          className="urgency-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Clock size={32} className="urgency-icon" />
          <div className="urgency-text">
            <h4>PRECISA COM URGÊNCIA?</h4>
            <p>Entrega expressa em até 2 horas por +R$ 20,00.</p>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="badge-item">
            <ShieldCheck size={28} className="badge-icon pink" />
            <div className="badge-text">
              <strong>Entrega em até 24h</strong>
              <span>Após a confirmação do pagamento</span>
            </div>
          </div>
          <div className="badge-item">
            <Sparkles size={28} className="badge-icon blue" />
            <div className="badge-text">
              <strong>Qualquer tema</strong>
              <span>Fazemos todos os temas</span>
            </div>
          </div>
          <div className="badge-item">
            <MessageCircle size={28} className="badge-icon green" />
            <div className="badge-text">
              <strong>Entregue no WhatsApp</strong>
              <span>Prático, rápido e seguro</span>
            </div>
          </div>
          <div className="badge-item">
            <Heart size={28} className="badge-icon pink" />
            <div className="badge-text">
              <strong>Feito com muito amor</strong>
              <span>Para eternizar momentos</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
