import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "skills", "experience", "projects", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "about", label: "About" },
    { name: "skills", label: "Skills" },
    { name: "experience", label: "Experience" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-6 py-4 md:px-10",
        scrolled ? "glass-nav py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="w-20 h-10 border-2 border-brand-cyan rounded-lg flex items-center justify-center font-grotesk font-bold text-brand-cyan relative overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            <span className="z-10">Alwin K G</span>
            <motion.div
              className="absolute inset-0 bg-brand-cyan/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name}`}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors relative group",
                activeSection === item.name ? "text-brand-cyan" : "text-brand-slate hover:text-brand-offwhite"
              )}
            >
              {item.label}
              {activeSection === item.name && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-cyan rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-success/30 bg-brand-success/10 text-brand-success text-[10px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
            <span>Open to Work</span>
          </div>

          <div className="hidden md:flex items-center space-x-3 ml-2 border-l border-brand-border/30 pl-4">
            <a href="https://github.com/Alwinkg7" target="_blank" rel="noreferrer" className="text-brand-slate hover:text-brand-cyan transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/alwin-k-g" target="_blank" rel="noreferrer" className="text-brand-slate hover:text-brand-cyan transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-brand-offwhite"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-brand-navy/95 backdrop-blur-xl border-b border-brand-border/20"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name}`}
                  className="text-2xl font-grotesk font-bold text-brand-offwhite hover:text-brand-cyan transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6 border-t border-brand-border/20 flex space-x-6">
                <a href="https://github.com/Alwinkg7" className="text-brand-slate hover:text-brand-cyan">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/alwin-k-g" className="text-brand-slate hover:text-brand-cyan">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
