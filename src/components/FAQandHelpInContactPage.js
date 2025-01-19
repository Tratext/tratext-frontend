'use client'
import Image from "next/image"
import faqandhelp from '../../public/faq_and_help_img.svg'
import {easeInOut, motion} from 'framer-motion'
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const faqsAndHelp = [
    {
      ques: "Personal Consultation",
      ans: "If you would like a personal consultation or a detailed quote for your translation or language services, please schedule an appointment with one of our experts. We are happy to take the time to discuss your requirements in detail and offer you a tailored solution",
    },
    {
      ques: "Data Protection and Confidentiality",
      ans: "If you would like a personal consultation or a detailed quote for your translation or language services, please schedule an appointment with one of our experts. We are happy to take the time to discuss your requirements in detail and offer you a tailored solution",
    },
    {
      ques: "Conclusion",
      ans: "If you would like a personal consultation or a detailed quote for your translation or language services, please schedule an appointment with one of our experts. We are happy to take the time to discuss your requirements in detail and offer you a tailored solution",
    },
    
  ];
function FAQandHelpInContactPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className="w-full px-6 py-24 ">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-12 justify-center items-center">
         <div className="w-full flex flex-col justify-center items-center gap-2 mx-auto max-w-[750px]">
           <h1
           className="text-[32] md:text-[40px] lg:text-[48px] font-semibold text-black text-center"
           >FAQ and Help</h1>  
           <h1
           className=" text-[16px] xl:text-[18px] text-[#706f6f] text-center font-light"
           >For frequently asked questions and quick answers, please visit our FAQ page. Here you will find useful information about our services, processes, and pricing.</h1>
         </div> 
         <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
           <div
           className="basis-[50%] justify-start items-start">
             <Image src={faqandhelp} className="w-auto h-auto" alt=""/>  
           </div>   
           <div className="basis-[50%] flex flex-col justify-start items-start w-full gap-3">

           {faqsAndHelp.map((faq, index) => (
            <motion.div
              key={index}
              className={`w-full p-4  border-[1px] rounded-lg overflow-hidden  ${activeIndex === index ? "border-green-500" : "border-gray-300"}`}
              initial={{ height: "auto" }}
              animate={{
                height: activeIndex === index ? "auto" : "auto",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div 
              onClick={() => toggleAnswer(index)}
              className={`w-full flex justify-between items-center transition-all duration-500  py-2 ${activeIndex === index ? "border-green-500 border-b-[1px]" : ""} `}>
                <h3 className="text-[18px] text-gray-700 font-semibold">
                  {faq.ques}
                </h3>
                <motion.div
                  className="text-xl"
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown
                    
                    className="text-[20px] mx-2 cursor-pointer hover:text-green-500"
                  />
                </motion.div>
              </div>
              {activeIndex === index && (
                <motion.div
                  key={`answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5}}
                >
                  <p className="text-[16px] text-gray-500 mt-3">{faq.ans}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
            <div className="w-full flex items-start justify-start ">
            <button className="text-[16px] text-white w-full sm:w-[140px] bg-[#139140] rounded-md py-3 px-3">View All FAQ’s</button>
            </div>
            </div>   
         </div>   
        </div>  
    </div>
  )
}

export default FAQandHelpInContactPage