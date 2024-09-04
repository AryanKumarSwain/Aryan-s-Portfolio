import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/about0.jpeg";
import profileVideo from "../assets/ProfileVideo.mp4";  // Correct path
import Profession from "./Profession";
import { useState } from "react";
//sfrgh
const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // Reset video to the start
    setIsHovered(false);
  };

  return (
    <div id="hero" className="py-20 border-b border-neutral-900 pb-54 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-3 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Aryan Kumar Swain
            </h2>
            <h2 className="pb-4 text-3xl font-extralight tracking-tight lg:mt-9 lg:text-3xl">
              I'm a
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              <Profession />
            </span>
            <div className="lg:hidden p-10 cursor-pointer">
              <div className="flex justify-center items-center ">
                {isHovered ? (
                  <video
                    className="ani overflow-hidden cursor-none "
                    src={profileVideo}
                    alt="Aryan"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    loop
                    muted
                    style={{ maxWidth: "100%", borderRadius: "50%" }}
                  />
                ) : (
                  <img
                    className="ani overflow-hidden cursor-none"
                    src={profilePic}
                    alt="Aryan"
                    onMouseEnter={handleMouseEnter}
                    style={{ maxWidth: "100%", borderRadius: "50%" }}
                  />
                )}
              </div>
            </div>

            <p className="max-w-xl py-4 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
          <button className="flex shrink-0 mx-20 sm:mx-44 justify-center items-center text-white text-lg rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-light tracking-tighter p-4 mb-10 lg:mb-20 cursor-pointer hover:brightness-110 transition">
            <a
              href="https://drive.google.com/file/d/1VRooMQZLwqCJtLcAME6epPL0fqa11MNV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </button>
        </div>

        <div className="hidden lg:block w-1/2 p-16">
          <div className="flex justify-center items-center">
            {isHovered ? (
              <video
                className="ani overflow-hidden cursor-none"
                src={profileVideo}
                alt="Aryan"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                loop
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            ) : (
              <img
                className="ani overflow-hidden cursor-none"
                src={profilePic}
                alt="Aryan"
                onMouseEnter={handleMouseEnter}
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
