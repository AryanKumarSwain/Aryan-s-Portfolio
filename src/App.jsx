
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
// import TopDown from './components/TopDown';




const App = () => {
   return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
     {/* <div className="fixed top-0 -z-10 h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      {/* <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-dark-mode light:bg-light-mode"></div>
         <div className=" container mx-auto  px-9 ">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects/>
        {/* <TopDown/> */}
        <Contact/>
        
        <Footer/>
      </div>
    </div>
  );
}

export default App;
