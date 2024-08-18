// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import avater1 from "../assets/feedback-img/avater1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Feedback from "./Feedback";
import { useEffect, useState } from "react";
const FeedBackCarousel = () => {
  const [width, setWidth] = useState("");

  //  get width for responsive by useEffect
  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width >= 924) {
        setWidth("lg");
      } else if (width >= 668 && width < 924) {
        setWidth("md");
      } else {
        setWidth("sm");
      }
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  console.log(width);

  const feedbacks = [
    {
      item: [
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
      ],
    },
    {
      item: [
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
      ],
    },
    {
      item: [
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
      ],
    },
    {
      item: [
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
        {
          img: avater1,
          name: "Niloy",
          title: "Excellent Designer",
          comment:
            "I absolutely loved your work. The design is amazing and well thought out. Thank you so much for your help!",
        },
      ],
    },
  ];
  return (
    <Swiper
      className="flex justify-center items-center flex-wrap"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      centeredSlides={true}
      effect="coverFlow"
      loop={true}
      spaceBetween={50}
      slidesPerView={width === "lg" ? 3 : width === "md" ? 2 : 1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {feedbacks.map((item, index) => (
        <SwiperSlide className="h-full   transition-all cursor-pointer space-y-10">
          {item.item.map((singleItem, index) => (
            <Feedback
              img={singleItem.img}
              name={singleItem.name}
              title={singleItem.title}
              comment={singleItem.comment}
            />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeedBackCarousel;
