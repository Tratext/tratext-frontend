"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { easeInOut, motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ButtonList } from "./ui/button";

function FAQS({ title, faqs, cta_button }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const ref = useRef(null);
  const Inview = useInView(ref, { once: true });

  const halfIndex = Math.ceil(faqs?.length / 2);
  const firstHalf = faqs.slice(0, halfIndex);
  const secondHalf = faqs.slice(halfIndex);
  return (
    <div className="w-full py-24 bg-white flex flex-col">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-12 px-6  xl:px-0">
        <h1 className="w-full flex justify-center items-center text-center text-[32px] md:text-[40px] lg:text-[48px] text-black font-semibold">
          {title}
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-6 h-auto">
          {/* First Half */}
          <div className="w-full flex flex-col overflow-hidden transition-all duration-300 gap-4">
            {firstHalf.map((faq, index) => (
              <motion.div
                key={index}
                className={`max-w-[100%] p-4 border-[1px] rounded-lg overflow-hidden ${
                  activeIndex === index ? "border-green-500" : "border-gray-300"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div
                  onClick={() => toggleAnswer(index)}
                  className={`w-full flex justify-between items-center transition-all duration-500 py-2 ${
                    activeIndex === index
                      ? "border-green-500 border-b-[1px]"
                      : ""
                  }`}
                >
                  <h3 className="text-[18px] text-gray-700 font-semibold">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="text-xl"
                    initial={false}
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <IoIosArrowDown className="text-[20px] mx-2 cursor-pointer hover:text-green-500" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      key={`answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden mt-2"
                    >
                      <p className="text-[16px] text-gray-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Second Half */}
          <div className="w-full flex flex-col overflow-hidden transition-all duration-300 gap-4">
            {secondHalf.map((faq, index) => (
              <motion.div
                key={index + firstHalf?.length}
                className={`max-w-[100%] p-4 border-[1px] rounded-lg overflow-hidden ${
                  activeIndex === index + firstHalf?.length
                    ? "border-green-500"
                    : "border-gray-300"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div
                  onClick={() => toggleAnswer(index + firstHalf?.length)}
                  className={`w-full flex justify-between items-center transition-all duration-500 py-2 ${
                    activeIndex === index + firstHalf?.length
                      ? "border-green-500 border-b-[1px]"
                      : ""
                  }`}
                >
                  <h3 className="text-[18px] text-gray-700 font-semibold">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="text-xl"
                    initial={false}
                    animate={{
                      rotate:
                        activeIndex === index + firstHalf.length ? 180 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <IoIosArrowDown className="text-[20px] mx-2 cursor-pointer hover:text-green-500" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index + firstHalf?.length && (
                    <motion.div
                      key={`answer-${index + firstHalf?.length}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden mt-2"
                    >
                      <p className="text-[16px] text-gray-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full mx-auto flex justify-center items-center">
          {/* <button className="text-[16px] text-white w-full sm:w-[140px] bg-[#139140] rounded-md py-3 px-3 hover:scale-[1.03] transition-all duration-300 hover:bg-[#14a848]">View All FAQ’s</button> */}
          <ButtonList buttons={cta_button} />
        </div>
      </div>
    </div>
  );
}

export default FAQS;
