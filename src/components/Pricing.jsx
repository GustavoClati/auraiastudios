import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Pricing.css';
import princessImg from '../assets/hero_princess.jpg';
import pawpatrolImg from '../assets/hero_pawpatrol.jpg';

const packages = [
  {
    id: 'basic',
    title: '1 FOTO',
    price: 'R$ 29,90',
    img: pawpatrolImg,
    features: ['1 tema à sua escolha', 'Alta resolução (4K)', 'Entrega em até 24h', 'Suporte via WhatsApp'],
    isPopular: false
  },
  {
    id: 'popular',
    title: '5 FOTOS',
    price: 'R$ 99,90',
    img: princessImg,
    features: ['Até 5 temas diferentes', 'Alta resolução (4K)', 'Entrega expressa (até 12h)', 'Suporte prioritário', '1 foto de brinde'],
    isPopular: true
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
  const [activePackage, setActivePackage] = useState('popular');

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
              {pkg.isPopular && <div className="popular-badge">MAIS ESCOLHIDO</div>}
              <div className="p-card-img" style={{ backgroundImage: `url(${pkg.img})` }}></div>
              <div className="p-card-content">
                <h3>{pkg.title}</h3>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">{pkg.price.replace('R$ ', '').split(',')[0]}</span>
                  <span className="cents">,{pkg.price.split(',')[1]}</span>
                </div>
                
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
