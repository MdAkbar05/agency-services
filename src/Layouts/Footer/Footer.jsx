import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
  FaPhone,
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="customContainer lg:flex sm:flex-col mt-8 gap-y-12">
      <div className="flex md:justify-around sm:justify-between flex-wrap gap-y-4">
        <div className="space-y-4">
          <div className="lg:text-2xl md:text-xl sm:text-lg md:font-semibold sm:font-medium text-slate-300">
            Follow Us
          </div>
          <div className="flex sm:flex-row md:flex-col gap-4">
            <div className="flex sm:flex-col md:flex-row gap-x-6 gap-y-4 text-gray">
              <FaFacebookF size={24} />
              <FaWhatsapp size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="flex sm:flex-col md:flex-row gap-x-6 gap-y-4 text-gray">
              <FaInstagram size={24} />
              <FaYoutube size={24} />
              <FaPinterestP size={24} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="lg:text-2xl md:text-xl sm:text-lg md:font-semibold sm:font-medium text-slate-300">
            Follow Us
          </div>
          <div className="flex flex-col gap-y-4 text-sm text-gray">
            <a href="#">Web Design</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Video Editing</a>
            <a href="#">Graphics Design</a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="lg:text-2xl md:text-xl sm:text-lg md:font-semibold sm:font-medium text-slate-300">
            Quick Links
          </div>
          <div className="flex flex-col gap-y-4 text-sm text-gray">
            <a href="/" className="hover:text-gray transition-all">
              Home
            </a>
            <a href="#" className="hover:text-gray transition-all">
              Abouts US
            </a>
            <a href="#contact" className="hover:text-gray transition-all">
              Contacts
            </a>
            <a href="#Testimonial" className="hover:text-gray transition-all">
              Testimonial
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="lg:text-2xl md:text-xl sm:text-lg md:font-semibold sm:font-medium text-slate-300">
            Contacts & Locations
          </div>
          <div className="flex flex-col gap-y-4 text-gray">
            <a
              href="/"
              className="hover:text-gray transition-all flex justify-start items-center gap-x-1"
            >
              <IoLocationSharp /> <span>Agrabad,Chittagong, Bangladesh</span>
            </a>
            <a
              href="/"
              className="hover:text-gray transition-all flex justify-start items-center gap-x-1"
            >
              <FaEarthAmericas /> <span>www.agency-rabbi.com</span>
            </a>
            <a
              href="/"
              className="hover:text-gray transition-all flex justify-start items-center gap-x-1"
            >
              <FaPhone /> <span>+8801879808105</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="text-white w-full sm:mt-4 md:mt-0" />
      <div className="flex justify-between sm:flex-col-reverse md:flex-row items-center sm:mb-6 md:mb-0 sm:pb-6  gap-y-1 py-4">
        <div className="text-slate-300 text-sm">
          &copy; 2023 Agency Rabbi. All rights reserved.
        </div>
        <div className="flex gap-x-4 text-slate-500 text-sm">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
