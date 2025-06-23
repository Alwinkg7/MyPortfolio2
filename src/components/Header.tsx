import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between md:px-10">
      <div className="text-2xl font-bold text-gray-900">Alwin K G</div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-gray-700 font-semibold text-base">
          {["about", "experience", "projects", "contact"].map((item) => (
            <li key={item} className="hover:text-blue-600 transition">
              <a href={`#${item}`} className="capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="hidden md:flex space-x-4 text-gray-700">
        <a
          href="https://github.com/Alwinkg7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/alwin-k-g-b60442253/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-gray-700 text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 py-4 px-6 flex flex-col space-y-4 md:hidden">
          {["about", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-700 font-medium hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <div className="flex space-x-4 pt-2 border-t pt-4">
            <a
              href="https://github.com/Alwinkg7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/alwin-k-g-b60442253/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
