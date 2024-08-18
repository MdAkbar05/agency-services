import React from "react";
import Carousel from "../../components/carousel";
import CarouselProject from "../../components/carousel";

import lineShape3 from "../../assets/img/lineShape3.png";

const Projects = () => {
  return (
    <div className="customContainer flex  sm:flex-col md:-mt-8  sm:mt-8 gap-y-6">
      <div className="font-semibold sm:text-xl md:text-2xl lg:text-3xl uppercase ">
        Let’s Look Our Recent{" "}
        <span className="text-blue-600">Project Gallery...</span>
      </div>
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div className="flex gap-4 flex-wrap ">
          <div className="w-fit px-6 py-1  cursor-pointer rounded-lg border-2 border-borderColor hover:bg-hoverColor hover:border-hoverColor">
            All
          </div>
          <div className="w-fit px-6 py-1  cursor-pointer rounded-lg border-2 border-borderColor hover:bg-hoverColor hover:border-hoverColor">
            E-commerce Site
          </div>
          <div className="w-fit px-6 py-1  cursor-pointer rounded-lg border-2 border-borderColor hover:bg-hoverColor hover:border-hoverColor">
            Video Editing
          </div>
          <div className="w-fit px-6 py-1  cursor-pointer rounded-lg border-2 border-borderColor hover:bg-hoverColor hover:border-hoverColor">
            UI/UX Design
          </div>
          <div className="w-fit px-6 py-1  cursor-pointer rounded-lg border-2 border-borderColor hover:bg-hoverColor hover:border-hoverColor">
            Blog Site
          </div>
          <div className="w-fit px-6 py-1  cursor-pointer rounded-lg border-2 border-borderColor hover:bg-hoverColor hover:border-hoverColor">
            Graphics Design
          </div>
        </div>
        <div className="flex lg:h-[550px] sm:h-60 md:h-80 w-full">
          <CarouselProject />
        </div>
        {/* Third line shape  */}
        <div className="sm:hidden  customContainer md:flex sm:flex-col justify-center items-center gap-y-16 mt-2">
          <img className="w-full" src={lineShape3} alt="llineShape2" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
