import { motion } from 'framer-motion';

// Sorted from most recent to oldest
const experiences = [
  {
    id: 3,
    company: 'Voleergo Solutions LLP',
    location: 'On-site | Kochi, Kerala, India',
    role: 'Software Developer',
    date: 'Jun 2025 – Present',
    achievements: [
      'Working on both frontend and backend development, along with database management',
      'Building dynamic projects using ASP.NET Core Web API, Next.js, and SQL Server (SSMS)',
      'Collaborated as part of the development team on projects such as Voleergo Academy, E-commerce Website, and Kayaking Business Website',
      'Enhancing system reliability and performance through modern development practices',
    ],
    projects: [
      {
        name: 'Voleergo Academy',
        link: 'https://voleergoacademy.com/',
        description: 'Educational platform'
      },
      {
        name: 'E-commerce Website',
        link: 'https://ecommerceqa.voleergo.com/website/home',
        description: 'Online shopping platform (Development)'
      },
      {
        name: 'Kayaking Business Website',
        link: 'https://walkingtrees.in/',
        description: 'Adventure tourism platform (Development)'
      }
    ]
  },
  {
    id: 2,
    company: 'Calanjiyum Consultancies And Technology',
    location: 'Remote',
    role: 'Web Development Intern',
    date: 'May 2025 – Aug 2025',
    achievements: [
      'Developed a feedback system called Formly using PHP, React.JS, and MySQL',
      'Built a module to display result analytics, handling frontend, backend, and database implementation',
      'Collaborated in a team of 4 to deliver project milestones',
      'Enhanced system functionality and user experience',
    ],
    projects: [
      {
        name: 'Formly',
        link: 'https://formly1.vercel.app/',
        description: 'Feedback system with analytics'
      }
    ]
  },
  {
    id: 1,
    company: 'EY GDS (Ernst & Young – Global Delivery Services)',
    location: 'with Edunet Foundation and AICTE',
    role: 'Full Stack Web Development Intern',
    date: 'Feb 2025 – Mar 2025',
    achievements: [
      'Gained expertise in AI tools, UI/UX design principles, and full-stack web development using the MERN stack (MongoDB, Express.js, React, Node.js)',
      'Recognized for developing one of the top 40 best projects, earning a certificate of excellence',
      'Built and presented project prototypes to EY experts, refining solutions based on feedback',
      'Applied industry best practices in full-stack development',
    ],
    projects: [
      {
        name: 'FinBridge',
        link: 'https://finbridge-beta.vercel.app/guesthome/',
        description: 'AI-powered financial management application'
      }
    ]
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center mb-16"
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-12 relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10" />
              
              <div className="lg:ml-20">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
                >
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold mb-1">
                        {exp.role}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        {exp.location}
                      </p>
                      <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          <span className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2"></span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Notable Projects
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.projects.map((project, i) => (
                          <motion.a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-200 hover:border-blue-300 transition-all duration-300"
                          >
                            <h5 className="font-semibold text-blue-800 group-hover:text-blue-900 transition-colors">
                              {project.name}
                            </h5>
                            <p className="text-sm text-gray-600 mt-1">
                              {project.description}
                            </p>
                            <div className="flex items-center mt-2 text-blue-600 text-sm">
                              <span>View Project</span>
                              <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="ml-2"
                              >
                                →
                              </motion.span>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
