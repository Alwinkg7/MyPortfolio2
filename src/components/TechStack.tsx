import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiPython,
  SiDotnet, SiDjango, SiNodedotjs, SiExpress,
  SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiCss,
  SiMysql, SiMongodb, SiTailwindcss, SiChakraui, SiMui, SiBootstrap,
  SiGit, SiPostman, SiVercel, SiRender, SiPostgresql
} from "react-icons/si";
import { IoServer } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface Category {
  title: string;
  skills: Skill[];
}

const TechStack = () => {
  const categories: Category[] = [
    {
      title: "Languages",
      skills: [
        { name: "C#", icon: SiDotnet },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Python", icon: SiPython },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: ".NET Core", icon: SiDotnet },
        { name: "Django", icon: SiDjango },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: SiCss },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "SQL Server", icon: IoServer },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PL/SQL", icon: IoServer },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      title: "UI Frameworks",
      skills: [
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Chakra UI", icon: SiChakraui },
        { name: "Material UI", icon: SiMui },
        { name: "Bootstrap", icon: SiBootstrap },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "Postman", icon: SiPostman },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
        { name: "IIS", icon: FaMicrosoft },
      ],
    },
  ];

  const stats = [
    { value: "3+ Languages", label: "Foundation" },
    { value: "8+ Web Tech", label: "Stack" },
    { value: "6+ Frameworks", label: "UI Tools" },
  ];

  return (
    <section id="skills" className="slide-section bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col justify-center min-h-screen py-20">

        <div className="space-y-4 mb-12">
          <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">04. Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-brand-offwhite">
            Tools I Build With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-brand-slate text-sm font-mono uppercase tracking-widest flex items-center">
                {cat.title}
                <div className="h-px bg-brand-border/30 flex-1 ml-4" />
              </h3>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 px-3 py-2 glass-card hover:border-brand-cyan/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] group cursor-default transition-all duration-300"
                  >
                    {React.createElement(skill.icon, { 
                      className: "text-brand-slate group-hover:text-brand-cyan transition-colors", 
                      size: 18 
                    })}
                    <span className="text-sm font-medium text-brand-offwhite">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-8 border-t border-brand-border/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span className="text-3xl font-bold font-grotesk text-brand-cyan">{stat.value}</span>
              <span className="text-sm text-brand-slate uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
