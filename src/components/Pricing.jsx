import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ImagePlus, Wand2, Send } from 'lucide-react';
import './Pricing.css';
import princessImg from '../assets/hero_princess.jpg';
import pawpatrolImg from '../assets/hero_pawpatrol.jpg';
import astroImg from '../assets/gal_astronaut.jpg';

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
  },
  {
    id: 'premium',
    title: '10 FOTOS',
    price: 'R$ 149,90',
    img: astroImg,
    features: ['Até 10 temas diferentes', 'Alta resolução (4K)', 'Entrega VIP (até 6h)', 'Suporte prioritário', '3 fotos de brinde'],
    isPopular: false
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
          <motion.div className="step-item" variants={cardVariants}>
            <div className="step-icon">
              <ImagePlus size={32} />
            </div>
            <h3>1. Envie a Foto</h3>
            <p>Mande de 1 a 3 fotos claras do rosto da criança pelo WhatsApp.</p>
          </motion.div>
          
          <motion.div className="step-divider" variants={cardVariants}></motion.div>

          <motion.div className="step-item" variants={cardVariants}>
            <div className="step-icon">
              <Wand2 size={32} />
            </div>
            <h3>2. Escolha o Tema</h3>
            <p>Escolha o seu pacote abaixo e defina os temas (heróis, profissões, fadas...).</p>
          </motion.div>

          <motion.div className="step-divider" variants={cardVariants}></motion.div>

          <motion.div className="step-item" variants={cardVariants}>
            <div className="step-icon">
              <Send size={32} />
            </div>
            <h3>3. Receba a Magia</h3>
            <p>Nossa Inteligência Artificial cria tudo e te entregamos pronto em alta resolução!</p>
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
