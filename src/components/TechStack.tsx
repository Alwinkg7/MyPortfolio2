import {
  faReact,
  faPython,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faServer, faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const techStack = [
  { name: "Python", icon: faPython, category: "Programming Languages" },
  { name: "JavaScript", icon: faCode, category: "Programming Languages" },
  { name: "React", icon: faReact, category: "Web Development" },
  { name: "Next.js", icon: faReact, category: "Web Development" },
  { name: "Node.js", icon: faNodeJs, category: "Web Development" },
  { name: "Express.js", icon: faServer, category: "Web Development" },
  { name: "Django", icon: faServer, category: "Web Development" },
  { name: "ASP.NET Core", icon: faCode, category: "Web Development" },
  { name: "HTML", icon: faHtml5, category: "Web Development" },
  { name: "CSS", icon: faCss3Alt, category: "Web Development" },
  { name: "MySQL", icon: faDatabase, category: "Database" },
  { name: "MongoDB", icon: faDatabase, category: "Database" },
  { name: "SQL Server", icon: faDatabase, category: "Database" },
  { name: "Tailwind CSS", icon: faCss3Alt, category: "UI Frameworks" },
  { name: "Chakra UI", icon: faCss3Alt, category: "UI Frameworks" },
  { name: "Material UI", icon: faCss3Alt, category: "UI Frameworks" },
  { name: "Lightswind UI", icon: faCss3Alt, category: "UI Frameworks" },
  { name: "Bootstrap", icon: faCss3Alt, category: "UI Frameworks" },
  { name: "Git", icon: faGitAlt, category: "Tools" },
  { name: "Postman", icon: faCode, category: "Tools" },
  { name: "VS Code", icon: faCode, category: "Tools" },
  { name: "Cursor AI", icon: faRobot, category: "Tools" },
  { name: "Visual Basic", icon: faCode, category: "Tools" },
];

const TechStack = () => {
  const categories = Array.from(new Set(techStack.map(tech => tech.category)));
  
  return (
    <section id="techstack" className="px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-center text-cyan-300 mb-8">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techStack
                  .filter(tech => tech.category === category)
                  .map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: (categoryIndex * 0.1) + (techIndex * 0.05) 
                      }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        rotateY: 5
                      }}
                      className="group relative"
                    >
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer">
                        <div className="flex flex-col items-center space-y-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl text-cyan-400 group-hover:text-cyan-300 transition-colors"
                          >
                            <FontAwesomeIcon icon={tech.icon} />
                          </motion.div>
                          <span className="text-sm font-medium text-center text-gray-200 group-hover:text-white transition-colors">
                            {tech.name}
                          </span>
                        </div>
                        
                        {/* Hover Effect */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              {techStack.filter(tech => tech.category === "Programming Languages").length}+
            </div>
            <div className="text-gray-300">Programming Languages</div>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {techStack.filter(tech => tech.category === "Web Development").length}+
            </div>
            <div className="text-gray-300">Web Technologies</div>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {techStack.filter(tech => tech.category === "UI Frameworks").length}+
            </div>
            <div className="text-gray-300">UI Frameworks</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
