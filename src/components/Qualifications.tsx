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
        title: 'Python Essentials 1',
        institution: 'Cisco Networking Academy',
        duration: 'Completed',
        grade: 'Certified',
        description: 'Fundamental Python programming and development practices'
      },
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
      {
        title: 'Full Stack Web Development',
        institution: 'EY GDS with Edunet Foundation and AICTE',
        duration: 'Feb – Mar 2025',
        grade: 'Certificate of Completion',
        description: 'MERN stack development and AI tools integration'
      },
    ],
  },
];

const Qualifications = () => {
  return (
    <section
      id="qualifications"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Education & Certifications
        </motion.h2>

        <div className="space-y-16">
          {qualifications.map((section, sectionIndex) => (
            <motion.div
              key={section.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="space-y-8"
            >
              {/* Section Header */}
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex items-center gap-3 mb-4"
                >
                  <span className="text-4xl">{section.icon}</span>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {section.type}
                  </h3>
                </motion.div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10 p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-lg font-semibold text-blue-600 mb-1">
                            {item.institution}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              📅 {item.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              🎯 {item.grade}
                            </span>
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                        >
                          {section.icon}
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-600 mb-2">8.67</div>
            <div className="text-gray-600">MCA CGPA</div>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-600 mb-2">Top 40</div>
            <div className="text-gray-600">EY GDS Recognition</div>
          </div>
          
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;
