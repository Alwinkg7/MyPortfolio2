import { motion } from 'framer-motion';

// Sorted from most recent to oldest
const experiences = [
  {
    id: 3,
    company: 'Voleergo Solutions (On-Site - Kochi, Kerala, India)',
    role: 'Software Developer Trainee',
    date: 'June 2025 – Present',
    achievements: [
      'Developed skills in PL/SQL, Next.js and ASP.NET',
      'Working on real-time web applications using ASP.NET API Core and Next.js',
      'Improving system reliability and performance',
      'Collaborating with senior developers to enhance coding practices',],
  },
  {
    id: 2,
    company:
      'Calanjiyam Consultancies and Technology (Remote - Chennai/Tamil Nadu/Kerala)',
    role: 'Web Development Intern',
    date: 'May 2025 – Present',
    achievements: [
      'Developed skills in React, MySQL, and PHP development',
      'Contributed to front-end development using React and Tailwind CSS',
      'Collaborated remotely with cross-functional teams',
      'Enhanced component reusability and performance',
    ],
  },
  {
    id: 1,
    company: 'EY GDS (Ernst & Young)',
    role: 'Full Stack Web Development Intern',
    date: 'Feb 2025 – Mar 2025',
    achievements: [
      'Achieved certificate for Top 40 Best Projects selected from 1500+ submissions',
      'Gained expertise in AI tools and UI/UX design principles',
      'Developed skills in MERN stack',
      'Presented prototypes to EY experts',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-white text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Professional Experience
        </h2>

        <div className="space-y-10 relative border-l-2 border-blue-300 pl-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: exp.id * 0.1 }}
              className="relative pl-4"
            >
              {/* Dot */}
              <div className="absolute -left-[11px] top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow" />
              <div className="bg-gray-50 p-6 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.company}
                </h3>
                <p className="text-blue-600 font-medium">{exp.role}</p>
                <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
