import React from "react";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, CreditCard, Award, Building2, GraduationCap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: GraduationCap, value: "8.67 CGPA", label: "MCA Scholar", delay: 0.1 },
    { icon: Award, value: "Top 40", label: "of 1500+ Devs", delay: 0.2 },
    { icon: Building2, value: "3 Companies", label: "Industry Experience", delay: 0.3 },
  ];

  const specialties = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building production-grade web systems with ASP.NET Core and Next.js.",
      delay: 0.4,
    },
    {
      icon: BrainCircuit,
      title: "AI/ML Integration",
      description: "Integrating intelligent features into applications for data automation.",
      delay: 0.5,
    },
    {
      icon: CreditCard,
      title: "Fintech Solutions",
      description: "Experienced in payment workflows, automated billing, and secure tracking.",
      delay: 0.6,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="slide-section bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">02. About Me</span>
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-brand-offwhite leading-tight">
              The Developer Behind the Code
            </h2>
          </div>

          <div className="space-y-4 text-brand-slate text-lg leading-relaxed">
            <p>
              {"I'm "}
              <span className="text-brand-offwhite font-medium">Alwin K G</span>
              {", a backend-focused Software Developer specializing in ASP.NET Core and system design."}
            </p>
            <p>
              My journey is driven by a passion for building real-world applications—from event-driven automation systems to complex financial workflows that handle production-grade volume.
            </p>
            <p>
              With a strong academic background (MCA with Distinction) and hands-on experience in multiple startups and global firms, I bridge the gap between complex logic and seamless user experience.
            </p>
          </div>

          {/* Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-6 flex flex-col items-center text-center space-y-2 group hover:border-brand-cyan/50"
              >
                <stat.icon className="text-brand-cyan mb-2 group-hover:scale-110 transition-transform" size={28} />
                <span className="text-xl font-bold text-brand-offwhite">{stat.value}</span>
                <span className="text-xs text-brand-slate uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Specialties */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-6"
        >
          {specialties.map((specialty, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="glass-card p-8 flex items-start space-x-6 border-l-4 border-l-brand-cyan group"
            >
              <div className="p-4 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-navy transition-colors">
                <specialty.icon size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-offwhite font-grotesk">{specialty.title}</h3>
                <p className="text-brand-slate leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
