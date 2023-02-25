// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import test1 from './../assets/images/test1.png';
import test2 from './../assets/images/test2.png';
import test3 from './../assets/images/test3.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

//eslint-disable-next-line
export default () => {
  const windowWidth = useRef([window.innerWidth]);
  console.log(windowWidth.current[0])
  let perView;
  if (windowWidth.current[0] <= 420) {
    perView = 1;
  } else if (windowWidth.current[0] >= 420 && windowWidth.current[0] <= 900) {
    perView = 2;
  } else {
    perView = 3;
  }
  console.log(perView)
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={perView}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      allowTouchMove={true}
      loop={true}
      freeMode={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div className="mb-16">
            <div
              className={
                isActive
                  ? `bg-[#75b8c880] py-8 min-h-[253px] flex justify-center items-center rounded-lg px-6`
                  : `bg-[#A1C5CF] py-4 min-h-[179px] flex justify-center items-center rounded-lg px-6`
              }
            >
              &quot;Current slide is {isActive ? "active" : "not active"} ipsum dolor
              sit amet consectetur, adipisicing elit. Itaque suscipit
              repellendus magni illum quidem! Minima voluptate quo similique
              incidunt quibusdam.&quot;
            </div>
            <div className="flex justify-center items-center my-4">
              <img src={test1} alt="Testimonial" />
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="mb-16">
            <div
              className={
                isActive
                  ? `bg-[#75b8c880] py-8 min-h-[253px] flex justify-center items-center rounded-lg px-6`
                  : `bg-[#A1C5CF] py-4 min-h-[179px] flex justify-center items-center rounded-lg px-6`
              }
            >
              &quot;Current slide is {isActive ? "active" : "not active"} ipsum dolor
              sit amet consectetur, adipisicing elit. Itaque suscipit
              repellendus magni illum quidem! Minima voluptate quo similique
              incidunt quibusdam.&quot;
            </div>
            <div className="flex justify-center items-center my-4">
              <img src={test2} alt="Testimonial" />
            </div>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div className="mb-16">
            <div
              className={
                isActive
                  ? `bg-[#75b8c880] py-8 min-h-[253px] flex justify-center items-center rounded-lg px-6`
                  : `bg-[#A1C5CF] py-4 min-h-[179px] flex justify-center items-center rounded-lg px-6`
              }
            >
              &quot;Current slide is {isActive ? "active" : "not active"} ipsum dolor
              sit amet consectetur, adipisicing elit. Itaque suscipit
              repellendus magni illum quidem! Minima voluptate quo similique
              incidunt quibusdam.&quot;
            </div>
            <div className="flex justify-center items-center my-4">
              <img src={test3} alt="Testimonial" />
            </div>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
