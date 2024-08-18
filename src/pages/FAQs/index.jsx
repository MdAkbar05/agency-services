import React, { useState, useRef } from "react";
import faqImg from "../../assets/img/faqImg.png";

import lineShape5 from "../../assets/img/lineShape5.png";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="customContainer flex sm:flex-col lg:-mt-8 md:-mt-6 sm:mt-6 gap-y-12">
      <div className="font-semibold sm:text-xl md:text-2xl lg:text-3xl text-center uppercase">
        How we can help you ?
      </div>
      <div className="flex justify-evenly items-center sm:flex-col md:flex-row gap-x-4">
        <div>
          <img src={faqImg} className="w-96 " alt="FAQ Illustration" />
        </div>
        <div className="faq-container lg:w-1/2  sm:w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item mb-8">
              <div
                className="flex justify-between items-center cursor-pointer bgGradient  linearBorder"
                onClick={() => toggleFAQ(index)}
              >
                <div className="font-normal lg:p-8 md:p-5 sm:p-3 md:text-2xl sm:text-base uppercase">
                  {faq.question}
                </div>
                <span
                  className={`mx-4 transform transition-transform duration-300${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={
                  activeIndex === index
                    ? "md:h-32 sm:h-40 overflow-hidden transition-height duration-300 ease-in-out"
                    : "h-0 overflow-hidden transition-height duration-300 ease-in-out"
                }
              >
                <p className="mt-2 text-gray-600 text-lg md:px-8 sm:px-4 py-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fifth line shape  */}
      <div className="sm:hidden  customContainer md:flex sm:flex-col justify-center items-center gap-y-16 -mt-4">
        <img className="w-full" src={lineShape5} alt="llineShape2" />
      </div>
    </div>
  );
};

// Sample FAQ data
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of web design and development services, including custom website design, e-commerce solutions, and more.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline for building a website depends on the complexity and requirements of the project. Typically, it can take anywhere from a few weeks to a couple of months.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is based on the scope of the project. We offer competitive rates and can provide a detailed quote after discussing your specific needs.",
  },
];

export default FAQs;
