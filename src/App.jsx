import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <HowItWorks />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
