import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CloudUpload, Sparkles, Download, ArrowRight } from 'lucide-react';
import './Pricing.css';
import SectionDivider from './SectionDivider';

const packages = [
  {
    id: 'pkg-1',
    title: '1 FOTO',
    price: 'R$ 13,90',
    unitPrice: 'R$ 13,90 por foto',
    img: '/imgs/real-3.jpg',
    features: ['1 tema à sua escolha', 'Alta resolução (4K)', 'Entrega em até 24h', 'Suporte via WhatsApp'],
    badge: null
  },
  {
    id: 'pkg-2',
    title: '2 FOTOS',
    price: 'R$ 18,90',
    unitPrice: 'R$ 9,45 por foto',
    img: '/imgs/real-4.jpg',
    features: ['Até 2 temas diferentes', 'Alta resolução (4K)', 'Entrega em até 24h', 'Suporte via WhatsApp'],
    badge: null
  },
  {
    id: 'pkg-5',
    title: '5 FOTOS',
    price: 'R$ 29,90',
    unitPrice: 'R$ 5,98 por foto',
    img: '/imgs/real-5.jpg',
    features: ['Até 5 temas diferentes', 'Alta resolução (4K)', 'Entrega expressa (até 12h)', 'Suporte prioritário'],
    badge: 'Mais Pedida'
  },
  {
    id: 'pkg-10',
    title: '10 FOTOS',
    price: 'R$ 44,90',
    unitPrice: 'R$ 4,49 por foto',
    img: '/imgs/real-6.jpg',
    features: ['Até 10 temas', 'Alta resolução (4K)', 'Entrega VIP', 'Suporte prioritário', 'Fotos extras'],
    badge: 'Pacote Completo'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Pricing = () => {
  const [activePackage, setActivePackage] = useState('pkg-5');

  return (
    <section id="pacotes" className="pricing-section">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <SectionDivider position="top" color="var(--color-bg-secondary)" />
      </div>
      
      <div className="container" style={{ paddingTop: '8rem' }}>
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">COMO FUNCIONA</span>
          <h2 className="section-title">Magia em <span className="text-gradient font-italic">3 Passos</span></h2>
        </motion.div>

        <motion.div 
          className="how-it-works-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.div className="step-card" variants={cardVariants}>
            <div className="step-number step-color-1">01</div>
            <div className="step-icon-wrap step-color-1">
              <CloudUpload size={40} />
            </div>
            <h3>Envie sua foto</h3>
            <p>Uma foto simples, tirada com o celular mesmo — sem estúdio, sem preparo.</p>
          </motion.div>
          
          <motion.div className="step-arrow arrow-1" variants={cardVariants}>
            <ArrowRight size={32} />
          </motion.div>

          <motion.div className="step-card" variants={cardVariants}>
            <div className="step-number step-color-1">02</div>
            <div className="step-icon-wrap step-color-1">
              <Sparkles size={40} />
            </div>
            <h3>Escolha o tema</h3>
            <p>Aniversário, desenho, super-herói, fazendinha e muito mais. Você escolhe e nós criamos!</p>
          </motion.div>

          <motion.div className="step-arrow arrow-2" variants={cardVariants}>
            <ArrowRight size={32} />
          </motion.div>

          <motion.div className="step-card" variants={cardVariants}>
            <div className="step-number step-color-2">03</div>
            <div className="step-icon-wrap step-color-2">
              <Download size={40} />
            </div>
            <h3>Receba o ensaio</h3>
            <p>Suas fotos chegam prontas, em alta qualidade, direto no WhatsApp. Rápido e fácil!</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: '5rem' }}
        >
          <span className="section-subtitle">ESCOLHA SEU PACOTE</span>
          <h2 className="section-title">Pacotes <span className="text-gradient font-italic">Especiais</span></h2>
          <p className="section-description">
            Sem mensalidades, pague apenas pelo pacote de fotos que desejar gerar.
          </p>
        </motion.div>

        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.id} 
              className={`pricing-card ${activePackage === pkg.id ? 'highlighted active' : ''}`} 
              variants={cardVariants}
              onClick={() => setActivePackage(pkg.id)}
            >
              {pkg.badge && <div className="popular-badge">{pkg.badge}</div>}
              <div className="p-card-img" style={{ backgroundImage: `url(${pkg.img})` }}></div>
              <div className="p-card-content">
                <h3>{pkg.title}</h3>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">{pkg.price.replace('R$ ', '').split(',')[0]}</span>
                  <span className="cents">,{pkg.price.split(',')[1]}</span>
                </div>
                <div className="unit-price">{pkg.unitPrice}</div>
                
                <ul className="features-list">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <CheckCircle2 size={18} className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={`https://wa.me/5511999999999?text=Olá! Gostaria de adquirir o pacote de ${pkg.title}`}
                  className={`btn-primary w-100 ${activePackage !== pkg.id ? 'btn-outline' : ''}`}
                  target="_blank" 
                  rel="noreferrer"
                >
                  Quero este pacote
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
