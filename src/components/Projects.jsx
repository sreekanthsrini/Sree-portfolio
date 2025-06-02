import React from "react";
import foodimg from "../assets/foodimg.jpg";
import employee from "../assets/employee.jpg";
import Ecommerce from "../assets/Ecommerce.jpg";

const projects = [
  {
    id: 1,
    name: "FOOD-ONLINE APP",
    technologies: "REACT - FRONTEND",
    image: foodimg,
    github: "https://github.com/sreekanthsrini/React-complete/tree/main/food-court-react",
    live: "https://fc-react-kappa.vercel.app/", 
  },
  {
    id: 2,
    name: "EMPLOYEE MANAGEMENT",
    technologies: "FULLSTACK - SPRING MVC",
    image: employee,
    github: "https://github.com/sreekanthsrini/AOP_SPRINGMVC_EMPLOYEE-MANAGEMENT.git",
    live: "https://employee-management-live.vercel.app/", // Replace with your actual live link
  },
  {
    id: 3,
    name: "E-COMMERCE SECURITY",
    technologies: "FULLSTACK - SPRING SECURITY",
    image: Ecommerce,
    github: "https://github.com/sreekanthsrini/spring-thymelaef-project2.git",
    live: "https://ecommerce-security-live.vercel.app/", // Replace with your actual live link
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-xl hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition hover:opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition hover:opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
