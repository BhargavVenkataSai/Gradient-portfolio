import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import LoadingScreen from './components/LoadingScreen';
import { useSectionTransitions } from './hooks/useSectionTransitions';
import LiquidEther from './components/LiquidEther';

// Wrapper component that uses section transitions after mounting
const MainContent = () => {
  useSectionTransitions();
  
  return (
    <>
      {/* Global Liquid Ether background */}
      <LiquidEther
        colors={["#40ffaa", "#4079ff", "#a040ff"]}
        resolution={0.25}
        mouseForce={30}
        cursorSize={80}
        iterationsPoisson={16}
        iterationsViscous={16}
        autoSpeed={0.3}
        autoIntensity={1.5}
        // Make it a true site-wide background
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        className="pointer-events-none"
      />

      {/* Site content above background */}
      <div className="relative min-h-screen text-white animate-fadeIn">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      {!isLoading && <MainContent />}
    </>
  );
}

export default App;
