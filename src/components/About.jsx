import React from "react";


const About = () => {


  return (
    <div data-aos="zoom-in"
      data-aos-duration="2000" className=" min-h-full flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor ">
      <div className=" mt-32">
        <h1 className=" text-4xl font-semibold text-center lg:mt-2">
          About Me
        </h1>
      </div>

      <div className="mt-4">
        <div className="mb-10">
          <h2 className=" text-3xl font-semibold">I'm Aniket Chouhan</h2>
          <p className=" mt-4 lg:mt-2">
            Experienced Frontend Developer specializing in
            React.js and Redux.js with a strong command of
            JavaScript, HTML, and CSS. Proficient in building
            interactive and responsive user interfaces,
            implementing state management solutions, and
            utilizing modern frontend technologies.
            Passionate about creating seamless and visually
            appealing web experiences, backed by a track
            record of successfully delivering high-quality
            projects. Adept at collaborating with crossfunctional teams to translate design concepts
            into functional and performant web applications
          </p>
        </div>


      </div>
    </div>
  );
};

export default About;
