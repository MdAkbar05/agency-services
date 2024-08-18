import React from "react";
import symbol from "../assets/feedback-img/separete.png";

const Feedback = ({ img, name, title, comment }) => {
  return (
    <div className="flex flex-col  gap-8 py-6 px-4 lg:w-96 lg:h-[220px] sm:w-fit overflow-hidden sm:h-fit bg-[#15151566] linearBorder ">
      <div className="flex gap-x-4 items-center justify-start">
        <img src={img} className="md:w-12 sm:w-8" alt="avater1" />
        <div className="text-base flex justify-between items-center w-full">
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-base font-thin text-slate-400">{title}</div>
          </div>
          <img src={symbol} className="w-11 h-10" alt="avater1" />
        </div>
      </div>
      <div className="sm:text-sm md:text-base">{comment}</div>
    </div>
  );
};

export default Feedback;
