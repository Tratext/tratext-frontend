"use client";
import Image from "next/image";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import aboutheroImg from "../../public/abouthero_img.svg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TextGenerateEffect } from "./ui/text-generate-effect";
function AboutHero() {
  return (
    <div className="w-full px-8 py-10 pb-10 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center md:py-8 gap-10 md:gap-5 max-w-[1100px] mx-auto">
        <div className=" basis-[53%] w-full flex flex-col gap-4 justify-center items-start ">
          <div className="w-full flex justify-start items-center gap-2 -mb-3">
            <p className="text-[16px] text-[#706f6f] cursor-pointer">Home</p>
            <MdKeyboardArrowRight className="text-[20px] cursor-pointer" />
            <p className="text-[16px] text-[#181818] cursor-pointer">
              About Us
            </p>
          </div>
          <TextGenerateEffect
            words="Professional Translation and Interpreting Services for Government Agencies
"
            className="mt-8 md:mt-0 text-[32px] sm:text-[38px] md:text-[40px] font-semibold leading-tight max-w-[630px]"
            duration={1.2}
          />

          <motion.p
            key="subheading"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-[#706f6f] max-w-[560px]"
          >
            Welcome to the authorities page of Tratext GmbH. As an experienced
            translation agency, we understand that government agencies rely on
            the highest quality, accuracy, and discretion. Therefore, we offer
            tailored solutions to meet the specific requirements of government
            agencies. Our team of professional translators and interpreters is
            well-equipped to meet the high standards required for translating
            and handling official documents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <button
              key="requestButton"
              className="flex gap-2 justify-center items-center bg-[#ffc107] px-5 py-3 hover:scale-[1.02]  hover:bg-[#ffc71e] transition-all duration-200 ease-in text-[16px] font-semibold  rounded-sm"
            >
              Get Started Now
            </button>
            <div className="flex justify-center items-center">
              <p className="text-[16px] text-gray-950">
                Call Us:{" "}
                <a
                  href="tel:+91 028883 121"
                  className="cursor-pointer text-green-500 "
                >
                  +91 028883 121
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          <motion.div
            key="heroImage"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
            className="basis-[43%] flex justify-center items-center w-full h-auto"
          >
            <Image
              src={aboutheroImg}
              alt="home hero"
              className="max-w-[97%] sm:max-w-[83%] md:max-w-[98%] h-auto"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AboutHero;
