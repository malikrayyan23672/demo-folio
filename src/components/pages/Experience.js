import { useEffect, useRef } from "react";
import Textanim from "../containers/Textanim";



function Experience(){
    
        const canvasRef = useRef(null);
        
    

    // useEffect(() => {
    
    //     const canvas = canvasRef.current
    //     const context = canvas.getContext('2d')
    //     var width = canvas.width = window.innerWidth;
    //     var height = canvas.height = window.innerHeight;
    //     context.translate(0,height/2)
    //     for(var angle = 0; angle < Math.PI * 8; angle+=.01){
    //         var x = angle*100;
    //         var y =Math.sin(angle) * 100 ;
    //         context.fillStyle = '#fff';
    //         context.fillRect(x,y,10,10);
    //         // context.beginPath()
    //         // context.arc(x, y, 20, 20, 2*Math.PI)
    //         // context.fill()
            
    //     }
    //   })
    return(
        <section className="Experience mt-24 relative">
            <div>
                <Textanim text="Experience" fading="fade-left"/>
            </div>
            {/* <div className="h-full w-full flex flex-col justify-center items-center">
                <canvas className="w-full h-full items-center" ref={canvasRef}></canvas>
                
            </div>

            <div className="w-full h-full absolute left-0 top-0 right-0 bottom-0 z-10 time-line-box flex gap-32">
                <div className="time-line bottom-amp">

                </div>
                <div className="time-line top-amp relative">
                    <div className="time-line-details absolute w-56 h-24 bg-red-500 rounded-md">
                        <p>Passes hgih school in 2019</p>
                    </div>
                </div>
                <div className="time-line bottom-amp"></div>
                <div className="time-line top-amp"></div>
                <div className="time-line bottom-amp"></div>
                <div className="time-line top-amp"></div>
            </div> */}
            
             
        </section>
    );
}

export default Experience