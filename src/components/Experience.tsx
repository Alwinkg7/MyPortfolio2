import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    company: "Voleergo Solutions LLP",
    role: "Software Developer",
    location: "On-site · Kochi",
    date: "Jun 2025 – Present",
    bullets: [
      "Designed and developed scalable backend systems using ASP.NET Core Web API for real-world applications.",
      "Built authentication, payment integration, and automation workflows used in production environments.",
      "Implemented optimized SQL Server stored procedures for business logic and high-performance data handling.",
      "Mentored interns on API development and clean coding practices.",
    ],
    tags: ["Voleergo Academy", "E-commerce", "Walking Trees", "Shopify Store with WhatsApp Automation System", "Role Management System"],
  },
  {
    company: "Calanjiyum Consultancies",
    role: "Web Development Intern",
    location: "Remote",
    date: "May – Aug 2025",
    bullets: [
      "Contributed to Formly, a feedback analytics application using PHP, React, and MySQL.",
      "Worked in an agile setup delivering features within short timelines.",
    ],
    tags: ["Formly"],
  },
  {
    company: "EY GDS with Edunet Foundation",
    role: "Full Stack Intern",
    location: "Remote",
    date: "Feb – Mar 2025",
    bullets: [
      "Developed a MERN-based financial application selected among Top 40 projects.",
      "Improved UI and usability through iterative feedback.",
    ],
    highlight: "🏆 Top 40 / 1500+ Submissions",
    tags: ["FinBridge"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="slide-section bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col justify-center min-h-screen py-20">
        
        <div className="space-y-4 mb-16">
          <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">05. Experience</span>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-brand-offwhite">
            {"Where I've Worked"}
          </h2>
        </div>

        <div className="relative border-l-2 border-brand-border/30 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-navy border-2 border-brand-cyan shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
                {/* Meta info */}
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                    {exp.date}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold font-grotesk text-brand-offwhite">{exp.role}</h3>
                    <p className="text-brand-cyan font-medium flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </p>
                    <p className="text-brand-slate text-sm flex items-center">
                      <MapPin size={14} className="mr-2" />
                      {exp.location}
                    </p>
                  </div>

                  {exp.highlight && (
                    <div className="p-3 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-sm font-bold">
                      {exp.highlight}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="glass-card p-6 md:p-8 space-y-6">
                  <ul className="space-y-4">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-brand-slate leading-relaxed">
                        <ArrowRight size={16} className="text-brand-cyan mr-3 mt-1 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-brand-navy border border-brand-border/50 text-brand-slate text-[10px] font-mono rounded hover:border-brand-cyan/30 hover:text-brand-cyan transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
