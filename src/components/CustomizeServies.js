
'use client'
import Image from "next/image";
import custimizedServicesImg from "../../public/custimized_Services_Img.svg";
import { IoIosCheckmark } from "react-icons/io";
import {easeInOut, motion} from 'framer-motion'
import { TextGenerateEffect } from "./ui/text-generate-effect";

const services = [
  "Certified Translations",
  "Interpreting Services for Events, Conferences, and Court Proceedings",
  "Proofreading and Editing of Official Documents",
  "Spelling and Grammar Checks",
  "Style and Consistency Checks",
];

function CustomizeServies() {
  return (
    <div className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col-reverse lg:flex-row gap-16 lg:gap-9">
        <div className="basis-[42%] w-full flex justify-start items-center">
          <div
         
          className="w-full">
          <Image src={custimizedServicesImg} alt="" className="w-auto h-auto cursor-pointer" />
          </div>
        </div>
        <div className="basis-[55%] flex flex-col justify-center items-start gap-4 w-full">
          <TextGenerateEffect
          words=" Customized Services for Authorities"
          className="text-[32px] md:text-[40px] xl:text-[48px] font-semibold text-left leading-snug"
          duration={1}
          />
           
          <p className="text-[16px] lg:text-[18px] font-light text-left">
            Our specialized services for government agencies include:
          </p>
          <div className="w-full flex flex-col justify-start text-left items-start gap-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="w-full flex justify-start items-center gap-2"
              >
                <div className="w-[20px] h-[20px] rounded-full  text-green-500 border-[1px] border-green-500 flex justify-center items-center">
                  <IoIosCheckmark className="text-green-500" />
                </div>
                <p className="text-[16px] xl:text-[18px] text-black font-light">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeServies;
