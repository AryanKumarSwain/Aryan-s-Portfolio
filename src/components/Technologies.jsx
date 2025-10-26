import {
  RiReactjsLine
} from "react-icons/ri";
import {
  FaHtml5,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
  FaCode,
  FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiReact,
  SiRedux,
  SiPostman,
  SiCanva,
  SiVisualstudiocode,
  SiNpm,
  SiBitbucket,
  SiJira
} from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs
} from "react-icons/io5";
import { CgFigma } from "react-icons/cg";
import { TbBrandFramerMotion } from "react-icons/tb";

const Technologies = () => {
  const icons = [
    { Icon: FaHtml5, color: "text-orange-600" },
    { Icon: IoLogoCss3, color: "text-blue-600" },
    { Icon: IoLogoJavascript, color: "text-yellow-400" },
  { Icon: RiReactjsLine, color: "text-cyan-400" },
  { Icon: SiTypescript, color: "text-sky-500" },
  { Icon: SiTailwindcss, color: "text-cyan-600" },
    { Icon: FaBootstrap, color: "text-purple-700" },
    { Icon: CgFigma, color: "text-black" },
    { Icon: TbBrandFramerMotion, color: "text-white" },
    { Icon: FaGitAlt, color: "text-orange-600" },
    { Icon: FaGithub, color: "text-white" },
    { Icon: SiCplusplus, color: "text-blue-500" },
    { Icon: SiPython, color: "text-white" },
    { Icon: SiExpress, color: "text-gray-300" },
    { Icon: IoLogoNodejs, color: "text-green-500" },
    { Icon: SiMysql, color: "text-sky-600" },
    { Icon: SiMongodb, color: "text-green-600" },
    { Icon: SiBitbucket, color: "text-sky-500" },
    { Icon: SiJira, color: "text-blue-500" },
    { Icon: SiVisualstudiocode, color: "text-blue-600" },
    { Icon: SiRedux, color: "text-violet-600" },
    { Icon: SiPostman, color: "text-orange-400" },
    { Icon: SiNpm, color: "text-red-600" },
    { Icon: SiCanva, color: "text-pink-400" },
  ];

  return (
    <div
      id="technologies"
      className="border-b border-neutral-800 pb-24 text-black dark:text-gray-200"
    >
      <h2 className="my-20 text-center text-4xl">Technologies</h2>

      <div className="marquee-viewport mt-6">
        <div className="marquee-track">

          {/* Main group */}
          <div className="marquee-group">
            {icons.map(({ Icon, color }, index) => (
              <div
                key={index}
                className="relative cursor-pointer rounded-2xl border-4 border-neutral bg-black bg-opacity-10 p-4 backdrop-blur-sm hover:bg-opacity-20 
                  dark:border-neutral-800 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20"
              >
                <Icon className={`text-7xl ${color}`} />
              </div>
            ))}
          </div>

          {/* Duplicate group for seamless scroll */}
          <div className="marquee-group" aria-hidden="true">
            {icons.map(({ Icon, color }, index) => (
              <div
                key={`dup-${index}`}
                className="relative cursor-pointer rounded-2xl border-4 border-neutral bg-black bg-opacity-10 p-4 backdrop-blur-sm hover:bg-opacity-20 
                  dark:border-neutral-800 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20"
              >
                <Icon className={`text-7xl ${color}`} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Technologies;
