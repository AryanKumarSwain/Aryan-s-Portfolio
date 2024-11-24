import React from "react";
import pro1 from '../assets/pro1.jpg'; // Adjust the path as necessary
import pro2 from '../assets/pro2.jpg'; // Adjust the path as necessary
import pro3 from '../assets/pro3.png'; // Adjust the path as necessary
import pro4 from '../assets/pro4.jpg'; // Adjust the path as necessary
import Slider from "./Slider"; // Ensure the path is correct
import { PRO_1 } from "../constants"; 
const Projects = () => {
  const projectSlides = [
    {
      image: pro1,
      title: "Portfolio Website",
      description: PRO_1,
      link: "https://swain.netlify.app/", 
    },
    {
      image: pro4,
      title: "Weather App",
      description: "Project 2 description goes here.",
      link: "https://swainweather.netlify.app/", 
    },
    {
      image: pro3,
      title: "GPA Calculator",
      description: "Project 3 description goes here.",
      link: "https://swaingpacalculator.netlify.app/",
    },
    {
      image: pro4,
      title: "Project 4",
      description: "Project 4 description goes here.",
      link: "https://swainweather.netlify.app/", 
    },
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
