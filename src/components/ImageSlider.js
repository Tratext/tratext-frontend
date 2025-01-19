"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useRef } from "react";
import StrapiImage from "./shared/StrapiImage";

const swiperSettings = {
  spaceBetween: 20,
  slidesPerView: 2,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 7,
    },
  },
};

function ImageSlider({ title, slides }) {
  const swiperRef = useRef(null);

  return (
    <div className="w-full px-6 py-8 bg-white">
      <div className="w-full mx-auto text-center flex flex-col justify-center items-center mt-[30px] py-[53px] gap-9 max-w-[1200px]">
        <h1 className="text-[28px] text-black font-normal">{title}</h1>

        <div className="w-full flex justify-center items-center gap-2">
          <div
            className="hidden md:flex justify-center items-center border border-green-500 text-green-500 rounded-full p-1 cursor-pointer group hover:bg-green-500 transition-all duration-200 ease-in"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <HiArrowLongLeft className="text-[20px]  group-hover:text-white transition-all duration-300 ease-in" />
          </div>

          <Swiper
            {...swiperSettings}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="flex justify-center items-center text-center max-w-[1000px] w-full"
          >
            {slides.map((industry, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center">
                <StrapiImage
                  image={industry}
                  key={`industry-${i}`}
                  alt={`Industry logo ${i}`}
                  width={140}
                  height={140}
                  priority={true}
                  className="shadow-lg cursor-pointer w-auto h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="hidden md:flex justify-center items-center border border-green-500 text-green-500 rounded-full p-1 cursor-pointer group hover:bg-green-500 transition-all duration-200 ease-in"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <HiArrowLongRight className="text-[20px] group-hover:text-white transition-all duration-300 ease-in" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
