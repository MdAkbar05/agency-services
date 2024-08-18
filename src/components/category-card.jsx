import React from "react";

const CategoryCard = ({ img, title, desc }) => {
  return (
    <div className="flex md:flex-col sm:gap-x-4  md:gap-y-4 sm:px-2 md:px-0  md:justify-center sm:justify-around md:items-center  sm:w-full md:size-[360px]  md:border-4 sm:border-2 border-borderColor rounded-2xl bgGradient">
      <img className=" sm:w-14 sm:h-auto md:w-20 my-5 " src={img} alt="icon" />
      <div className="sm:flex sm:flex-col md:justify-center md:items-center lg:gap-y-6 sm:gap-y-1">
        <div className="font-semibold md:text-2xl sm:text-lg">{title}</div>
        <p className="md:text-center sm:text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
