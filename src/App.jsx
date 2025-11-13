import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { useSectionTransitions } from './hooks/useSectionTransitions';

function App() {
  useSectionTransitions();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
