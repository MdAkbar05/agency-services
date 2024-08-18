import React from "react";
import Feedback from "../../components/Feedback";
import lineShape4 from "../../assets/img/lineShape4.png";
import FeedBackCarousel from "../../components/feedback-carousel";

const Feedbacks = () => {
  return (
    <div className="customContainer lg:flex sm:flex-col md:-mt-8 sm:mt-6 gap-y-12">
      <div className="font-semibold sm:text-2xl md:text-2xl lg:text-3xl text-center uppercase">
        Our Client’s Feedback
      </div>
      <div className="flex flex-wrap gap-4 justify-between items-center py-6">
        <FeedBackCarousel />
      </div>
      {/* Four line shape  */}
      <div className="sm:hidden  customContainer md:flex sm:flex-col justify-center items-center gap-y-16 mt-2">
        <img className="w-full" src={lineShape4} alt="llineShape4" />
      </div>
    </div>
  );
};

export default Feedbacks;
