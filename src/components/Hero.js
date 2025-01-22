"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowForwardSharp } from "react-icons/io5";
import { ButtonList } from "./ui/button";
import StrapiImage from "./shared/StrapiImage";

function Hero({
  first_title,
  highlighted_title,
  last_title,
  sub_title,
  rating_images,
  rating,
  rating_text,
  main_image,
  percentage,
  percentage_text,
  percentage_logo,
  cta_buttons,
}) {
  return (
    <div className="w-full px-8 py-10 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center md:py-8 gap-10 lg:gap-5 max-w-[1200px] mx-auto">
        <div className="basis-[48%] flex flex-col gap-5 justify-start items-start">
          <AnimatePresence>
            <motion.span
              key="heading"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className="mt-8 text-[32px] md:text-[40px] font-semibold leading-tight max-w-[430px]"
            >
              {first_title}{" "}
              <span className="bg-green-500 text-white px-1 rounded-sm">
                {highlighted_title}
              </span>{" "}
              {last_title}
            </motion.span>
            <motion.p
              key="subheading"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.1,
              }}
              className="text-[14px] text-black max-w-[410px]"
            >
              {sub_title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.2,
              }}
              className="flex flex-col md:flex-row gap-4 w-full"
            >
              <ButtonList buttons={cta_buttons} />
            </motion.div>
            <motion.div
              key="portfolioIcons"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.3,
              }}
              className="flex justify-center items-center gap-2"
            >
              <div className="flex justify-center items-center">
                {rating_images.map((icon, i) => (
                  <StrapiImage
                    key={`icon-${i}`}
                    image={icon}
                    alt="icon"
                    className={`${i !== 0 && "-ml-5"} cursor-pointer`}
                    width={48}
                    height={48}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center gap-3 -mt-1">
                <Image
                  src="/icons/Star_icon.svg"
                  alt="star"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <p>({rating})</p>
              </div>
            </motion.div>
            <motion.p
              key="trustText"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1],
                delay: 0.4,
              }}
              className="text-[15px] -mt-2"
            >
              {rating_text}
            </motion.p>
          </AnimatePresence>
        </div>
        <>
          <div
            key="heroImage"
            className="basis-[45%] flex justify-center items-center mt-4"
          >
            <div className="    w-[85%] h-[85%] rounded-[20px] bg-[#15AB49]">
              <div className="relative  ">
                <StrapiImage
                  image={main_image}
                  alt="home hero"
                  className="-ml-5 mt-5  w-[100%]"
                  priority="true"
                />
                <div
                  style={{
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                  }}
                  className=" bg-white flex flex-col justify-center items-center w-[110px] md:w-[140px] p-2 pb-3 md:p-3 rounded-2xl absolute  top-[55%] -right-8 md:gap-1"
                >
                  <h2 className="text-[24px] md:text-[30px] xl:text-[32px] font-bold text-gray-800">
                    {percentage}%
                  </h2>
                  <div className="flex justify-center items-center text-[10px] md:text-[12px] gap-1 text-gray-700 group cursor-pointer">
                    <IoArrowForwardSharp className="text-[13px] md:text-[15px]  font-light rotate-[-38deg] text-gray-700 group-hover:rotate-0 transition-all duration-300" />
                    <p className="font-medium group-hover:underline">
                      {percentage_text}
                    </p>
                  </div>
                  <StrapiImage
                    image={percentage_logo.image}
                    className="w-[64px] md:w-[80px] my-1 lg:my-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default Hero;