import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white text-gray-800 flex items-center justify-center"
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Contact Me</h2>
        <p className="text-lg mb-10">
          Have a project or opportunity in mind? Let's connect!
        </p>

        <a
          href="mailto:alwinkgofficial@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold inline-block"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
