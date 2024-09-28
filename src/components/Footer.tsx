import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return(
        <div className="mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700
                        pt-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">I W O Indudunu</h1>

            <div className="flex space-x-6 mt-4">
                <a href="#" className="hover:text-gray-300"><FaFacebook size={35}/></a>
                <a href="#" className="hover:text-gray-300"><FaLinkedin size={35}/></a>
                <a href="#" className="hover:text-gray-300"><FaGithub size={35}/></a>
            </div>
        </div>
    )
}

export default Footer