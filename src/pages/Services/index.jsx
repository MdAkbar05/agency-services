import React from "react";
import VideoMarketing from "../../assets/img/VideoMarketing.png";
import CategoryCard from "../../components/category-card";
import lineShape from "../../assets/img/lineShap.png";
import lineShape2 from "../../assets/img/lineShape2.png";
import water from "../../assets/img/Water.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="customContainer sm:flex sm:flex-col gap-y-16 sm:mb-0  lg:mb-[-60px]">
        <div className="lg:text-3xl md:text-2xl sm:text-xl font-semibold uppercase">
          Solutions come in packs of{" "}
          <span className="text-blue-600">services...</span>
        </div>
        <div className="sm:flex sm:flex-wrap sm:gap-y-8 md:gap-y-28   md:flex-row md:gap-x-28 sm:gap-x-2 md:justify-center md:flex-wrap">
          <CategoryCard
            img={VideoMarketing}
            title="Web Design"
            desc="We provide video content for growth your business and stay rank up in marketplace"
          />
          <CategoryCard
            img={VideoMarketing}
            title="Video Marketing"
            desc="We provide video content for growth your business and stay rank up in marketplace"
          />
          <CategoryCard
            img={VideoMarketing}
            title="Video Marketing"
            desc="We provide video content for growth your business and stay rank up in marketplace"
          />
          <CategoryCard
            img={VideoMarketing}
            title="Video Marketing"
            desc="We provide video content for growth your business and stay rank up in marketplace"
          />
        </div>
      </div>
      <div className="customContainer sm:hidden lg:flex mt-16 ">
        <img className="w-full" src={lineShape} alt="llineShape" />
      </div>

      <div className="customContainer sm:flex sm:flex-col gap-y-4 lg:-mt-16 sm:mt-6">
        <div className="sm:text-xl md:text-4xl font-bold textGradient uppercase">
          Digitalsitepro that can help you to grow your <br /> company for the
          future
        </div>
        <div className="flex justify-between items-center md:flex-row sm:flex-col-reverse">
          <div className="md:text-2xl sm:text-lg md:text-start sm:text-center">
            Work in the IT field includes Web Design, UI/UX Design, <br />{" "}
            Graphics Design,Video editing{" "}
          </div>
          <img src={water} className="w-48" alt="water" />
        </div>
        <Link
          to="#contact"
          className="shadow__btn flex w-fit sm:mx-auto md:mx-0"
        >
          Lets Talk
        </Link>
      </div>
      {/* Second line shape  */}
      <div className="sm:hidden  customContainer md:flex sm:flex-col justify-center items-center gap-y-16 mt-2">
        <img className="w-full" src={lineShape2} alt="llineShape2" />
      </div>
    </>
  );
};

export default Services;
