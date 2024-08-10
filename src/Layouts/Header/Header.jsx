import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
const Header = () => {
  const navbar = [
    {
      label: "Home",
      path: "/",
      exact: true,
    },
    {
      label: "About us",
      path: "/about",
      exact: false,
    },
    {
      label: "Service",
      path: "/service",
      exact: false,
    },
    {
      label: "Testimonial",
      path: "/testimonial",
      exact: false,
    },
    // Add more links as needed...
  ];
  return (
    <div className="lg:px-40 lg:py-8 sticky top-0 flex gap-x-14 fontJost ">
      <img className="h-8 w-8 " src={logo} alt="logo" />

      <ul className="flex px-2 gap-x-4 font-semibold text-2xl ">
        {navbar.map((item) => (
          <Link
            className={
              item.exact
                ? "hover:text-secondary transition-colors underline"
                : "hover:text-secondary transition-colors"
            }
            to={item.path}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;
