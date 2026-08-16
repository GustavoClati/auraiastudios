import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';
import lionImg from '../assets/gal_lion.jpg';
import fairyImg from '../assets/gal_fairy.jpg';
import astroImg from '../assets/gal_astronaut.jpg';
import basketImg from '../assets/gal_basket.jpg';
import schoolImg from '../assets/gal_school.jpg';
import farmImg from '../assets/gal_farm.jpg';
import supergirlImg from '../assets/gal_supergirl.jpg';
import beachImg from '../assets/gal_beach.jpg';
import princessImg from '../assets/hero_princess.jpg';
import spidermanImg from '../assets/hero_spiderman.jpg';
import pawpatrolImg from '../assets/hero_pawpatrol.jpg';

const Gallery = () => {
  const row1Images = [lionImg, fairyImg, astroImg, basketImg, schoolImg, farmImg];
  const row2Images = [supergirlImg, beachImg, princessImg, spidermanImg, pawpatrolImg];

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
