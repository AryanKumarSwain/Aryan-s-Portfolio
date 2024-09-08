import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
const Technologies = () => {
  return (
    <div id="technologies" className="border-b  text-black dark:text-gray-200  border-neutral-800  pb-24 ">
      <h2 className="my-20 text-center text-4xl ">Technologies</h2>
      <div className="flex flex-wrap items-center  justify-center gap-6  ">
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <FaHtml5 className="text-7xl text-orange-600" />
        </div>

        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <IoLogoCss3 className="text-7xl text-blue-600" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <SiTailwindcss className="text-7xl text-cyan-600" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <FaBootstrap className="text-7xl text-purple-700" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <CgFigma className="text-7xl text-black" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <TbBrandFramerMotion className="text-7xl text-white" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <FaGitAlt className="text-7xl text-orange-600" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <FaGithub className="text-7xl text-white" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <SiCplusplus className="text-7xl text-blue-500" />
        </div>
        <div className="relative rounded-2xl bg-black dark:bg-white dark:bg-opacity-10 backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border-4 border-neutral dark:border-neutral-800 p-4 cursor-pointer">
          <SiPython className="text-7xl text-white" />
        </div>
      </div>
    </div>

  )
}

export default Technologies
