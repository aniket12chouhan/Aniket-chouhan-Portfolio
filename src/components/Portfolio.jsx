import React from "react";
import img1 from "../assets/portfolio/food.png";
import img2 from "../assets/portfolio/expanse.png";
import img3 from "../assets/portfolio/language.png";
import img4 from "../assets/portfolio/crypto.png";
import img5 from "../assets/portfolio/e-commerce.png";
import img6 from "../assets/portfolio/movie.png";


const Portfolio = () => {

  const project = [
    {
      img: img6,
      projectLinks: "https://movie-app-blush-rho.vercel.app/"
    },
    {
      img: img4,
      projectLinks: "https://my-crypto-app-puce.vercel.app/"
    },
    {
      img: img1,
      projectLinks: "https://restaurant-app-gamma-nine.vercel.app/"
    },
    {
      img: img2,
      projectLinks: "https://expanse-manager-sable.vercel.app/"
    },
    {
      img: img3,
      projectLinks: "https://language-app-sigma.vercel.app/"
    },

    {
      img: img5,
      projectLinks: "https://fake-store-beige.vercel.app/"
    },

  ]

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl pt-24 lg:pt-16 pb-8 lg:mb-4">
        Portfolio
      </h1>
      <div className=" flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        {
          project.map((proj, index) => (

            <div className=" w-full lg:w-1/4 relative " key={index}>
              <a href={proj.projectLinks} target="_blank">
                <img
                  className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
                  src={proj.img}
                  alt="img"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[#000000] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50 z-10">

                </div>
              </a>
            </div>


          ))
        }
      </div>

    </div>
  );
};

export default Portfolio;
