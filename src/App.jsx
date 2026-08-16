import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <>
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
