import React from "react";
import { motion } from "framer-motion";
import vp from "../assets/acheivements/vp.jpg"
import orgevent  from "../assets/acheivements/orgevent.jpg"
import project from "../assets/acheivements/project.jpg"
import problemsolve from "../assets/acheivements/lc.jpg"
import certificate from "../assets/acheivements/certificate.jpg"
import attenevent from "../assets/acheivements/attenevent.jpg"



const achievements = [
  {
    title: "Vice President of Regex Club",
    description: "Led initiatives and inspired innovation as the Vice President of the technical club.",
    image: vp, // Add your image in /public/achievements
  },
  {
    title: "Organized 2 Major College Events",
    description: "Successfully planned and executed large-scale tech events with high student participation.",
    image: orgevent,
  },
  {
    title: "Presented 10+ Projects",
    description: "Displayed technical skills by presenting 10+ full-stack and React-based projects.",
    image: project,
  },
  {
    title: "Solved 150+ DSA Problems",
    description: "Solved complex coding problems on HackerRank and LeetCode.",
    image: problemsolve,
  },
  {
    title: "Earned 50+ Certificates",
    description: "Completed multiple online courses in tech domains and received certifications.",
    image: certificate,
  },
  {
    title: " 5+Workshops & 20+College Events",
    description: "Actively participated in workshops, bootcamps, and coding competitions.",
    image: attenevent,
  },
];

const Achievements = () => {
  return (
    <div className="bg-black text-white py-16 px-6" id="achievements">
      <h2 className="text-4xl font-bold text-center mb-12">My Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
