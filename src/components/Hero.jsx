import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/about0.jpeg";
import profileVideo from "../assets/ProfileVideoR.mp4";
import Profession from "./Profession";
import { useState } from "react";

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div id="hero" className=" py-14 px-5 border-b border-neutral-900 pb-54 lg:mb-35">
      <div className="flex flex-wrap  text-black dark:text-gray-200 ">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="pb-3  text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
              Aryan Kumar Swain
            </h2>
            <h2 className="pb-4  font-extralight tracking-tight lg:mt-9 lg:text-3xl">
              I'm a
            </h2>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              <Profession />
            </span>
            <div className="lg:hidden p-10">
              <div className="flex justify-center items-center">
                {videoEnded ? (
                  <img
                    className="ani overflow-hidden"
                    src={profilePic}
                    alt="Aryan"
                    style={{ maxWidth: "100%", borderRadius: "50%" }}
                  />
                ) : (
                  <video
                    className="ani overflow-hidden"
                    src={profileVideo}
                    alt="Aryan"
                    autoPlay
                    loop={false}
                    muted
                    onEnded={handleVideoEnd}
                    style={{ maxWidth: "100%", borderRadius: "50%" }}
                  />
                )}
              </div>
            </div>

            <p className="max-w-xl py-4 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
          <button className="flex shrink-0 mx-20 sm:mx-44 justify-center items-center text-white text-lg rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-light tracking-tighter p-4 mb-10 lg:mb-20 cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] dark:hover:shadow-[0_0_15px_rgba(128,90,213,0.8)] transition-shadow duration-100">
            <a
              href="https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy8yY2VlZjdjZTQyNjg0MTU0L0VVNmNqNHFNanVSQmxQQmt1QkxiaVdRQnM4cTFJOE1jQlEwQ2dmNFZneUpZN3c%5FZT1YV0dMOEo&cid=2CEEF7CE42684154&id=2CEEF7CE42684154%21s8a8f9c4e8e8c41e494f064b812db8964&parId=2CEEF7CE42684154%21sd8f4fd9f5e424129b92f369321bd434a&o=OneUp"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
          </button>

        </div>

        <div className="hidden lg:block w-1/2 p-16">
          <div className="flex justify-center items-center">
            {videoEnded ? (
              <img
                className="ani overflow-hidden"
                src={profilePic}
                alt="Aryan"
                style={{ maxWidth: "100%", borderRadius: "50%" }}
              />
            ) : (
              <video
                className="ani overflow-hidden"
                src={profileVideo}
                alt="Aryan"
                autoPlay
                loop={false}
                muted
                onEnded={handleVideoEnd}
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
