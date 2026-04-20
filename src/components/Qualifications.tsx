import React from 'react';
import { motion } from 'framer-motion';

const qualifications = [
  {
    type: 'Education',
    icon: '🎓',
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'Master of Computer Applications (MCA)',
        institution: 'Ilahia College of Engineering & Technology',
        duration: '2023 – 2025',
        grade: 'CGPA: 8.67/10',
        description: 'Specialized in Full-Stack Development, AI/ML, and Software Engineering'
      },
      {
        title: 'Bachelor of Science in Electronics',
        institution: 'Prajyoti Niketan College',
        duration: '2020 – 2023',
        grade: 'CGPA: 6.65/10',
        description: 'Foundation in Electronics and Computer Science fundamentals'
      },
    ],
  },
  {
    type: 'Certifications',
    icon: '🏆',
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'Cloud Computing',
        institution: 'NPTEL Swayam',
        duration: 'Completed',
        grade: 'Certified',
        description: 'Cloud technologies and distributed systems'
      },
      {
        title: 'Top 40 Best Projects',
        institution: 'EY GDS Internship Program',
        duration: 'Feb – Mar 2025',
        grade: 'Certificate of Excellence',
        description: 'Recognized for outstanding performance among 1500+ submissions'
      },
      
    ],
  },
];

const Qualifications = () => {
  return (
    <section id="qualifications" className="slide-section bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full flex flex-col justify-center min-h-screen py-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <span className="text-brand-cyan font-mono text-sm tracking-widest uppercase">03. Qualifications</span>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold text-brand-offwhite">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {qualifications.map((section, sectionIndex) => (
            <motion.div
              key={section.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Category Subheader */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-2xl font-bold font-grotesk text-brand-offwhite uppercase tracking-wider">
                  {section.type}
                </h3>
              </div>

              {/* Items Grid */}
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="glass-card p-6 md:p-8 space-y-4 border-l-4 border-l-brand-cyan group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <h4 className="text-xl font-bold text-brand-offwhite font-grotesk group-hover:text-brand-cyan transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-brand-cyan font-medium">
                          {item.institution}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-mono text-brand-slate uppercase tracking-widest bg-brand-navy/50 px-2 py-1 rounded border border-brand-border/30">
                          {item.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-brand-slate border-t border-brand-border/20 pt-4">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
                        {item.grade}
                      </div>
                    </div>

                    <p className="text-brand-slate text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Summary Stats (Optional but themed) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-brand-cyan">8.67</div>
            <div className="text-[10px] text-brand-slate uppercase tracking-widest">MCA CGPA</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-brand-cyan">Top 40</div>
            <div className="text-[10px] text-brand-slate uppercase tracking-widest">Global Ranking</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-brand-cyan">4+</div>
            <div className="text-[10px] text-brand-slate uppercase tracking-widest">Global Certs</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-2xl font-bold text-brand-cyan">Distinction</div>
            <div className="text-[10px] text-brand-slate uppercase tracking-widest">Academic Status</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;
