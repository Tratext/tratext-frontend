"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import StrapiImage from "@/components/shared/StrapiImage";

function Testimonials({ testimonials }) {
  const [testimonialData, setTestimonialData] = useState(testimonials[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: testimonials?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    afterChange: (index) => {
      setTestimonialData(testimonials[index]);
      setCurrentIndex(index);
    },
  };

  const handleNext = () => sliderRef.current.slickNext();
  const handlePrevious = () => sliderRef.current.slickPrev();
  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentIndex(index);
    setTestimonialData(testimonials[index]);
  };
  return (
    <div className="w-full pb-10 bg-white flex flex-col">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center md:px-8 px-6  py-24">
        <div className="basis-[30%] w-full flex justify-start items-start md:justify-center md:items-center">
          <div className="w-full flex flex-col   gap-2">
            <span className="text-[20px] font-semibold text-[#139140]">
              Testimonials
            </span>
            <h1 className="text-[32px] md:text-[40px] xl:text-[48px] tracking-tighter leading-[1.2] font-semibold">
              What Our Clients Says
            </h1>
            <Image
              width={100}
              height={100}
              src="/quotes_img.svg"
              alt="Client Says"
              className="w-[140px] sm:w-[160px] md:w-[200px] h-auto cursor-pointer"
            />
          </div>
        </div>
        <div className="md:basis-[60%] w-full md:max-w-[70%] mt-6 md:mt-0">
          <div className="w-full mx-auto flex flex-col md:justify-end md:items-end float-right">
            <Slider
              ref={sliderRef}
              {...settings}
              className="max-w-[100%] md:max-w-[90%] w-full"
            >
              {testimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.id}
                    className="w-full mx-auto p-2 md:p-4 cursor-pointer"
                  >
                    <p className="text-black">{testimonial.message}</p>
                  </div>
                );
              })}
            </Slider>

            <div className="w-full flex justify-between items-center max-w-[100%] md:max-w-[90%] mt-6 p-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full w-[70px] md:w-[80px] h-[70px] md:h-[80px]">
                  <StrapiImage
                    image={testimonialData.image}
                    alt={testimonialData.name}
                    className="rounded-full cursor-pointer"
                  />
                </div>
                <div className="flex flex-col items-start text-center gap-1">
                  <h3 className="text-black text-[24px] font-semibold">
                    {testimonialData.name}
                  </h3>
                  <div className="flex gap-1">
                    {Array.from(
                      { length: parseInt(testimonialData.stars) },
                      (_, i) => (
                        <Image
                          width={20}
                          height={20}
                          key={i}
                          src="/star.svg"
                          alt="star "
                          className=" cursor-pointer w-auto h-auto"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="md:flex items-center gap-3 hidden">
                <button
                  onClick={handlePrevious}
                  className="w-[40px] h-[40px] flex justify-center items-center rounded-full text-green-500 border-[1px] border-green-500 text-[22px] hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <HiOutlineArrowNarrowLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="w-[40px] h-[40px] flex justify-center items-center rounded-full text-green-500 border-[1px] border-green-500 text-[22px] hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  <HiOutlineArrowNarrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden w-full flex justify-center items-center gap-2 p-2 h-8">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => handleDotClick(i)}
              className={`cursor-pointer rounded-full transition-all duration-300 ease-in-out w-3 h-3 ${
                currentIndex === i
                  ? "bg-green-600 transform scale-125"
                  : "border-[1px] border-green-600"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="border-b-[1px] border-green-500 w-[90%] mx-auto"></div>
    </div>
  );
}

export default Testimonials;
