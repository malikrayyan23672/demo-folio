import Textanim from "../containers/Textanim";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

function Contact(){
    return(
        <section className="Contact h-96 z-10 mt-24 overflow-hidden">
            <div>
                <Textanim text="Contact" fading="fade-left" />
            </div>
            <div className="flex flex-col h-full w-full items-center" data-aos="zoom-in-left" data-aos-duration="500" data-aos-delay="50">
                <div className="bg-gray-800 contact-card p-3 rounded-md mt-20">
                    <div className="grid grid-cols-3 w-full h-full gap-4 max-sm:grid-cols-3">
                        <div className="flex items-center gap-2 w-full h-full">
                            <MdEmail className="rounded-full border-2 w-10 h-10 p-1 hover:bg-gray-500 transition-all cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-2 w-full h-full justify-center">
                            <FaPhoneSquareAlt className="rounded-full border-2 w-10 h-10 p-1 hover:bg-gray-500 transition-all cursor-pointer" />
                        </div>
                        <div className="flex items-center gap-2 w-full h-full justify-center">
                            <IoLogoWhatsapp className="rounded-full border-2 w-10 h-10 p-1 hover:bg-gray-500 transition-all cursor-pointer" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Contact