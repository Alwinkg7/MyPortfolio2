import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../assets/portfolio1.jpg";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 bg-white text-gray-800 text-center md:text-left">
      
      {/* Text Content */}
      <div className="md:flex-1 max-w-2xl md:pl-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base text-blue-500 font-medium mb-1"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3"
        >
          Alwin K G.
        </motion.h1>

        <TypeAnimation
          sequence={[
            "I build AI-powered web solutions",
            2000,
            "I develop machine learning projects",
            2000,
            "I create full-stack applications",
            2000,
          ]}
          wrapper="h2"
          cursor
          repeat={Infinity}
          className="text-lg sm:text-xl text-blue-600 mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm sm:text-base text-gray-600 mb-6"
        >
          MCA graduate skilled in Python, Django, MERN, DOT NET, SQL and Machine Learning.
          I build impactful full-stack applications with a passion for tech.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center md:justify-start gap-4">
          <motion.a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1m8omneLScAOxpLx-yXFcMKW862Cpziq7/view?usp=drive_link"
            download
            className="inline-block bg-gray-200 text-gray-800 px-5 py-2.5 rounded-md text-sm font-semibold shadow hover:bg-gray-300 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="md:flex-1 flex justify-center"
      >
        <img
          src={profilePic}
          alt="Alwin K G"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-md border-4 border-blue-200"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
