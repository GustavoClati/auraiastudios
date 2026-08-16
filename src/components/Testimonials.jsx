import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Camila R.',
    theme: 'Patrulha Canina',
    clientMsg: 'Ficou perfeito! Comprei o pacote de 10 fotos e economizei com fotógrafo de estúdio.'
  },
  {
    id: 2,
    name: 'Juliana M.',
    theme: 'Ensaio Newborn',
    clientMsg: 'O ensaio newborn ficou a coisa mais linda. Não precisei sair de casa com o recém-nascido e o resultado emocionou toda a família.'
  },
  {
    id: 3,
    name: 'Patrícia A.',
    theme: 'Princesa',
    clientMsg: 'Fiquei com receio no começo, mas me entregaram em menos de 2 horas e as fotos parecem de cinema. Recomendo muito!'
  },
  {
    id: 4,
    name: 'Rafael T.',
    theme: 'Retrato corporativo',
    clientMsg: 'Muito prático! Só mandei uma foto do celular e recebi o ensaio perfeito pro meu LinkedIn. Ganhei até elogio no trabalho.'
  },
  {
    id: 5,
    name: 'Beatriz S.',
    theme: 'Super-Herói',
    clientMsg: 'Superou todas as expectativas. Fizemos o tema do Batman pro meu sobrinho e ele não para de mostrar pra todo mundo!'
  },
  {
    id: 6,
    name: 'Marcos V.',
    theme: 'Adolescente',
    clientMsg: 'Excelente atendimento e qualidade absurda. Pedi alteração em uma das fotos e me mandaram de volta rapidinho.'
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
          <h2 className="section-title">Depoimentos <span className="text-gradient font-italic">Reais</span></h2>
          <p className="section-description">
            Milhares de clientes satisfeitos com ensaios criados com inteligência artificial.
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
            <motion.div key={t.id} className="review-card" variants={cardVariants}>
              <div className="r-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="r-msg">"{t.clientMsg}"</p>
              <div className="r-footer">
                <div className="r-user-info">
                  <h4>{t.name}</h4>
                  <span>Tema: {t.theme}</span>
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
