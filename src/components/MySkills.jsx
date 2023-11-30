import React from "react";
import SkillsCard from "../layouts/SkillsCard";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMui } from "react-icons/si";

const MySkills = () => {


  const mySkills = [
    {
      title: "JavaSrcipt",
      icon: <IoLogoJavascript size={55} className="text-brightColor" />
    },
    {
      title: "React.js",
      icon: <FaReact size={55} className="text-[#00A9FF]" />
    },

    {
      title: "Redux.js",
      icon: <SiRedux size={55} className="text-[#001B79]" />
    },
    {
      title: "HTML5",
      icon: <FaHtml5 size={55} className="text-[#e34c26]" />
    },
    {
      title: "CSS3",
      icon: <FaCss3Alt size={55} className="text-[#2965f1]" />
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap size={55} className="text-[#563d7c]" />
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss size={55} className="text-[#3490dc]" />
    },
    {
      title: "Material UI",
      icon: <SiMui size={55} className="text-[#2196f3]" />
    },

  ]

  return (
    <div className=" min-h-[120vh]  flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-center font-semibold text-4xl mt-24 lg:mt-14 mb-8 lg:mb-4">
        My Skills
      </h1>

      <div className=" flex flex-wrap items-center justify-center gap-5 mt-4">
        {
          mySkills.map((skills, index) => <SkillsCard key={index} skills={skills} />)
        }

      </div>
    </div>
  );
};

export default MySkills;
