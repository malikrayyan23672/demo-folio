function Textanim({text, fading}){

    return(

        <div data-aos={fading} data-aos-duration="800" data-aos-delay="50">
            <h1 className="text-center text-3xl">{text}</h1>
        </div>

    );
}

export default Textanim;