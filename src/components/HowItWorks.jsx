import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';
import { UploadCloud, Wand2, Download } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="how-it-works">
      <div className="container">
        
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">O PROCESSO</span>
          <h2 className="section-title">Como funciona</h2>
          <p className="section-description">
            Três passos entre a foto que você já tem e o ensaio que você sempre quis.
          </p>
        </motion.div>

        <motion.div 
          className="steps-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div 
            className="step-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="step-number">01</div>
            <div className="step-icon-wrapper">
              <UploadCloud size={40} className="step-icon" />
            </div>
            <h3>Envie sua foto</h3>
            <p>Uma foto simples, tirada com o celular mesmo — sem estúdio, sem preparo.</p>
          </motion.div>
          
          <motion.div 
            className="step-arrow"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } }
            }}
          >
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12C20 12 40 12 58 12M58 12C54 8 50 4 50 4M58 12C54 16 50 20 50 20" stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="12" x2="60" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF4275"/>
                  <stop offset="1" stopColor="#FF6B96"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="step-number">02</div>
            <div className="step-icon-wrapper">
              <Wand2 size={40} className="step-icon" />
            </div>
            <h3>Escolha o tema</h3>
            <p>Aniversário, desenho, super-herói, bebê, fazendinha e muito mais. Você escolhe e nós criamos!</p>
          </motion.div>

          <motion.div 
            className="step-arrow"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6 } }
            }}
          >
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12C20 12 40 12 58 12M58 12C54 8 50 4 50 4M58 12C54 16 50 20 50 20" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint1_linear" x1="0" y1="12" x2="60" y2="12" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4287FF"/>
                  <stop offset="1" stopColor="#FF4275"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          <motion.div 
            className="step-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
          >
            <div className="step-number" style={{background: 'var(--color-accent-blue)'}}>03</div>
            <div className="step-icon-wrapper">
              <Download size={40} className="step-icon blue-icon" />
            </div>
            <h3>Receba o ensaio</h3>
            <p>Suas fotos chegam prontas, em alta qualidade, direto no WhatsApp. Rápido, fácil e sem complicação!</p>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
