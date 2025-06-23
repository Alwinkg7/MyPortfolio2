import React from 'react';

const qualifications = [
  {
    type: 'Education',
    items: [
      {
        title: 'MCA (2023 – 2025)',
        institution: 'Ilahia College of Engineering and Technology, Muvattupuzha',
      },
      {
        title: 'B.Sc. Electronics (2020 – 2023)',
        institution: 'Prajyoti Niketan College, Pudukad',
      },
    ],
  },
  {
    type: 'Certifications',
    items: [
      {
        title: 'Cloud Computing',
        institution: 'NPTEL SWAYAM',
      },
      {
        title: 'Python Essentials',
        institution: 'Cisco',
      },
      {
        title: '6-week MERN Internship',
        institution: 'EY GDS NextGen Program',
      },
      {
        title: 'Top 40 Projects merit certificate',
        institution: 'EY GDS NextGen Program',
      },
    ],
  },
];

const Qualifications = () => {
  return (
    <section
      id="qualifications"
      className="min-h-screen px-6 py-20 bg-white text-gray-800 flex items-center justify-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">Qualifications & Certifications</h2>

        {qualifications.map((section) => (
          <div key={section.type} className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b pb-1 border-blue-300">{section.type}</h3>
            <ul className="space-y-4">
              {section.items.map((item, index) => (
                <li key={index}>
                  <p className="text-lg font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.institution}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;
