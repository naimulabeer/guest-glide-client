/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "./styles.css";

const SwiperImage = ({ images }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
      >
        <SwiperSlide>
          <img src={images[0]} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} alt="image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} alt="image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperImage;
