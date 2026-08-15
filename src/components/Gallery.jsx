import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Generate 8 placeholder slots for the gallery
  const items = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section id="ensaios" className="gallery-section">
      <motion.div 
        className="gallery-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-subtitle">ALGUNS DOS NOSSOS ENSAIOS</span>
        <h2 className="section-title">
          Ensaios infantis <span className="text-gradient font-italic">incríveis</span>
        </h2>
        <p>Qualquer tema, criado com Inteligência Artificial e muito carinho.</p>
      </motion.div>

      <motion.div 
        className="gallery-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Rolar para a esquerda">
          <ChevronLeft size={24} />
        </button>
        
        <div className="gallery-track" ref={scrollRef}>
          {items.map((item) => (
            <div key={item} className={`gallery-item item-${item}`}>
              <div className="gallery-img-placeholder"></div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Rolar para a direita">
          <ChevronRight size={24} />
        </button>
      </motion.div>

      <motion.div 
        className="gallery-features"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="g-feature">
          <span>Qualquer tema</span>
        </div>
        <div className="g-divider"></div>
        <div className="g-feature">
          <span>Entrega em até 24h</span>
        </div>
        <div className="g-divider"></div>
        <div className="g-feature">
          <span>100% online</span>
        </div>
        <div className="g-divider"></div>
        <div className="g-feature">
          <span>Feito com amor</span>
        </div>
        <div className="g-divider"></div>
        <div className="g-feature">
          <span>Entrega via WhatsApp</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
