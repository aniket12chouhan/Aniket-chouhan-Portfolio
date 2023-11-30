import React from "react";

const SkillsCard = ({ skills }) => {

  return (
    <div data-aos="flip-left"
      data-aos-duration="1000" className=" flex flex-col items-center bg-white hover:bg-black hover:text-white transition-all delay-500 hover:-translate-y-2 w-full lg:w-1/4 p-12 gap-4 cursor-pointer rounded-md p-">
      <div>
        <span>{skills.icon}</span>
      </div>
      <h2 className=" text-xl font-semibold">{skills.title}</h2>
    </div>
  );
};

export default SkillsCard;
