import { IoLogoGithub } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";

import { FaChevronLeft } from "react-icons/fa";
import "./Project.css";

import Textanim from "../containers/Textanim";
import { useEffect, useRef, useState } from "react";
function Projects() {

    const [project,setProject] = useState([
        {title: "demo-folio" , thumbnail: "./assets/images/react-logo.png", descriptoin: "My personal Portfolio", href: "https://github.com/malikrayyan23672/demo-folio"},
        

    ]);

    const [scroll, setScroll] = useState(0);
    const carouselRef = useRef(null);

    function handleLeftClick(){
        carouselRef.current.scrollLeft -= 340;
    }
    
    function handleRightClick(){
        carouselRef.current.scrollLeft += 340;
    }
    let isDragging = false, startX, startScrollLeft;

    const startDragging = (e) => {
        isDragging = true;
        carouselRef.current.classList.add("dragging")
        startX = e.pageX;
        startScrollLeft = carouselRef.current.scrollLeft;
    }

    const stopDragging = () => {
        isDragging = false;
        carouselRef.current.classList.remove("dragging");
    }

    const dragging = (e) => {
        if (!isDragging) {
            return;
        }
        carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
        // carouselRef.current.scrollLeft = e.pageX;
        
    }

    // carouselRef.current.addEventListener('mousedown', startDragging);

    // carouselRef.current.addEventListener('mouseup', stopDragging);
    // carouselRef.addEventListener('mousemove', dragging);


    return (
        <section className="Projects z-10 h-full relative mt-24 max-lg:h-full">

            <div className="flex flex-col text-center">
                <Textanim text="Projects" fading="fade-right"/>
            </div>

            <FaChevronLeft onClick={handleLeftClick} className="absolute" id="left-btn"/>

            <div id="carousel" onMouseDown={startDragging} onMouseUp={stopDragging} onMouseMove={dragging}  ref={carouselRef} className="grid relative grid-cols-auto grid-flow-col gap-3 p-3 w-full max-sm:grid-cols-1 max-sm:grid-flow-col-dense mt-7 project-container">


                {project.map((item) => (
                    <div className={"w-full"} data-aos="fade-in" data-aos-duration="700" data-aos-delay="50">

                        <div className={"w-full m-auto project-card transition-all border-gray-600 rounded-md text-center flex flex-col gap-3"}>
                            <div className="bg-gray-600 w-full flex justify-center items-center" draggable="false">
                                <img id="thumbnail" src={item.thumbnail} />
                            </div>
                            <div className="px-3 py-5 flex flex-col gap-9 max-sm:gap-4">
                                <p className="font-semibold text-2xl">{item.title}</p>
                                <p className="">{item.descriptoin}</p>
                                {/* <div className="flex flex-row gap-2 justify-center" id="programming-languages">
                                    <p className="px-3 py-1 cursor-pointer hover:bg-sky-700 font-semibold transition-all border-2 rounded-md">PHP</p>
                                    <p className="px-3 py-1 cursor-pointer hover:bg-sky-700 font-semibold transition-all border-2 rounded-md">Laravel</p>
                                </div> */}
                                <div>
                                    <a href={item.href} className="hover:bg-sky-700 bg-sky-900 font-semibold border-2 border-sky-700 text-xl px-5 py-2 rounded-md">Visit</a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
            
            <FaChevronRight onClick={handleRightClick} className="absolute right-btn" id="right-btn"/>

        </section>
    );
}

export default Projects;