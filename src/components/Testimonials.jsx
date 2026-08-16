import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';
import SectionDivider from './SectionDivider';

const testimonialsRow1 = [
  {
    id: 1,
    name: 'Camila R.',
    theme: 'Patrulha Canina',
    clientMsg: 'Ficou perfeito! Comprei o pacote de 10 fotos e o meu filho ficou encantado se vendo como herói.'
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
    clientMsg: 'Fiquei com receio no começo, mas me entregaram em menos de 2 horas e as fotos parecem de cinema de tão lindas. Recomendo muito!'
  },
  {
    id: 4,
    name: 'Amanda C.',
    theme: 'Fazendinha',
    clientMsg: 'As fotos do meu bebê de caipira ficaram um encanto! Todo mundo no Instagram amou.'
  }
];

const testimonialsRow2 = [
  {
    id: 5,
    name: 'Mãe do Rafael',
    theme: 'Astronauta',
    clientMsg: 'Muito prático! Só mandei uma foto do celular e recebi o ensaio perfeito. Ele amou se ver no espaço.'
  },
  {
    id: 6,
    name: 'Beatriz S.',
    theme: 'Super-Herói',
    clientMsg: 'Superou todas as expectativas. Fizemos o tema do Batman pro meu sobrinho e ele não para de mostrar pra todo mundo!'
  },
  {
    id: 7,
    name: 'Carla V.',
    theme: 'Fada',
    clientMsg: 'Minha filha achou que era mágica de verdade! A qualidade é absurda, me mandaram de volta rapidinho.'
  },
  {
    id: 8,
    name: 'Luiza B.',
    theme: 'Sereia',
    clientMsg: 'Fiz o tema escolar para a lembrancinha dos avós e ficou um charme. E o de sereia virou o quadro do quarto!'
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
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
          <span className="section-subtitle" style={{ color: 'var(--color-accent-pink)', fontWeight: 800 }}>O QUE DIZEM SOBRE A ENCANTA STUDIO</span>
          <h2 className="section-title">Depoimentos de <span className="text-pink font-italic">Mamães</span></h2>
          <p className="section-description">
            Famílias encantadas com os ensaios mágicos que criamos.
          </p>
        </motion.div>
      </div>

      <div className="t-marquee-container">
        <div className="t-marquee t-marquee-left">
          <div className="t-marquee-content">
            {testimonialsRow1.concat(testimonialsRow1).map((t, index) => (
              <div key={index} className="review-card">
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
              </div>
            ))}
          </div>
        </div>

        <div className="t-marquee t-marquee-right">
          <div className="t-marquee-content t-right-direction">
            {testimonialsRow2.concat(testimonialsRow2).map((t, index) => (
              <div key={index} className="review-card">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
