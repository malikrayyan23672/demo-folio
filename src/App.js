import './App.css';
import { useCallback, useEffect } from 'react';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Experience from './components/pages/Experience';
import Aos from 'aos';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

function App() {
    useEffect(() => {
      Aos.init();
    })

  return (
    <div className='flex flex-col h-full bg-[#2E2E2E]'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Skills/>
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
