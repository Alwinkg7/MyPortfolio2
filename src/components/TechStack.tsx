import {
  faReact,
  faPython,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const techStack = [
  { name: "React", icon: faReact },
  { name: "Python", icon: faPython },
  { name: "Django", icon: faServer },
  { name: "Node.js", icon: faNodeJs },
  { name: "MongoDB", icon: faDatabase },
  { name: "ASP.NET", icon: faCode },
  { name: "React Native", icon: faReact },
  { name: "Tailwind CSS", icon: faCss3Alt },
  { name: "Git", icon: faGitAlt },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "REST APIs", icon: faServer },
  { name: "PL/SQL", icon: faDatabase },
];

const TechStack = () => (
  <section id="techstack" className="px-6 py-20 bg-gray-50 text-gray-800">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-10">Tech Stack</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center space-x-2 bg-white px-4 py-3 rounded-md shadow hover:shadow-md transition"
          >
            <FontAwesomeIcon
              icon={tech.icon}
              className="text-blue-600 w-5 h-5"
            />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
