import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const row1Images = ['/imgs/real-4.jpg', '/imgs/real-5.jpg', '/imgs/real-6.jpg', '/imgs/real-7.jpg', '/imgs/real-8.jpg'];
  const row2Images = ['/imgs/real-9.jpg', '/imgs/real-10.jpg', '/imgs/real-11.jpg', '/imgs/real-1.jpg', '/imgs/real-2.jpg'];

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

      <div className="marquee-container">
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {row1Images.concat(row1Images).map((imgSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-img-placeholder" style={{ backgroundImage: `url(${imgSrc})` }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee marquee-right">
          <div className="marquee-content right-direction">
            {row2Images.concat(row2Images).map((imgSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-img-placeholder" style={{ backgroundImage: `url(${imgSrc})` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
        <div className="g-feature">
          <span>100% online</span>
        </div>
        <div className="g-feature">
          <span>Feito com amor</span>
        </div>
        <div className="g-feature">
          <span>Entrega via WhatsApp</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
