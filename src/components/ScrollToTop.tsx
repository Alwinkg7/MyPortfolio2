// src/components/ScrollToTop.tsx
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faICursor } from "@fortawesome/free-solid-svg-icons";
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow hover:bg-blue-700 transition"
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faICursor} className="w-4 h-4" />
    </button>
  );
};

export default ScrollToTop;
