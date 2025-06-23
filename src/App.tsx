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
import { motion } from 'framer-motion';

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1): any => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};


function App() {
  return (
    <div className="scroll-smooth font-sans text-gray-800">
      <Header />
      <main className="pt-32 space-y-24">
        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <Hero />
        </motion.div>

        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <About />
        </motion.div>

        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <Qualifications />
        </motion.div>

        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <Experience />
        </motion.div>

        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <TechStack />
        </motion.div>


        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <Projects />
        </motion.div>

        <motion.div variants={fadeVariant} initial="hidden" custom={1} whileInView="visible" viewport={{ once: true }}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
      <ScrollToTop />

    </div>
  );
}

export default App;
