'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { useRef, useState } from "react";
import certifedtranslationImg from "../../public/certified_Translation_img.svg";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const CertifiedTranslation = [
  {
    img: certifedtranslationImg,
    title: "Certified Translations",
    des: "Tratext is a member of the Federal Association of Interpreters and Translators (BDÜ), which represents the interests of sworn translators and interpreters. Our sworn translators are qualified to provide certified translations for official documents such as certificates, contracts, diplomas, certificates, and legal documents.",
  },
  {
    img: certifedtranslationImg,
    title: "Certified Translations",
    des: "Tratext is a member of the Federal Association of Interpreters and Translators (BDÜ), which represents the interests of sworn translators and interpreters. Our sworn translators are qualified to provide certified translations for official documents such as certificates, contracts, diplomas, certificates, and legal documents.",
  },
  {
    img: certifedtranslationImg,
    title: "Certified Translations",
    des: "Tratext is a member of the Federal Association of Interpreters and Translators (BDÜ), which represents the interests of sworn translators and interpreters. Our sworn translators are qualified to provide certified translations for official documents such as certificates, contracts, diplomas, certificates, and legal documents.",
  },
];

const swiperSettings = {
  spaceBetween: 100,
  slidesPerView: 1,
  speed: 800,
};
function CertifiedTranslationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleDotClick = (index) => {
    swiperRef.current?.slideTo(index);
    setCurrentIndex(index);
  };
  return (
    <div className="w-full px-6 py-8 bg-gray-100">
      <div className="w-full mx-auto text-center flex justify-center items-center mt-[30px] py-[53px] gap-9 max-w-[1250px] flex-col md:flex-row">
        <div className="w-full flex justify-center items-center gap-2 ">
          <div
            className="hidden md:flex justify-center items-center border border-green-500 text-green-500 rounded-full p-2 cursor-pointer group hover:bg-green-500 transition-all duration-200 ease-in"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <HiArrowLongLeft className="text-[22px] group-hover:text-white transition-all duration-300 ease-in" />
          </div>

          <Swiper
            {...swiperSettings}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="flex justify-center items-center text-center max-w-[1100px] w-full"
          >
            {CertifiedTranslation.map((translation, i) => (
              <SwiperSlide key={i} className="w-full bg-white rounded-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center w-full p-6 gap-6 cursor-pointer">
                  <div className="basis-[60%] max-w-[600px] flex flex-col gap-4 items-start">
                    <h1
                      className="text-[32px] md:text-[40px] xl:text-[48px] text-black font-semibold text-left leading-tight"
                    >{translation.title}</h1>

                    <p className="text-[16px] lg:text-[18px] text-black font-light text-left">
                      {translation.des}
                    </p>
                  </div>
                  <div className="basis-[40%] w-full ">
                    <div
                      className="w-full"
                    >
                      <Image
                        src={translation.img}
                        alt={`translation ${i}`}
                        width={140}
                        height={140}
                        priority={true}
                        className="basis-[50%] cursor-pointer w-auto h-auto "
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className="hidden md:flex justify-center items-center border border-green-500 text-green-500 rounded-full p-2 cursor-pointer group hover:bg-green-500 transition-all duration-200 ease-in"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <HiArrowLongRight className="text-[22px] group-hover:text-white transition-all duration-300 ease-in" />
          </div>
        </div>
        <div className="md:hidden w-full flex justify-center items-center gap-2 p-2 h-8">
          {CertifiedTranslation.map((_, i) => (
            <AnimatePresence key={i} mode="wait">
              {currentIndex === i ? (
                <div
                  
                  onClick={() => handleDotClick(i)}
                  className="cursor-pointer rounded-full bg-green-600 w-3 h-3"
                ></div>
              ) : (
                <div
                  
                  onClick={() => handleDotClick(i)}
                  className="cursor-pointer rounded-full border-[1px] border-green-600 w-3 h-3"
                ></div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertifiedTranslationSlider;
