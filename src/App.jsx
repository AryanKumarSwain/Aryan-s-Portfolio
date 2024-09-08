import React, { useEffect } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
// import TopDown from './components/TopDown';

const App = () => {


  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full bg-light-mode dark:bg-dark-mode"></div>

      <div className="container lg:mx-auto px-9">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        {/* <TopDown /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
