import React, { useEffect } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
// import TopDown from './components/TopDown';
import './App.css'; // Ensure you import the CSS where the glow effect is defined

const App = () => {

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    const logoDark = document.querySelector('.logo-dark');
    const logoLight = document.querySelector('.logo-light');
    const socialIcons = document.querySelectorAll('.social-icon');

    const handleScroll = () => {
      if (window.scrollY > 50) {
        logoDark?.classList.add('glow');
        logoLight?.classList.add('glow');

        socialIcons.forEach(icon => {
          icon.classList.add('glow');
        });
      } else {
        logoDark?.classList.remove('glow');
        logoLight?.classList.remove('glow');

        socialIcons.forEach(icon => {
          icon.classList.remove('glow');
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full bg-light-mode dark:bg-dark-mode"></div>

      <div className="container w-full p-4 lg:m-auto">
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
