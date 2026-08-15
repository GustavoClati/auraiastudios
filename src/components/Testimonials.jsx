import React from 'react';
import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    initials: 'CR',
    name: 'Camila R.',
    theme: 'Patrulha Canina - Aniversário infantil',
    color: '#FF6B96',
    clientMsg: 'Gente, ficou perfeito!! Nem parece que era só uma foto do dia a dia 😍',
    clientTime: '19:42',
    studioMsg: 'Que alegria! Fico muito feliz que amou 💛',
    studioTime: '19:44'
  },
  {
    id: 2,
    initials: 'JM',
    name: 'Juliana M.',
    theme: 'Ensaio Newborn',
    color: '#4287FF',
    clientMsg: 'Chorei de emoção quando vi as fotos do meu bebê assim 🥺',
    clientTime: '21:05',
    studioMsg: 'Ficamos muito felizes em fazer parte desse momento!',
    studioTime: '21:07'
  },
  {
    id: 3,
    initials: 'PA',
    name: 'Patrícia A.',
    theme: 'Família',
    color: '#FF4275',
    clientMsg: 'Rapidinho mesmo! Pedi de manhã e à tarde já tinha recebido tudo pronto',
    clientTime: '14:12',
    studioMsg: 'Isso mesmo! Entrega expressa sempre que precisar 😉',
    studioTime: '14:15'
  },
  {
    id: 4,
    initials: 'RT',
    name: 'Rafael T.',
    theme: 'Retrato corporativo',
    color: '#89CFF0',
    clientMsg: 'Usei pro meu perfil do LinkedIn, ficou super profissional',
    clientTime: '09:30',
    studioMsg: 'Ótima escolha! Ideal pra quem quer causar boa impressão',
    studioTime: '09:33'
  },
  {
    id: 5,
    initials: 'BS',
    name: 'Beatriz S.',
    theme: 'Aniversário adulto',
    color: '#E6A8D7',
    clientMsg: 'Amei poder ter uma foto elegante sem precisar agendar estúdio',
    clientTime: '18:20',
    studioMsg: 'Foi um prazer fazer parte dessa comemoração! 🥂',
    studioTime: '18:22'
  },
  {
    id: 6,
    initials: 'MV',
    name: 'Marcos V.',
    theme: 'Adolescente',
    color: '#FF4500',
    clientMsg: 'Fiz pro meu filho, ele ficou super orgulhoso do resultado',
    clientTime: '20:50',
    studioMsg: 'Que demais! Fico muito feliz em ler isso 💛',
    studioTime: '20:52'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

const Testimonials = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">O QUE DIZEM SOBRE A CLICK.IA</span>
          <h2 className="section-title">Quem pediu, <span className="text-gradient font-italic">aprovou</span></h2>
          <p className="section-description">
            Um gostinho de como é a experiência de pedir seu ensaio pelo WhatsApp.<br/>
            <span style={{fontSize: '0.8rem', opacity: 0.7, fontStyle: 'italic'}}>Conversas ilustrativas, baseadas em relatos reais de clientes — nomes fictícios por privacidade.</span>
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonialsData.map((t) => (
            <motion.div key={t.id} className="testimonial-card" variants={cardVariants}>
              <div className="t-card-header">
                <div className="t-avatar" style={{ backgroundColor: t.color }}>
                  {t.initials}
                </div>
                <div className="t-user-info">
                  <h4>{t.name}</h4>
                  <span>{t.theme}</span>
                </div>
              </div>
              
              <div className="t-chat-container">
                <div className="t-bubble t-client">
                  <p>{t.clientMsg}</p>
                  <span className="t-time">{t.clientTime}</span>
                </div>
                
                <div className="t-bubble t-studio">
                  <p>{t.studioMsg}</p>
                  <span className="t-time">
                    {t.studioTime} <CheckCheck size={14} className="t-read-icon" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
