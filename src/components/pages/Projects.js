import { IoLogoGithub } from "react-icons/io";
import Textanim from "../containers/Textanim";
import { useState } from "react";
function Projects() {

    const [project,setProject] = useState([
        {title: "Portfolio", thumbnail: "./assets/images/react-logo.png" ,descriptoin: "Android app that can edit any file and can also show the hex properties of file", href: ""},
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        

    ])

    return (
        <section className="Projects h-full mt-24 max-lg:h-full">

            <div className="flex flex-col text-center">
                <Textanim text="Projects" fading="fade-right"/>
            </div>

            <div className="grid grid-cols-4 gap-3 p-3 w-full max-sm:grid-cols-1 max-md:grid-cols-2 max-xl:grid-cols-3 mt-7 project-container">

                {project.map((item) => (
                <div className={"w-full"} data-aos="flip-right" data-aos-duration="700" data-aos-delay="50">
                    
                    <div className={"w-full project-card hover:scale-105 transition-all border-gray-600 overflow-hidden rounded-md text-center flex flex-col gap-3"}>
                        <div className="bg-gray-600 w-full flex justify-center items-center">
                            <img src={item.thumbnail} />
                        </div>
                        <div className="px-3 py-5 flex flex-col gap-9">
                            <p className="font-semibold text-2xl">{item.title}</p>
                            <p className="">{item.descriptoin}</p>
                            <div className="flex flex-row gap-2 justify-center">
                                <p className="px-3 py-1 cursor-pointer hover:bg-sky-700 font-semibold transition-all border-2 rounded-md">PHP</p>
                                <p className="px-3 py-1 cursor-pointer hover:bg-sky-700 font-semibold transition-all border-2 rounded-md">Laravel</p>
                            </div>
                            <div>
                                <a href={item.href} className="hover:bg-sky-700 bg-sky-900 font-semibold border-2 border-sky-700 text-xl px-5 py-2 rounded-md">Visit</a>
                            </div>

                        </div>
                    </div>
                </div>
                ))}

            </div>

        </section>
    );
}

export default Projects;