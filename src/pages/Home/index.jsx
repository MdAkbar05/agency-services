import React, { useEffect, useState } from "react";
import Services from "../Services";

import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import Projects from "../projects";
import Carousel from "../../components/carousel";
import Feedbacks from "../Feedbacks";
import FAQs from "../FAQs";
import OurTech from "../OurTech";
import Contacts from "../Contacts";

// import fb from "../../assets/icon/facebook.svg";
// import git from "../../assets/icon/github.svg";
// import inst from "../../assets/icon/instragram.svg";
// import ln from "../../assets/icon/linkedin.svg";
export const Home = () => {
  return (
    <>
      <main className="">
        {/* Hero section  */}
        <div className="customContainer fontJost flex   my-16 justify-between items-center">
          {/* Left Section  */}
          <div className="flex flex-col gap-y-10">
            {/* Main Heading  */}
            <div className="md:text-4xl sm:text-xl font-bold md:space-y-2 sm:space-y-1">
              <div>BUILDING</div>
              <div>DIGITAL PRODUCTS</div>
              <div>THAT TRANSFORM BUSINESSES</div>
            </div>
            <div className="md:text-4xl sm:text-xl font-semibold">
              <span>We Think</span> <span>Animate</span>
            </div>
            {/* Social Icons  */}
            <div className="flex md:gap-x-4 sm:gap-x-2">
              <FiFacebook className="md:size-10 sm:size-8 text-borderColor hover:text-hoverColor cursor-pointer" />
              <RiGithubLine className="md:size-10 sm:size-8 text-borderColor hover:text-hoverColor cursor-pointer" />
              <FiInstagram className="md:size-10 sm:size-8 text-borderColor hover:text-hoverColor cursor-pointer" />
              <FiLinkedin className="md:size-10 sm:size-8 ml-1 text-borderColor hover:text-hoverColor cursor-pointer" />
            </div>
          </div>
          <div className="w-2/5 -mt-8">
            <div className="cube-loader">
              <div className="cube-top"></div>
              <div className="cube-wrapper">
                <span style={{ "--i": 0 }} className="cube-span"></span>
                <span style={{ "--i": 1 }} className="cube-span"></span>
                <span style={{ "--i": 2 }} className="cube-span"></span>
                <span style={{ "--i": 3 }} className="cube-span"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Sections  */}
        <Services />

        {/* Project Section  */}
        <Projects />

        {/* Feedbacks Section  */}
        <Feedbacks />

        {/* FAQs Section  */}
        <FAQs />

        {/* OurTech Section  */}
        <OurTech />

        {/* Contacts Section  */}
        <Contacts />
      </main>
    </>
  );
};

export default Home;
