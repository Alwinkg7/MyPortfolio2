import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800 flex items-center justify-center"
    >
      <div className="max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p>
            I'm <span className="font-semibold text-blue-600">Alwin K G</span>, an MCA graduate with hands-on experience in <span className="font-medium text-purple-600">Full-Stack Development, AI/ML, and Fintech solutions</span>. I specialize in building scalable, dynamic, and AI-powered web applications that solve real-world problems.
          </p>
          
          <p>
            Skilled in <span className="font-medium text-blue-500">Python (Django), ASP.NET Core Web API, Next.js, React, SQL Server, and MongoDB</span>, I have proven ability to work across frontend, backend, and databases. I've delivered real-world projects such as e-commerce platforms, financial management systems, and academic solutions.
          </p>
          
          <p>
            My strong problem-solving, teamwork, and leadership abilities have been demonstrated through internships, client projects, and academic initiatives. I'm passionate about leveraging technology to create innovative solutions that make a meaningful impact.
          </p>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-semibold text-blue-600 mb-2">Full-Stack Development</h3>
              <p className="text-sm text-gray-600">End-to-end web application development with modern frameworks</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-semibold text-purple-600 mb-2">AI/ML Integration</h3>
              <p className="text-sm text-gray-600">Building intelligent applications with machine learning capabilities</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="font-semibold text-green-600 mb-2">Fintech Solutions</h3>
              <p className="text-sm text-gray-600">Specialized in financial technology and payment systems</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
