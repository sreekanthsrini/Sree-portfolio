import React from "react";
import { FaGraduationCap, FaLaptopCode, FaSchool } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-cyan-400">About</span> <span className="text-white">Me</span>
        </h2>
      <p className="text-lg mb-12 text-center text-gray-300 max-w-3xl mx-auto">
  <span className="text-cyan-400 font-semibold">Motivated Full Stack Java and React Developer</span> seeking an 
  <span className="text-cyan-400 font-semibold"> internship</span> to build 
  <span className="text-cyan-400 font-semibold"> web apps</span>. Skilled in 
  <span className="text-cyan-400 font-semibold"> RESTful APIs</span>, 
  <span className="text-cyan-400 font-semibold"> front-end & back-end integration</span>, eager to learn and contribute to 
  <span className="text-cyan-400 font-semibold"> impactful projects</span>.
</p>

        <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* UG Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-cyan-400 text-3xl">
              <FaGraduationCap />
            </div>
            <h4 className="text-xl font-bold">Bachelor of COMPUTER SCIENCE AND ENGINEERING</h4>
            <p className="mt-2 text-gray-400">SNS COLLEGE OF TECHNOLOGY</p>
            <p className="mt-1 text-cyan-400">8.8 CGPA | 2022 - 2026</p>
          </div>

          {/* Diploma Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-cyan-400 text-3xl">
              <FaLaptopCode />
            </div>
            <h4 className="text-xl font-bold">HIGHER SECONDARY CERTIFICATE 12th</h4>
            <p className="mt-2 text-gray-400">RGM HIGHER  SCHOOL PETHAPPAMPATTI</p>
            <p className="mt-1 text-cyan-400">84% | 20221 - 2022</p>
          </div>

          {/* SSLC Card */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4 text-cyan-400 text-3xl">
              <FaSchool />
            </div>
            <h4 className="text-xl font-bold">Board of Secondary Education</h4>
            <p className="mt-2 text-gray-400">RGM HIGHER SECONDARY SCHOOL PETHAPPAMPATTI</p>
            <p className="mt-1 text-cyan-400">83% | 2019 - 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
