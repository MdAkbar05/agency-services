import React from "react";
import tech from "../../assets/img/ourTech.png";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { BsThreads } from "react-icons/bs";

const OurTech = () => {
  const socialMedia = [
    {
      icon: <FaFacebookF className="md:size-8 sm:size-6" />,
      link: "https://www.facebook.com/",
      name: "Facebook",
    },
    {
      icon: <FaWhatsapp className="md:size-8 sm:size-6" />,
      link: "https://wa.me/",
      name: "Whats-app",
    },
    {
      icon: <FaInstagram className="md:size-8 sm:size-6" />,
      link: "https://www.instagram.com/",
      name: "Instagram",
    },
    {
      icon: <FaLinkedinIn className="md:size-8 sm:size-6" />,
      link: "https://www.linkedin.com/",
      name: "LinkedIn",
    },
    {
      icon: <FaPinterestP className="md:size-8 sm:size-6" />,
      link: "https://www.pinterest.com/",
      name: "Pinterest",
    },
    {
      icon: <BsThreads className="md:size-8 sm:size-6" />,
      link: "https://www.threads.com/",
      name: "Threads",
    },
    {
      icon: <FaYoutube className="md:size-8 sm:size-6" />,
      link: "https://www.youtube.com/",
      name: "YouTube",
    },
    {
      icon: <FaTiktok className="md:size-8 sm:size-6" />,
      link: "https://www.tiktok.com/",
      name: "TikTok",
    },
  ];
  return (
    <div className="customContainer flex flex-col md:-mt-8 sm:mt-6 md:gap-y-12 sm:gap-y-6">
      <div className="font-semibold sm:text-xl md:text-2xl lg:text-3xl text-center uppercase">
        Our Tech Stack
      </div>

      <div className="flex w-full">
        <img src={tech} alt="OurTech" className="w-3/5 m-auto cursor-pointer" />
      </div>

      <div className="flex justify-between items-center md:flex-row sm:flex-col gap-y-4 md:p-8 sm:p-4 bg-slate-900">
        <div className="space-y-4">
          <div className="sm:text-xl md:text-2xl lg:text-3xl font-bold textGradient uppercase">
            Do You Have Any Project ?
          </div>
          <div className="text-lg">
            Help you to grow your company that is modern, user friendly, good
            CEO, and Clean design
          </div>
        </div>
        <a href="#contact" className="shadow__btn">
          Lets Talk
        </a>
      </div>

      <div className="flex sm:justify-start md:justify-around  items-center flex-wrap md:p-8 sm:p-4 gap-4 bg-slate-900">
        {socialMedia.map((item) => (
          <Link
            to={item.link}
            target="_blank"
            rel="noreferrer"
            key={item.name}
            className="flex justify-center items-center gap-x-2 "
          >
            <div>{item.icon}</div>
            <div className="text-lg font-thin">{item.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurTech;
