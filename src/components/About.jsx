import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/aryanProfile1.jpeg";
import aboutVideo from "../assets/aboutVideo.mp4"; 
import { useState } from "react";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; 
    setIsHovered(false);
  };

  return (
    <div id="about" className="border-b border-neutral-900  text-black dark:text-gray-200  pb-4">
      <h2 className="my-10 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex items-center justify-center flex-wrap">
        <div className="lg:hidden p-5">
          <div className="flex justify-center items-center">
            {isHovered ? (
              <video
                className="ani cursor-none overflow-hidden"
                src={aboutVideo}
                alt="About"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                loop
                muted
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            ) : (
              <img
                className="ani cursor-none overflow-hidden"
                src={aboutImg}
                alt="About"
                onMouseEnter={handleMouseEnter}
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            )}
          </div>
        </div>

        <div className="hidden lg:block w-1/2 p-10">
          <div className="flex justify-center items-center">
            {isHovered ? (
              <video
                className="ani cursor-none overflow-hidden"
                src={aboutVideo}
                alt="About"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                loop
                muted
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            ) : (
              <img
                className="ani cursor-none overflow-hidden"
                src={aboutImg}
                alt="About"
                onMouseEnter={handleMouseEnter}
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            )}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
