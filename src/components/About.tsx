import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 min-h-screen px-6 py-20 bg-gray-50 text-gray-800 flex items-center justify-center"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm <span className="font-semibold">Alwin K G</span>, a passionate software developer with a solid foundation in Software development and a Master's degree in Computer Applications. I specialize in building scalable, modern web applications that solve real-world problems.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I have hands-on experience in technologies like <span className="font-medium text-blue-500">MERN Stack (MongoDB, Express.js, React, Node.js)</span>, <span className="font-medium text-blue-500">Python & Django</span> full-stack development, <span className="font-medium text-blue-500">.NET</span> application development, and <span className="font-medium text-blue-500">SQL</span> for robust database management.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          I’m always curious to learn more, stay updated with tech trends, and improve my skill set. Outside of development, I enjoy dancing and playing football to stay active and creative.
        </p>
      </div>
    </section>
  );
}

export default About;
