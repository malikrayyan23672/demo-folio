import { IoLogoGithub } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import Textanim from "../containers/Textanim";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";


function About() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="About w-full h-full max-xl:h-full" name="About">
            <div className="flex flex-col text-center gap-8">

                <Textanim fading="fade-left" text="About Me"/>
                <div className="flex flex-wrap justify-center items-center h-full w-full gap-96 max-xl:gap-52">
                    <div className="flex justify-center flex-col gap-2 items-center h-full">

                        <div className="flex flex-col gap-2">

                            <h1 className="font-semibold text-2xl">Malik Rayyan</h1>
                            <p className="font-semibold">BSCS Student | Android Developer</p>
                        </div>
                        <div className="flex gap-2 justify-start">

                            <a href="#">
                                <IoLogoGithub className="w-auto p-2 border-2 hover:bg-slate-500 rounded-full h-14" />
                            </a>

                            <a href="#">
                                <IoLogoFacebook className="w-auto p-2 border-2 hover:bg-slate-500 rounded-full h-14" />
                            </a>

                            <a href="#">
                                <IoLogoLinkedin className="w-auto p-2 border-2 hover:bg-slate-500 rounded-full h-14" />
                            </a>
                            <a href="#">
                                <IoLogoTwitter className="w-auto p-2 border-2 hover:bg-slate-500 rounded-full h-14" />
                            </a>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1 gap-2">
                        <img alt="" className="w-72 h-96 rounded-md" src="./assets/images/1.jpg" />
                        <img alt="" className="w-72 h-96 rounded-md" src="./assets/images/2.jpg" />
                        <img alt="" className="w-72 h-96 rounded-md" src="./assets/images/3.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;