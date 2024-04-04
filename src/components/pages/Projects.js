import { IoLogoGithub } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

import { FaChevronLeft } from "react-icons/fa";
import "./Project.css";

import Textanim from "../containers/Textanim";
import { useEffect, useState } from "react";
function Projects() {

    const [project,setProject] = useState([
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        {title: "University Student Portal" , thumbnail: "./assets/images/laravel-logo.jpg", descriptoin: "A webstite for students in which student can upload and check their homework", href: ""},
        

    ])

    console.log('hi')

    useEffect(() => {
        const carousel = document.getElementById('carousel');

        let isDragging = false ,startX, startScrollLeft;

        const startDragging = (e) => {
            isDragging = true;
            carousel.classList.add("dragging")

            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const stopDragging = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const dragging = (e) => {
            if(!isDragging){
                return;
            }
            carousel.scrollLeft = startScrollLeft -  (e.pageX - startX);
        }

        carousel.addEventListener('mousedown', startDragging);
        carousel.addEventListener('mousemove', dragging);
        carousel.addEventListener('mouseup', stopDragging);
    })

    return (
        <section className="Projects h-full mt-24 max-lg:h-full">

            <div className="flex flex-col text-center">
                <Textanim text="Projects" fading="fade-right"/>
            </div>

            <div id="carousel" className="grid relative grid-cols-4 overflow-hidden gap-3 p-3 w-full max-md:grid-cols-2 max-xl:grid-cols-3 max-sm:grid-cols-1 max-sm:grid-flow-col-dense max-sm:overflow-scroll mt-7 project-container">


                {project.map((item) => (
                    <div className={"w-full"} data-aos="flip-right" data-aos-duration="700" data-aos-delay="50">

                        <div className={"w-full project-card hover:scale-105 transition-all border-gray-600 rounded-md text-center flex flex-col gap-3"}>
                            <div className="bg-gray-600 w-full flex justify-center items-center" draggable="false">
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