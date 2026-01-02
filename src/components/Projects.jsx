import React from "react";
import pro1 from '../assets/pro1.jpg'; // Adjust the path as necessary
import pro2 from '../assets/pro2.png'; // Adjust the path as necessary
import pro3 from '../assets/pro3.png'; // Adjust the path as necessary
import pro4 from '../assets/pro4.jpg'; // Adjust the path as necessary
import pro5 from '../assets/pro5.png'; // Adjust the path as necessary
import Slider from "./Slider"; // Ensure the path is correct

const Projects = () => {
  const projectSlides = [
      {
      image: pro5,
      title: "SWAIN Talks",
      description: "MERN Stack based Social Media Application.",
      link: "https://talks-swain.onrender.com/", 
    },
    {
      image: pro1,
      title: "SWAIN Portfolio Website",
      description: "My portfolio website built with React and Tailwind CSS.",
      link: "https://swain.netlify.app/", 
    },
    {
      image: pro4,
      title: "SWAIN Weather App",
      description: "Get real-time weather updates for any location.🌤️",
      link: "https://swainweather.netlify.app/", 
    },
    {
      image: pro3,
      title: "SWAIN GPA Calculator",
      description: "Calculate your SGPA or CGPA here.😎",
      link: "https://swaingpacalculator.netlify.app/",
    },
    {
      image: pro2,
      title: "SWAIN Type's",
      description: "A typing speed test application to improve your typing skills.⌨️",
      link: "https://swaintype.netlify.app/", 
    }
  
    
  ];

  return (
    <div
      id="projects"
      className="border-b text-black dark:text-gray-200 border-neutral-800 pb-24"
    >
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <Slider slides={projectSlides} />
    </div>
  );
};

export default Projects;
