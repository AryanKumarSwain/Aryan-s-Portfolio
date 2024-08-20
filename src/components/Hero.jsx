import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/aryanProfile1.jpeg";
import Profession from "./Profession";

const Hero = () => {
  return (
    <div id="hero" className=" py-16 border-b border-neutral-900 pb-54 lg:mb-35  ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-3 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl  ">
              Aryan Kumar Swain
            </h2>
            <h2 className="pb-4 text-3xl font-extralight tracking-tight lg:mt-9 lg:text-3xl">
             I'm a
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
             <Profession/>
            </span>
            <p className=" max-w-xl py-4 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
          <button className="flex px-8 flex-shrink-0 justify-center items-center text-white text-lg rounded-full ml-52 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-light tracking-tighter p-3 mb-10 lg:mb-20 cursor-pointer hover:brightness-110 transition duration-300 ease-in-out">
             My Resume
          </button>

        </div>
        
       
        <div className="w-full lg:w-1/2 lg:p-20 ">
         
          <div className="flex  justify-center items-center">
            <img className="rounded-xl " src={profilePic} alt="Aryan" />

          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Hero;

