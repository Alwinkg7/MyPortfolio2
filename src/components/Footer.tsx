// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Alwin K G. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/Alwinkg7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alwin-k-g-b60442253/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
