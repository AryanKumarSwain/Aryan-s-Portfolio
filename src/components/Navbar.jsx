
import logo from "../assets/swainPLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import SideMenu from "./SideMenu";
import { Link } from 'react-scroll';
import ThemeChange from "./ThemeChange";

const Navbar = () => {
    // useEffect(() => {
    //     const navBar = document.querySelector('nav');

    //     window.addEventListener('scroll', () => {
    //         if (window.scrollY > 50) {
    //             navBar.classList.add('bg-white', 'bg-opacity-5', 'backdrop-blur-lg', 'shadow-sm');
    //         } else {
    //             navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
    //         }
    //     });

    //     return () => {
    //         window.removeEventListener('scroll', () => {});
    //     };
    // }, []);
    return (
        <nav className="   fixed container w-full mt-5 lg:mt-0 px-2  flex items-center justify-between z-50">
            <div className="flex flex-shrink-0 items-center">
                <img className="hover:contrast-180 w-36 cursor-pointer" src={logo} alt="logo" />
            </div>
            <div className=" text-gray-800 dark:text-gray-200 ml-2 flex flex-shrink-0 rounded-full shadow-xl backdrop-blur-sm bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10">
                <ul className="hidden md:flex gap-4   lg:gap-8 ml-4 mr-4 p-4 cursor-pointer list-none">
                    <li className="hover:contrast-150">
                        <Link to="hero" spy={true} smooth={true} offset={10} duration={500}>HOME</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>ABOUT ME</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link to="technologies" spy={true} smooth={true} offset={-140} duration={500}>TECHNOLOGIES</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link to="projects" spy={true} smooth={true} offset={-140} duration={500}>PROJECTS</Link>
                    </li>
                    <li className="hover:contrast-150">
                        <Link to="contact" spy={true} smooth={true} offset={-60} duration={500}>CONTACT</Link>
                    </li>
                </ul>
            </div>
            <div className="-ml-0.5 m-6 flex items-center justify-center gap-4 text-2xl cursor-pointer">
               <div className="hidden lg:flex"> <ThemeChange /></div>
               

                
                <ul className="text-gray-700 dark:text-gray-200 hidden lg:flex m-6 items-center justify-center gap-4 text-2xl cursor-pointer">
                    <li className='hover:contrast-150 '><a href="https://linkedin.com/in/aryannn-ks/" target="_blank"><FaLinkedin /></a></li>
                    <li className='hover:contrast-150'><a href="https://github.com/AryanKumarSwain" target="_blank"><FaGithub /></a></li>
                    <li className='hover:contrast-150'><a href="https://github.com/AryanKumarSwain" target="_blank"><FaInstagram /></a></li>
                    <li className='hover:contrast-150'><a href="https://x.com/Aryannn_KS" target="_blank"><FaXTwitter /></a></li>
                </ul>
            </div>
            <SideMenu />
        </nav>
    );
};

export default Navbar;
