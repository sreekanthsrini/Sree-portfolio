import React from "react";
import { FaCode, FaTools, FaLaptop, FaLightbulb } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-cyan-400">My</span> <span className="text-white">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Programming Skills */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-cyan-400 text-2xl font-semibold gap-2">
              <FaCode />
              Programming Skills
            </div>
            <ul className="text-gray-300 ml-2 list-disc pl-4 space-y-1">
              <li>Java - Core, OOPS, Basics DSA</li>
              <li>Python - Basic</li>
              <li>C - Basic</li>
              <li>HTML5, CSS</li>
              <li>SQL - Database</li>
              <li>JavaScript - Basic</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-cyan-400 text-2xl font-semibold gap-2">
              <FaLaptop />
              Frameworks
            </div>
            <ul className="text-gray-300 ml-2 list-disc pl-4 space-y-1">
              <li>Spring, Spring Boot, Spring MVC (CRUD, Security)</li>
              <li>Hibernate (CRUD, Security)</li>
              <li>React</li>
              <li>Bootstrap, Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-cyan-400 text-2xl font-semibold gap-2">
              <FaTools />
              Tools & Technologies
            </div>
            <ul className="text-gray-300 ml-2 list-disc pl-4 space-y-1">
              <li>Git, GitHub, Postman</li>
              <li>VS Code, IntelliJ IDEA</li>
              <li>Windows, macOS</li>
              <li>Basic FlutterFlow, Firebase</li>
              <li>MS Excel</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4 text-cyan-400 text-2xl font-semibold gap-2">
              <FaLightbulb />
              Soft Skills
            </div>
            <ul className="text-gray-300 ml-2 list-disc pl-4 space-y-1">
              <li>Leadership & Management</li>
              <li>Team Collaboration</li>
              <li>Quick Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
