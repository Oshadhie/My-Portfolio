import React from "react";
import { FaPhone, FaHome, FaMailBulk} from "react-icons/fa";

const MyContact = [
    {
        icon: FaPhone,
        desc:"077-5813433"   
    },
    {
        icon: FaMailBulk,
        desc:"Oshadhiindudunu@gmail.com"
    },
    {
        icon: FaHome,
        desc:"Weherakele, Nalladarankattuwa"
    },
    
];

const Contact = () => {
    return(
        <div className="max-w-[1000px] mx-auto p-8 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-8 text-white" id="contact">
            <div className="flex justify-center item-center">
                <ul className="space-y-4">
                {MyContact.map((contact, index) => (
                        <li key={index} className="flex items-center">
                            <contact.icon className="h-[50px] w-auto mr-6 text-orange-400" />
                            <p className="text-xl">{contact.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>

           
        </div>
    )
}

export default Contact


/*<div className="bg-white/10 p-6 rounded-xl w-full lg:w-[50%]">
<h2 className="text-5xl font-bold text-orange-400 mb-4">Let's Connect</h2>
<form className="space-y-4 " action="https://getform.io/f/aqonjexa" method="POST">
    <div className="grid md:grid-cols-2 gap-4">
        <input type="text" name="name" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="First Name"></input>
        <input type="text" name="name" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Last Name"></input>
        <input type="email" name="email" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email"></input>
        <input type="phone" name="phone" className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Phone"></input>
    </div>
    <textarea className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Message"></textarea>
    <button className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold
                        text-xl rounded-xl"> Send Message </button>
</form>
</div>*/