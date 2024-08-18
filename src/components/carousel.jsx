// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/project-img/project1.png";
import img2 from "../assets/project-img/project2.png";
import img3 from "../assets/project-img/project3.png";
import img4 from "../assets/project-img/project4.png";
import img5 from "../assets/project-img/project5.png";
import img6 from "../assets/project-img/project6.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Carousel = () => {
  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <Swiper
      className="flexCenter gap-8"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      centeredSlides={true}
      effect="coverFlow"
      loop={true}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {imgs.map((img, index) => (
        <SwiperSlide className="h-full border-4 border-borderColor md:p-2 sm:p-0.5  shadow-sm shadow-white transition-all cursor-pointer">
          <img src={img} alt="" className="w-full h-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
