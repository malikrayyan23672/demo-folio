import  Typewriter  from "typewriter-effect";
import { MdWavingHand } from "react-icons/md";
import data from "./../../data.js"
function Home() {

    return (
        <section className="Home z-10" name="Home">
            <div className="flex flex-col gap-4 h-screen w-full justify-center items-center">

                {/* <div className="relative w-64 h-64 border-2 flex flex-col justify-center items-center rounded-full">
                    <img alt="" className="w-96 rounded-full shadow-xl" src="./assets/images/malik-logo2.png" />
                </div> */}
                <div className="flex flex-col text-center items-center gap-1">
                    <MdWavingHand className="text-3xl text-sky-500" />
                    <p className=" text-6xl text-sky-0">Hi, i'm <span className="font-semibold text-6xl">{data.personal.name}</span></p>
                    <p className="font-semibold text-6xl text-[#FCFF7C]"><Typewriter
                    options={{
                        strings: data.typewriter,
                        autoStart: true,
                        loop: true,
                    }}
                /></p>
                </div> 

            </div>

        </section>
    );
}

export default Home;