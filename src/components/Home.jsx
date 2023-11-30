import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Button from "../layouts/Button";
import img from "../assets/img/imgboy.png";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="zoom-in"
      data-aos-duration="2000" className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-24">
          I'm Aniket Chouhan
          <br />
          <div className="md:flex">
            <span className=" text-brightColor">
              <Typewriter
                options={{
                  autoStart: true,
                  delay: 100,
                  loop: true,
                  cursor: "|",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Front-end ")
                    .pauseFor(700)
                    .deleteAll(150)
                    .start();
                }}
              /> </span>
            Developer
          </div>
        </h1>
        <p>
          Front-End Developer with expertise in React.js, Redux.js,
          HTML, CSS, and JavaScript. Adept at creating interactive
          web applications, translating designs into responsive
          interfaces, and utilizing Redux for efficient state
          management. Strong collaborator with UI/UX teams,
          committed to code quality and continuous learning.
        </p>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"

        >
          <Button title="HIRE ME" />

        </Link>
      </div>
      <div className="flex items-center justify-center md:w-[570px] w-full  ">
        <img className='w-98' src={img} />


      </div>
    </div>
  );
};

export default Home;
