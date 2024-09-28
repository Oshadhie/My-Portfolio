import React from "react";



const MySkill = [
    {
        title: "Full Stack Development",
        desc: "Proficient in JavaScript (Node.js, React) and skilled in building robust web applications. Experienced in using the MERN stack for scalable solutions, with expertise in frontend technologies like HTML, CSS, and Tailwind CSS. Strong command of backend development using Node.js and Express.js.",
    },
    {
        title: "Mobile Development",
        desc: "experienced in Kotlin and Java for Android app development, utilizing Android Studio to create high-performance, scalable, and responsive mobile applications. Focused on delivering user-centric experiences with optimized performance, ensuring both client satisfaction and end-user engagement.",
    },
    {
        title: "UI/UX Design",
        desc: "Proficient in Figma for designing intuitive user interfaces and crafting smooth user experiences. Skilled in creating wireframes, prototypes, and visual designs that align with modern design principles. Dedicated to enhancing user interaction with aesthetically appealing and functional designs.",
    },
];

const Skills = () => {
    return(
        <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32">
            <div className="text-white w-[400px] max-w-[950px] md:w-[90%] md:max-w-[1250px] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-4 text-orange-400">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {MySkill.map((skill, index) => (
                        <div
                            key={index}
                            className="h-[450px] w-[300px] md:h-[450px] md:w-[400] flex flex-col justify-between
                                        item-center bg-white/10 p-4 rounded-xl text-xl text-white ">
                            {skill.title}
                            <p className="mt-2 text-xl text-white"> {skill.desc} </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills