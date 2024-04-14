import { IoLogoGithub } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { FaChevronLeft } from "react-icons/fa";
import "./Project.css";
import Textanim from "../containers/Textanim";
import { useEffect, useRef, useState } from "react";

function Projects() {

    const [project, setProject] = useState([
        { title: "demo-folio", thumbnail: "./assets/images/react-logo.png", description: "My personal Portfolio", href: "https://github.com/malikrayyan23672/demo-folio" },
        { title: "Sudoku Solver", thumbnail: "./assets/images/java-bg.png", description: "GUI based Sudoku Solver using Java", href: "https://github.com/malikrayyan23672/sudoku-solver" },
        { title: "Key Generater", thumbnail: "./assets/images/php-bg.png", description: "Random Key generator writting in php", href: "https://github.com/malikrayyan23672/key-generator" },
    ]);

    const sideBtnRef = useRef();
    let [projectCardState,setProjectCardState] = useState(false);
    const [scroll, setScroll] = useState(0);
    const carouselRef = useRef(null);
    let isDragging = false, startX, startScrollLeft;

    function handleLeftClick() {
        carouselRef.current.scrollLeft -= 340;
    }

    function handleRightClick() {
        carouselRef.current.scrollLeft += 340;
    }

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

    const listSort = () => {
        carouselRef.current.classList.add("active");
        sideBtnRef.current.classList.add("active");
        if(!projectCardState){

        setProjectCardState(!projectCardState);
        }
    }

    const gridSort = () => {
        carouselRef.current.classList.remove("active");
        sideBtnRef.current.classList.remove("active");
        if(projectCardState){
            setProjectCardState(!projectCardState);
        }
    }

    // carouselRef.current.addEventListener('mousedown', startDragging);

    // carouselRef.current.addEventListener('mouseup', stopDragging);
    // carouselRef.addEventListener('mousemove', dragging);


    return (
        <section className="Projects z-10 h-full relative mt-24 max-lg:h-full">

            <div className="flex flex-col text-center">
                <Textanim text="Projects" fading="fade-right" />
            </div>

            <div className="flex flex-row float-right gap-2 items-center mr-3 mt-3">
                <div className="p-3 bg-gray-600 hover:bg-gray-500 transition-all rounded-md cursor-pointer list_sort_btn" onClick={listSort}>

                    <IoList className="text-2xl" />
                </div>
                <div className="p-3 bg-gray-600 rounded-md cursor-pointer hover:bg-gray-500 transition-all grid_sort_btn" onClick={gridSort}>

                    <IoGrid className="text-2xl" />
                </div>
            </div>
            <div className="carousel-navigation-btn" id="carousel-navigation-btn" ref={sideBtnRef}>
                <FaChevronLeft onClick={handleLeftClick} className="absolute left-btn" id="left-btn" />
                <FaChevronRight onClick={handleRightClick} className="absolute right-btn" id="right-btn" />

            </div>

            <div id="carousel" onMouseDown={startDragging} onMouseUp={stopDragging} onMouseMove={dragging} ref={carouselRef} className=" mt-7 project-container">


                {project.map((item) => (
                    <div className={"w-full"} data-aos="fade-in" data-aos-duration="700" data-aos-delay="50">

                        <div className={projectCardState ? "active m-auto project-card transition-all border-gray-600 rounded-md text-center flex flex-col gap-3" : "m-auto project-card transition-all border-gray-600 rounded-md text-center flex flex-col gap-3"}>
                            <div className="bg-gray-600 w-full flex justify-center items-center" draggable="false">
                                <img id="thumbnail" src={item.thumbnail} />
                            </div>
                            <div className="px-3 py-5 flex flex-col gap-3 max-sm:gap-4">
                                <p className="font-semibold title text-2xl">{item.title}</p>
                                <p className="description">{item.description}</p>
                                {/* <div className="flex flex-row gap-2 justify-center" id="programming-languages">
                                    <p className="px-3 py-1 cursor-pointer hover:bg-sky-700 font-semibold transition-all border-2 rounded-md">PHP</p>
                                    <p className="px-3 py-1 cursor-pointer hover:bg-sky-700 font-semibold transition-all border-2 rounded-md">Laravel</p>
                                </div> */}
                                <div className="mt-4">
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