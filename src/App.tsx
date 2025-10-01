// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TechStack from './components/TechStack';
// import { motion } from 'framer-motion'; // Unused import removed

function App() {
  return (
    <div className="scroll-smooth font-sans text-gray-800 overflow-x-hidden">
      <Header />
      <main className="relative">
        {/* Hero Section - Full height */}
        <Hero />
        
        {/* Other Sections */}
        <About />
        <Qualifications />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
