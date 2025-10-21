import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Qualifications from '../src/components/Qualifications';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import ScrollToTop from '../src/components/ScrollToTop';
import TechStack from '../src/components/TechStack';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alwin K G - Full Stack Developer & Software Engineer Portfolio</title>
        <meta name="description" content="Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my portfolio showcasing web applications, mobile apps, and software solutions." />
        <meta name="keywords" content="Full Stack Developer, React Developer, Node.js Developer, TypeScript, JavaScript, Web Developer, Software Engineer, Frontend Developer, Backend Developer, Portfolio, Web Applications, Mobile Apps, Software Development, Next.js, Express.js, MongoDB, PostgreSQL, AWS, Docker, Git, Agile Development" />
        
        {/* Additional page-specific meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        
        {/* Open Graph for this specific page */}
        <meta property="og:title" content="Alwin K G - Full Stack Developer Portfolio" />
        <meta property="og:description" content="Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my portfolio showcasing web applications, mobile apps, and software solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alwinkg.dev" />
        <meta property="og:image" content="https://alwinkg.dev/portfolio1.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alwin K G - Full Stack Developer Portfolio" />
        <meta name="twitter:description" content="Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and modern web technologies. View my portfolio showcasing web applications, mobile apps, and software solutions." />
        <meta name="twitter:image" content="https://alwinkg.dev/portfolio1.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://alwinkg.dev" />
      </Head>
      
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
    </>
  );
}
