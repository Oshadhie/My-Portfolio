"use client";
import Image from "next/image";
import profile from "../assets/profile.jpg";
import computer from "../assets/images.jpeg";
import pen from "../assets/pen.png";
import {motion} from "framer-motion";

const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]"> 

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                            bg-[radial-gradient(closest-size,#000_80%,#2B1942)]"></div>
            
            <div className="relative">
                <div className="text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE] "> Hi, I am </h1>
                    <h1 className="text-[#E48A57] animate-pulse"> Oshadhie </h1>
                </div>

                
            

                <p className="text-center text-x1 max-w-[600px] mx-auto mt-8 text-white/80">
                Passionate and dedicated undergraduate with a strong foundation in information technology. 
                Proficient in various programming languages with a keen interest in web development, mobile app development, and database management.
                </p>

                <Image
                    src={profile}
                    height="200"
                    width="200"
                    alt="profile picture"
                    className="h-auto w-auto mx-auto mt-8 mb-12 rounded-xl"
                />

            </div>

        </div>
    )
}

export default Hero

/*<motion.div
                    className=" hidden md:block absolute left-[250px] top-[170px]"
                    drag
                    >
                        <Image
                        src={computer}
                        height="190"
                        width="190"
                        alt="cursor"
                        className=""
                        draggable="false"
                        />
                </motion.div>

                <motion.div
                    className=" hidden md:block absolute left-[1100px] top-[170px]"
                    drag
                    >
                        <Image
                        src={pen}
                        height="120"
                        width="120"
                        alt="massage"
                        className=""
                        draggable="false"
                        />
                </motion.div> */