import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="global-glow glow-1"></div>
      <div className="global-glow glow-2"></div>
      <div className="global-glow glow-3"></div>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
