import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";

import { MdOutlineHome, MdContactSupport } from "react-icons/md";
import { FaServicestack } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { VscFeedback } from "react-icons/vsc";

const Header = () => {
  const [pathname, setPathname] = useState("");
  // Get location of the header
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const navbar = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Services",
      path: "/services",
    },
    {
      label: "Feedbacks",
      path: "/feedbacks",
    },
    {
      label: "Abouts",
      path: "/abouts",
    },
    // Add more links as needed...
  ];
  const mobileNav = [
    {
      label: <FaServicestack size={32} />,
      path: "/services",
    },
    {
      label: <VscFeedback size={32} />,
      path: "/feedbacks",
    },
    {
      label: <MdOutlineHome size={32} />,
      path: "/",
    },
    {
      label: <GoProjectSymlink size={32} />,
      path: "/projects",
    },
    {
      label: <MdContactSupport size={32} />,
      path: "/abouts",
    },
    // Add more links as needed...
  ];
  return (
    <>
      <div className="customContainer bg-primary lg:py-8 md:py-6 sm:py-2 sticky top-0 flex md:gap-x-14 sm:gap-x-4 items-center md:justify-between sm:justify-between fontJost z-50 ">
        <Link to="/">
          <img className="min-w-4 max-w-8 " src={logo} alt="logo" />
        </Link>
        {/* Navbar  */}
        <ul className="sm:hidden md:flex px-2 gap-x-6 font-medium md:text-lg lg:text-2xl">
          {navbar.map((item) => (
            <li className="relative">
              <Link
                className={
                  item.path === pathname
                    ? "afterEffect"
                    : "text-secondary hover:text-white transition-colors"
                }
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href="#contact" className="shadow__btn text-lg  ">
          Lets Talk
        </a>
      </div>

      {/* Mobile  navnar*/}
      <div className="customContainer md:hidden  bg-primary py-2 fixed bottom-0 left-5 w-full flex md:gap-x-14 sm:gap-x-4 items-center sm:justify-center fontJost z-50 ">
        <ul className="flex   px-2 gap-x-6 font-medium md:text-2xl sm:text-2xl ">
          {mobileNav.map((item) => (
            <li className="relative">
              <Link
                className={
                  item.path === pathname
                    ? "text-borderColor"
                    : "text-secondary hover:text-white transition-colors"
                }
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
