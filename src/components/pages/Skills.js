import { useEffect, useState } from "react";
import Textanim from "../containers/Textanim";
import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";


function Skills(){

    const [programming_percentage, setProgrammingPercentage] = useState([
        {title: "C/C++", width: "w-[90%]", value: "90%", background: "bg-gradient-to-r from-purple-500 to-pink-500"},
        {title: "Java", width: "w-[80%]", value: "80%", background: "bg-gradient-to-r from-violet-500 to-fuchsia-500"},
        {title: "PHP", width: "w-[80%]", value: "80%", background: "bg-gradient-to-r from-cyan-500 to-blue-500"},
        {title: "HTML", width: "w-[95%]", value: "95%", background: "bg-gradient-to-r from-sky-500 to-indigo-500"},
        {title: "CSS", width: "w-[70%]", value: "70%", background: "bg-gradient-to-r from-sky-500 to-indigo-500"},
        {title: "Javascript", width: "w-[75%]", value: "75%", background: "bg-gradient-to-r from-sky-500 to-indigo-500"},
    ]);

    const [technology, setTechnology] = useState([
        {title : "Laravel", icon: "./assets/images/Laravel-icon.png"},
        {title: "React", icon: "./assets/images/react-icon.png"}
    ])

    return(
        <section className="Skills mt-24 max-lg:h-full">

            <div>
                <Textanim text="Skills" fading="fade-right"/>
            </div>

            <div className="skills-container w-full flex flex-row gap-3 p-3 justify-between mt-8 max-lg:flex-col">
                <div className="rounded-md p-4 skill-card h-full w-full" data-aos="fade-left" data-aos-duration="500" data-aos-delay="50">
                    <div className="flex flex-col gap-6">
                        <p className="text-3xl text-center">Programming Languages</p>
                        <ul className="flex flex-col gap-5">
                            {programming_percentage.map((item) => (
                                <li className="flex flex-col gap-2">
                                    <h1 className="font-semibold">{item.title}</h1>
                                    <div className="w-full h-6 bg-zinc-300 rounded-md">
                                        <div className={item.width + " h-full rounded-md skills-per relative " + item.background} data-value={item.value}></div>
                                    </div>
                                </li>
                            ))}
                            

                        </ul>
                    </div>
                </div>

                <div className="rounded-md p-4 skill-card h-auto w-full" data-aos="fade-right" data-aos-duration="700" data-aos-delay="50">

                    <div className="flex flex-col w-full h-full text-center items-center gap-6">
                        <h1 className="text-3xl text-center">Teachnologies</h1>

                        <div className="grid grid-cols-3 gap-3">
                            {technology.map((item) => (
                                <div className="bg-white rounded-md flex flex-col text-center p-2 hover:scale-105 transition-all">
                                    <img alt="" className="" src={item.icon} />
                                    <p className="font-semibold text-gray-500">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Skills;