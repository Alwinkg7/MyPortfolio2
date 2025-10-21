import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden pt-20 lg:pt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"
      />
      
      {/* Text Content */}
      <div className="lg:flex-1 max-w-2xl lg:pl-12 text-center lg:text-left relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-cyan-400 font-medium tracking-wide"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight"
          >
            Alwin K G.
          </motion.h1>

          <div className="h-16 flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                "I build AI-powered web solutions",
                2000,
                "I develop fintech applications",
                2000,
                "I create full-stack applications",
                2000,
                "I integrate machine learning",
                2000,
              ]}
              wrapper="h2"
              cursor
              repeat={Infinity}
              className="text-xl sm:text-2xl lg:text-3xl text-cyan-300 font-medium"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            MCA graduate with hands-on experience in <span className="text-cyan-400 font-semibold">Full-Stack Development, AI/ML, and Fintech solutions</span>. 
            I specialize in building scalable, dynamic, and AI-powered web applications that solve real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1Tgib633G7D4KK00-vDeHjMlKbP4EzBJo/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-300 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Download Resume
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-sm"
          >
            <a 
              href="https://www.linkedin.com/in/alwin-k-g-b60442253/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Alwinkg7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:alwinkgofficial@gmail.com" 
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Email</span>
            </a>
            <span className="text-gray-400">+91 9633529303</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.8, duration: 1.0 }}
        className="lg:flex-1 flex justify-center relative z-10 mb-8 lg:mb-0"
      >
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1"
          >
            <div className="w-full h-full bg-slate-900 rounded-full"></div>
          </motion.div>
          
          <Image
            src="/portfolio1.jpg"
            alt="Alwin K G"
            width={384}
            height={384}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          />
          
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
