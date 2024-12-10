import React from "react";
import Image from "next/image";
import book from "../assets/book.png";
import computer from "../assets/computer.png";
import women from "../assets/women.png";
import experience from "../assets/experience.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4" id="about">
      <h1 className="text-white text-4xl md:text-6xl text-center font-semibold p-4 mb-8">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
        {/* Education Section */}
        <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 opacity-30 animate-pulse"></div>
          <div className="flex flex-col md:flex-row items-center p-6">
            <Image
              src={book}
              alt="Education"
              className="w-[80px] h-[80px] md:w-auto md:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 md:mt-0 md:ml-6">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Education
              </h2>
              <p className="text-lg md:text-2xl text-white/80 mt-2 text-center md:text-left">
                Sri Lanka Institute of Information Technology (SLIIT)
              </p>
              <p className="text-sm md:text-lg text-white/80 mt-2 text-center md:text-left">
                BSc (Hons) in Information Technology Specialized in Information
                Technology - 3rd Year
              </p>
            </div>
          </div>
        </div>

        {/* Problem-Solving Section */}
        <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-col md:flex-row items-center p-6">
            <Image
              src={women}
              alt="Problem Solving"
              className="w-[80px] h-[80px] md:w-auto md:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 md:mt-0 md:ml-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Problem Solving
              </h2>
              <p className="text-sm md:text-lg text-white/70 mt-2 text-center md:text-left">
                I approach challenges with a logical and systematic mindset.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-col md:flex-row items-center p-6">
            <Image
              src={experience}
              alt="Experience"
              className="w-[80px] h-[80px] md:w-auto md:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 md:mt-0 md:ml-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Experience
              </h2>
              <p className="text-sm md:text-lg text-white/70 mt-2 text-center md:text-left">
                I have worked on a diverse range of projects.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
          <div className="flex flex-col md:flex-row items-center p-6">
            <Image
              src={computer}
              alt="Technical Skills"
              className="w-[80px] h-[80px] md:w-auto md:h-[130px] object-contain"
            />
            <div className="flex flex-col mt-4 md:mt-0 md:ml-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Technical Skills
              </h2>
              <p className="text-sm md:text-lg text-white/70 mt-2 text-center md:text-left">
                JavaScript, Kotlin, Python, Java, HTML, CSS, PHP, SQL, C, R,
                MERN Stack, React + Vite, Tailwind CSS, Eclipse, Android Studio,
                Visual Studio, VS Code, Figma, Trello, Office 365, UML Design,
                Database Design, Agile, UI/UX Design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
