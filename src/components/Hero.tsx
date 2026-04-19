import React, { useState, useEffect, useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { TextureLoader } from "three";

// Interactive 3D Sphere for the Hero Right Side
const InteractiveSphere = () => {
  const texture = useLoader(TextureLoader, "/portfolio1.jpg");
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.mouse.y * 0.2;
      meshRef.current.rotation.y = state.mouse.x * 0.2;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
        <MeshDistortMaterial
          map={texture}
          color="#38BDF8"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

// Text Scramble Effect Component
const ScrambleText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < frame / 3) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      frame++;
      if (frame > text.length * 3) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="slide-section overflow-hidden bg-glow-radial">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center h-full">

        {/* Left Content (60%) */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>✦ Available for Opportunities</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-brand-slate font-grotesk font-medium">
              Hi, I'm
            </h2>
            <h1 className="text-6xl md:text-8xl font-grotesk font-extrabold text-brand-offwhite leading-none">
              <span className="text-brand-cyan text-glow-cyan">
                <ScrambleText text="Alwin K G" />
              </span>
            </h1>
            <p className="text-brand-slate text-lg md:text-xl font-medium flex items-center flex-wrap gap-2">
              Full Stack Developer
              <span className="text-brand-cyan font-bold mx-1">·</span> React
              <span className="text-brand-cyan font-bold mx-1">·</span> .NET
              <span className="text-brand-cyan font-bold mx-1">·</span> Python
            </p>
          </div>

          <p className="text-brand-slate text-lg leading-relaxed max-w-xl">
            MCA graduate building production-grade web apps —
            from AI-powered fintech platforms to scalable e-commerce systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="btn-primary group">
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Kv8kODWcBlOgKPSxNdncifvR-6aGA2-O/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-6 text-brand-slate">
            <a href="https://github.com/Alwinkg7" target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/alwin-k-g" target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alwinkgofficial@gmail.com" className="hover:text-brand-cyan transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        {/* Right Content (40%) - 3D Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square w-full max-w-[500px] mx-auto lg:mx-0"
        >
          {/* 3D Canvas - Only rendered on client to prevent SSR mismatch/reloads */}
          <div className="absolute inset-0 z-0">
            {mounted && (
              <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Suspense fallback={null}>
                  <InteractiveSphere />
                </Suspense>
              </Canvas>
            )}
          </div>

          {/* Frame/Badge Overlay */}
          <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
            <div className="w-full h-full border-2 border-brand-cyan/20 rounded-3xl relative backdrop-blur-[2px]">
              {/* Dot Matrix BG pattern inside frame */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(#38BDF8 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }}
              />
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(#38BDF8 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }}
              />
              <img src="/portfolio1.jpg" alt="" className="w-full h-full object-cover rounded-3xl opacity-50 transition-opacity hover:opacity-100" />
              
              {/* Floating Exp Badge - Moved here to ensure it's on top of the image */}
              <div className="absolute -top-4 -right-4 z-20 bg-brand-surface border border-brand-cyan/50 px-4 py-2 rounded-full text-brand-cyan font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <ScrambleText text="1 Yr Exp" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-cyan opacity-50 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
