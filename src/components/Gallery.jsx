import React, { useRef } from 'react';
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
      <div className="gallery-header">
        <span className="section-subtitle">ALGUNS DOS NOSSOS ENSAIOS</span>
        <h2 className="section-title">
          Ensaios infantis <span className="text-gradient font-italic">incríveis</span>
        </h2>
        <p>Qualquer tema, criado com Inteligência Artificial e muito carinho.</p>
      </div>

      <div className="gallery-container">
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
      </div>

      <div className="gallery-features">
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
      </div>
    </section>
  );
};

export default Gallery;
