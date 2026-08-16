import React from 'react';
import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    initials: 'CR',
    name: 'Camila R.',
    theme: 'Patrulha Canina',
    color: '#FF6B96',
    clientMsg: 'Gente, ficou perfeito!! Comprei o pacote de 10 fotos e economizei horrores com fotógrafo de estúdio. 😍',
    clientTime: '19:42',
    studioMsg: 'Que alegria, Camila! Fico muito feliz que amou 💛',
    studioTime: '19:44'
  },
  {
    id: 2,
    initials: 'JM',
    name: 'Juliana M.',
    theme: 'Ensaio Newborn',
    color: '#4287FF',
    clientMsg: 'O ensaio newborn ficou a coisa mais linda! Não precisei sair de casa com o recém-nascido e o resultado emocionou toda a família. 🥺',
    clientTime: '21:05',
    studioMsg: 'Ficamos muito felizes em eternizar esse momento tão especial!',
    studioTime: '21:07'
  },
  {
    id: 3,
    initials: 'PA',
    name: 'Patrícia A.',
    theme: 'Princesa',
    color: '#FF4275',
    clientMsg: 'Fiquei com receio no começo, mas me entregaram em menos de 2 horas e as fotos parecem de cinema. Recomendo muito!',
    clientTime: '14:12',
    studioMsg: 'Agradecemos a confiança! Conte sempre com a gente 😉',
    studioTime: '14:15'
  },
  {
    id: 4,
    initials: 'RT',
    name: 'Rafael T.',
    theme: 'Retrato corporativo',
    color: '#89CFF0',
    clientMsg: 'Muito prático! Só mandei uma foto do celular e recebi o ensaio perfeito pro meu LinkedIn. Ganhei até elogio no trabalho.',
    clientTime: '09:30',
    studioMsg: 'Ótima escolha, Rafael! Causa uma excelente primeira impressão.',
    studioTime: '09:33'
  },
  {
    id: 5,
    initials: 'BS',
    name: 'Beatriz S.',
    theme: 'Super-Herói',
    color: '#E6A8D7',
    clientMsg: 'Superou todas as expectativas. Fizemos o tema do Batman pro meu sobrinho e ele não para de mostrar pra todo mundo! 😂',
    clientTime: '18:20',
    studioMsg: 'Hahaha que maravilha! Foi um prazer criar esse ensaio! 🦇',
    studioTime: '18:22'
  },
  {
    id: 6,
    initials: 'MV',
    name: 'Marcos V.',
    theme: 'Adolescente',
    color: '#FF4500',
    clientMsg: 'Excelente atendimento e qualidade absurda. Pedi alteração em uma das fotos e me mandaram de volta rapidinho.',
    clientTime: '20:50',
    studioMsg: 'A gente faz questão de deixar tudo perfeito pra vocês 💛',
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
