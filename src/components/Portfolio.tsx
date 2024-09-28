"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import group from "../assets/group.jpg";
import restaurant from "../assets/moksha.png";
import task from "../assets/task.png";
import game from "../assets/game.png";

const projects = [
  {
    title: "Restaurant Reservation Application",
    desc: "This application allows customers to make reservations at Moksha Restaurant through a user-friendly interface. The backend server handles reservation requests and stores the information in a MongoDB database.",
    devStack: "MongoDB, Express, React, Node.js",
    git: "https://github.com/Oshadhie/Moksha-Restaurant",
    src: restaurant,
  },
  {
    title: "Cloud Kitchen Management System",
    desc: "Implemented 8 business functions, including order processing, supplier management, and inventory management. Developed search functions, filter capabilities, and report generation features for application. Collaborated with a team of 6 developers using Agile methodology, GitHub, and Trello.",
    devStack: "MongoDB, Express, React, Node.js",
    git: "https://github.com/savindusihilel/hearthily",
    src: group,
  },
  {
    title: "Task Manager Mobile Application",
    desc: "Task Trackr is a simple yet powerful task management app designed to help users organize their daily tasks efficiently. With Task Trackr, users can easily add, update, and delete tasks, ensuring nothing falls through the cracks. Task management is a snap with the app's clear and simple design.",
    devStack: "Kotlin",
    git: "https://github.com/Oshadhie/Task_Trackr",
    src: task,
  },
  {
    title: "Android Mobile Game",
    desc: "An exciting mobile game where players navigate a spaceship through a meteor shower in space. Move the spaceship left or right to avoid collisions while navigating through falling meteors at increasing speeds. There are Scoring System, High Score Tracking and Media Player for playing sounds.",
    devStack: "Kotlin",
    git: "https://github.com/Oshadhie/Riding-Space-Ship",
    src: game,
  },
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
      <h1 className="text-white text-6xl max-w-[420px] mx-auto font-semibold my-4">
        My <span className="text-orange-400"> Projects </span>
      </h1>

      <div className="max-w-[1200px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-12`}
          >
            {/* Text section */}
            <div className="space-y-4 max-w-[550px] md:w-1/2 text-center md:text-left order-1 md:order-none">
              <h2 className="text-7xl my-4 text-white/70">0{index + 1}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
              <p className="text-xl text-orange-500 font-semibold">{project.devStack}</p>
              <div className="w-64 h-[1px] bg-gray-400 my-4"></div>
              <a href={project.git} className="text-xl text-orange-400 hover:text-orange-300">Git</a>
            </div>

            {/* Image section */}
            <div className="flex justify-center items-center w-full md:w-1/2 order-2">
              <Image src={project.src} alt={project.title} className="h-[350px] w-auto object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;



//<a href={project.link} className="mr-6">Link</a>