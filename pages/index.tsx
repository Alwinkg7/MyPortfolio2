import React from "react";
import Head from "next/head";
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Qualifications from "../src/components/Qualifications";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import TechStack from "../src/components/TechStack";
import ScrollToTop from "../src/components/ScrollToTop";

export default function Home() {
  console.log({ Header, Hero, About, Qualifications, Experience, Projects, Contact, Footer, TechStack, ScrollToTop });
  return (
    <div className="bg-brand-navy">
      <Head>
        <title>Alwin K G | Full Stack Developer & ASP.NET Specialist</title>
        <meta
          name="description"
          content="Backend-focused Software Developer specializing in ASP.NET Core, React, and system design. 1 year of professional experience building scalable production systems."
        />
        <meta
          name="keywords"
          content="Alwin K G, Full Stack Developer, ASP.NET Core, .NET Developer, Software Engineer Kochi, React Developer, Next.js, Fintech Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://alwinkg.vercel.app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Alwin K G | Full Stack Developer Portfolio" />
        <meta property="og:description" content="Immersive portfolio of Alwin K G - Software Developer specialized in ASP.NET Core and Full Stack systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alwinkg.vercel.app" />
        <meta property="og:image" content="https://alwinkg.vercel.app/portfolio1.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alwin K G | Full Stack Portfolio" />
        <meta name="twitter:image" content="https://alwinkg.vercel.app/portfolio1.jpg" />
      </Head>

      <div className="relative">
        <Header />
        
        <main>
          {/* Slide Snap Container */}
          <div className="relative">
            <Hero />
            <About />
            <Qualifications />
            <TechStack />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
