import React from "react";
import Image from "next/image";
import book from "../assets/book.png"
import computer from "../assets/computer.png"
import women from "../assets/women.png"
import experience from "../assets/experience.png"

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto" id="about">

            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4"> 
                About <span className="text-orange-400"> Me </span>
            </h1>

            <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">

                <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 opacity-30 animate-pulse"></div>
                    <div className="flex plex-row p-6">
                        <Image src={book} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-4xl font-bold text-white/110"> Education </h2>
                            <p className="text-2xl text-white/80 mt-2"> Sri Lanka Institute of Information Technology (SLIIT) </p>
                            <p className="text-lg text-white/80 mt-2">BSc (Hons) in Information Technology Specialized in Information Technology - 3rd Year  </p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
                    <div className="flex plex-row p-6">
                        <Image src={women} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80"> Problem Sloving </h2>
                            <p className="text-lg text-white/70 mt-2"> I approch challenges with a logical and systematic mindset </p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
                    <div className="flex plex-row p-6">
                        <Image src={experience} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80"> Experience </h2>
                            <p className="text-lg text-white/70 mt-2"> I have a diverse some of projects </p>
                        </div>
                    </div>
                </div>

                <div className="w-full col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden ">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-pulse"></div>
                    <div className="flex plex-row p-6">
                        <Image src={computer} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4">
                            <h2 className="text-2xl font-bold text-white/80"> Techical Skills </h2>
                            <p className="text-lg text-white/70 mt-2"> 
                                JavaScript, Kotlin, Python, Java, HTML, CSS, PHP, SQL, C, R
                                MERN Stack, React + Vite, Tailwind CSS 
                                Eclipse, Android Studio, Visual Studio, VS Code, Figma, Trello, Office 365
                                UML Design, Database Design, Agile, UI/UX Design                         
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About