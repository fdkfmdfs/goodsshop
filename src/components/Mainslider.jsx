import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import slider1 from "../img/mainslide/slide1.jpg";
import slider2 from "../img/mainslide/slide2.jpg";
import slider3 from "../img/mainslide/slide3.jpg";
import slider4 from "../img/mainslide/slide4.jpg";

const Mainslider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          "--swiper-pagination-color": "lavender",
          "--swiper-navigation-color": "turquoise",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        <SwiperSlide className="mainImg">
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mainImg">
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mainImg">
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="mainImg">
          <img src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Mainslider;
