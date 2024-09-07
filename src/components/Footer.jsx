import logo from "../assets/swainLogo.png"
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" mt-10 md:mt-20 text-gray-800 dark:text-gray-200">
            <div className="text-center">
                <img src={logo} alt="Logo" className="w-32 mx-auto mb-2" />
                <div className="w-max flex items-center gap-2 mx-auto">
                    <MdEmail className="w-6" />
                    <span>aryannn.ks@gmail.com</span>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-gray-600  mx-[3%] mt-12 px-1 py-10 ">
                <p>© 2024 SWAIN. All rights reserved.</p>
                <ul className="flex justify-center gap-4">
                    <li className=' hover:contrast-150'><a href="https://linkedin.com/in/aryannn-ks/" target="_blank"><FaLinkedin/></a></li>
                    <li className=' hover:contrast-150'><a href="https://github.com/AryanKumarSwain"target="_blank"><FaGithub/></a></li>
                    <li className=' hover:contrast-150'><a href="https://github.com/AryanKumarSwain"target="_blank"><FaInstagram/></a></li>
                    <li className=' hover:contrast-150'><a href="https://x.com/Aryannn_KS"target="_blank"><FaXTwitter /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
