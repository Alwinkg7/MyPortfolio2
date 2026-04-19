import React from "react";
import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy border-t border-brand-cyan/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Left: Branding */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-10 border border-brand-cyan/50 rounded flex items-center justify-center font-grotesk font-bold text-brand-cyan">
              Alwin K G
            </div>
            <div>
              <h3 className="text-brand-offwhite font-bold font-grotesk">Alwin K G</h3>
              <p className="text-brand-slate text-xs uppercase tracking-widest">Full Stack Developer</p>
            </div>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-brand-slate hover:text-brand-cyan text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right: Social Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Alwinkg7" target="_blank" rel="noreferrer" className="p-2 glass-card hover:bg-brand-cyan/10 hover:text-brand-cyan">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/alwin-k-g" target="_blank" rel="noreferrer" className="p-2 glass-card hover:bg-brand-cyan/10 hover:text-brand-cyan">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-brand-border/10 text-[10px] text-brand-slate uppercase tracking-[0.2em]">
          <p>© {currentYear} Alwin K G · Built with React & <Heart size={10} className="inline text-brand-cyan mx-0.5" /> </p>
          <p>Based in Kerala, India · Open to Opportunities</p>
          <p className="font-bold text-brand-cyan flex items-center">
            <span className="w-1 h-1 rounded-full bg-brand-cyan mr-2 animate-pulse" />
            Status: Available for hire
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
