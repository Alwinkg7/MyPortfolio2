import { motion } from 'framer-motion';
import { projects } from './constants/projectData';

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600 text-2xl">
                  📁
                </div>
                <div className="flex space-x-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 text-gray-600 text-xl"
                    aria-label="GitHub"
                  >
                    🔗
                  </a>
                  {/* {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-600 text-gray-600 text-xl"
                      aria-label="Live Site"
                    >
                      🌐
                    </a>
                  )} */}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <ul className="flex flex-wrap gap-2 text-sm text-gray-500 font-medium">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gray-100 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
