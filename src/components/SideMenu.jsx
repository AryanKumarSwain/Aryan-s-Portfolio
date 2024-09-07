import { MdClose } from "react-icons/md";
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
// import { RiMenu3Fill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import ThemeChange from "./ThemeChange";
const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
     
      <button onClick={openMenu}><BiMenuAltRight className="block text-gray-800 dark:text-gray-200 lg:hidden text-3xl mx-10 w-10" /></button>
      <div
      
        id="sideMenu"
        className={` rounded-t-lg fixed top-0 bottom-0 right-0 w-64 h-screen bg-gradient-to-r from-red-800 to-black transition-transform duration-500 ${
          menuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
><div className="flex m-5 text-gray-200 dark:text-gray-200 " onClick={closeMenu}><ThemeChange className="text-gray-200 dark:text-gray-200" /></div>
   
        <button className="absolute  right-6 top-6" onClick={closeMenu}><MdClose className="w-10 text-3xl cursor-pointer" /></button>
        <ul className="flex flex-col font-extralight tracking-tight rounded-l-lg gap-6 px-5 cursor-pointer">
        <li  className="hover:contrast-150 mt-8 " >
                        <Link onClick={closeMenu} to="hero" spy={true} smooth={true} offset={10} duration={500}>HOME</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link onClick={closeMenu} to="about" spy={true} smooth={true} offset={-100} duration={500}>ABOUT ME</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link onClick={closeMenu} to="technologies" spy={true} smooth={true} offset={-140} duration={500}>TECHNOLOGIES</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link onClick={closeMenu}  to="projects" spy={true} smooth={true} offset={-140} duration={500}>PROJECTS</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link onClick={closeMenu} to="contact" spy={true} smooth={true} offset={-60} duration={500}>CONTACT</Link>
                    </li>
        </ul>
        <footer>
           <ul className=" flex   m-6 mt-10 items-center justify-center gap-4 text-2xl cursor-pointer ">
                   
                    <li className=' hover:contrast-150'><a href="https://linkedin.com/in/aryannn-ks/" target="_blank"><FaLinkedin/></a></li>
                    <li className=' hover:contrast-150'><a href="https://github.com/AryanKumarSwain"target="_blank"><FaGithub/></a></li>
                    <li className=' hover:contrast-150'><a href="https://github.com/AryanKumarSwain"target="_blank"><FaInstagram/></a></li>
                    <li className=' hover:contrast-150'><a href="https://x.com/Aryannn_KS"target="_blank"><FaXTwitter /></a></li>
                </ul>
                </footer>
       
      </div>
    </div>
  );
};

export default SideMenu;