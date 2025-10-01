import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "about", label: "About" },
    { name: "qualifications", label: "Education" },
    { name: "experience", label: "Experience" },
    { name: "techstack", label: "Skills" },
    { name: "projects", label: "Projects" },
    { name: "contact", label: "Contact" }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-transparent'
      } px-6 py-4 flex items-center justify-between md:px-10`}
    >
      <motion.div 
        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        whileHover={{ scale: 1.05 }}
      >
        Alwin K G
      </motion.div>

      {/* Desktop Nav */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-8 text-gray-700 font-medium text-sm">
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group"
            >
              <a 
                href={`#${item.name}`} 
                className="relative px-3 py-2 hover:text-blue-600 transition-colors duration-300"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="hidden lg:flex space-x-4">
        <motion.a
          href="https://github.com/Alwinkg7"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/alwin-k-g-b60442253/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </motion.a>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="w-5 h-5" />
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20 mt-2 py-6 px-6 flex flex-col space-y-4 lg:hidden"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100 last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-gray-200">
              <motion.a
                href="https://github.com/Alwinkg7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/alwin-k-g-b60442253/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
