"use client";
import { MdKeyboardArrowRight } from "react-icons/md";

import Image from "next/image";
import StrapiImage from "./shared/StrapiImage";
import { BreadCrumbComponent } from "./ui/breadcrumb";

const ContactInformation = ({
  title,
  show_breadcrumb,
  address_text,
  address_location,
  phone_text,
  phone_description,
  phone_numbers,
  email_text,
  email_addresses,
}) => {
  return (
    <div className="w-full bg-gray-100 py-24 px-6">
      <div className="w-full max-w-[1100px] mx-auto flex justity-start items-start flex-col gap-4">
        <div className="w-full flex justify-start items-center gap-2">
          {show_breadcrumb ? <BreadCrumbComponent /> : ""}
        </div>
        <div className="w-full">
          <h1 className="text-[32px] md:text-[40px] xl:text-[48px] text-left font-semibold">
            {title}
          </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 py-6">
          <div className="flex flex-col bg-white justify-start items-center gap-4 w-[100%] p-6 rounded-xl h-[340px] cursor-pointer hover:scale-[1.04] transition-all duration-500">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#e7f3eb] rounded-full">
              <Image
                src="/icons/loaction_icon.svg"
                width={30}
                height={30}
                alt=""
              />
            </div>
            <h3 className="text-[22px] xl:text-[24px] font-semibold text-center">
              {address_text}
            </h3>
            <p className="text-[16px] xl:text-[18px] text-center text-[#706f6f] max-w-[300px]">
              {address_location}
            </p>
          </div>

          <div className="flex flex-col bg-white justify-start items-center gap-4 w-[100%] p-6 rounded-xl h-[340px] cursor-pointer hover:scale-[1.04] transition-all duration-500">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#e7f3eb] rounded-full">
              <Image src="/icons/call_icon.svg" width={30} height={30} alt="" />
            </div>
            <h3 className="text-[22px] xl:text-[24px] font-semibold text-center">
              {phone_text}
            </h3>
            <p className="text-[16px] xl:text-[18px] text-center text-[#706f6f] max-w-[300px]">
              {phone_description}
            </p>
            <div className="w-[100%] mx-auto border-[1px] border-green-500 p-2 flex justify-center items-center rounded-lg gap-2">
              <StrapiImage
                image={phone_numbers[0].icon}
                width={20}
                height={20}
                alt=""
              />
              <div className="flex justify-center items-center">
                <p className="text-[14px] xl:text-[16px] text-gray-950">
                  {phone_numbers[0].text}
                  <a
                    href={phone_numbers[0].url}
                    className="cursor-pointer text-green-500"
                  >
                    {phone_numbers[0].url}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white justify-start items-center gap-4 w-[100%] p-6 rounded-xl h-[340px] cursor-pointer hover:scale-[1.04] transition-all duration-500">
            <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#e7f3eb] rounded-full">
              <Image
                src="/icons/email_icon.svg"
                width={30}
                height={30}
                alt=""
              />
            </div>
            <h3 className="text-[22px] xl:text-[24px] font-semibold text-center">
              {email_text}
            </h3>

            <div className="w-full mx-auto flex flex-col justify-center items-center gap-2">
              {email_addresses?.map((email, i) => {
                return (
                  <div
                    key={i}
                    className="w-[100%] mx-auto border-[1px] border-green-500 p-2 py-3 flex justify-start items-center rounded-lg gap-2"
                  >
                    <StrapiImage
                      image={email.icon}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <div className="flex justify-center items-center">
                      <p
                        className={`text-[14px] xl:text-[15px] text-gray-950 flex`}
                      >
                        {email.text}{" "}
                        <a
                          href={email.url}
                          className="cursor-pointer text-green-500"
                        >
                          {email.url}
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
