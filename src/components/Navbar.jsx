import { useEffect } from "react";
import logo from "../assets/swainPLogo.png";
import logoLight from "../assets/swainPLogoLight.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SideMenu from "./SideMenu";
import { Link } from 'react-scroll';
import ThemeChange from "./ThemeChange";

const Navbar = () => {
    useEffect(() => {
        const logoDark = document.querySelector('.logo-dark');
        const logoLight = document.querySelector('.logo-light');
        const socialIcons = document.querySelectorAll('.social-icon');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                logoDark?.classList.add('glow-dark');
                logoLight?.classList.add('glow-light');
                
                socialIcons.forEach(icon => {
                    if (document.documentElement.classList.contains('dark')) {
                        icon.classList.add('icon-glow-dark');
                        icon.classList.remove('icon-glow-light');
                    } else {
                        icon.classList.add('icon-glow-light');
                        icon.classList.remove('icon-glow-dark');
                    }
                });
            } else {
                logoDark?.classList.remove('glow-dark');
                logoLight?.classList.remove('glow-light');
                
                socialIcons.forEach(icon => {
                    icon.classList.remove('icon-glow-dark', 'icon-glow-light');
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="fixed container mt-5 lg:mt-0 px-2 flex items-center justify-between z-50">
            <div className="flex flex-shrink-0 p rounded-md">
                
                <img
                    className="hover:contrast-180 w-40 cursor-pointer dark:hidden logo-light p-1  rounded-xl "
                    src={logoLight}
                    alt="logo-light"
                />
                <img
                    className="hover:contrast-180 w-40 cursor-pointer hidden dark:block logo-dark p-1  rounded-xl"
                    src={logo} 
                    alt="logo-dark"
                />
            </div>
            <div className="text-gray-700 dark:text-gray-200 ml-2 flex flex-shrink-0 rounded-full shadow-2xl backdrop-blur-sm bg-black bg-opacity-15 dark:bg-white dark:bg-opacity-15 social-icon">
                <ul className="hidden lg:flex gap-4 lg:gap-8 ml-4 mr-4 p-4 cursor-pointer list-none ">
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
            <div className="m- flex items-center justify-center gap-4 text-2xl cursor-pointer">
                <div className="hidden lg:flex social-icon  rounded-full  p-1">
                    <ThemeChange />
                </div>
                <ul className="text-black dark:text-gray-200 hidden lg:flex m-6 items-center justify-center gap-2 text-2xl cursor-pointer ">
                    {/* Social icons */}
                    <li className="hover:contrast-150  social-icon  rounded-full  p-1">
                        <a href="https://linkedin.com/in/aryannn-ks/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li className="hover:contrast-150  social-icon  rounded-full  p-1">
                        <a href="https://github.com/AryanKumarSwain" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    <li className="hover:contrast-150  social-icon  rounded-full  p-1">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="hover:contrast-150  social-icon  rounded-full  p-1">
                        <a href="https://x.com/Aryannn_KS" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter />
                        </a>
                    </li>
                </ul>
            </div>
            
            <SideMenu />
        </nav>
    );
};

export default Navbar;


