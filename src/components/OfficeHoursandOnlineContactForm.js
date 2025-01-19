'use client'
import Image from "next/image";
import clock from "../../public/icons/clock_icon.svg";
import validityIcon from "../../public/icons/validity_icon.svg";
import checkHuman from "../../public/check_human_img.svg";
import { useMediaQuery } from "react-responsive";
const timetable = [
  {
    day: "Thursday",
    time: "9 AM - 4 PM",
  },
  {
    day: "Monday",
    time: "9 AM - 4 PM",
  },
  {
    day: "Friday",
    time: "9 AM - 4 PM",
  },

  {
    day: "Tuesday",
    time: "9 AM - 4 PM",
  },
  {
    day: "Saturday",
    time: "Close",
  },
  {
    day: "Wednesday",
    time: "9 AM - 4 PM",
  },

  {
    day: "Sunday",
    time: "Close",
  },
];
function OfficeHoursandOnlineContactForm() {
  return (
    <div className="w-full bg-gray-100 px-6 py-8">
      <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-6 ">
        <div
        className="basis-[49%]  lg:h-[560px] flex flex-col justify-start items-start gap-3 px-6 py-8 w-full bg-white rounded-xl  cursor-pointer">
          <h1
          className="text-[32px] xl:text-[34px] font-semibold text-left"
          >Office Hours</h1>
          
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[430px]">
            {timetable.map((time, i) => {
              return (
                <div key={i} className=" flex gap-2 justify-start items-center">
                  <Image src={clock} alt="" width={20} height={20} />
                  <p className="text-[14px] 2xl:text-[16px] text-black">
                    {time.day}
                  </p>
                  <p className="text-[14px] 2xl:text-[16px] text-green-500">
                    {time.time}
                  </p>
                </div>
              );
            })}
          </div>
          <h2 className="text-[22px] lg:text-[24px] text-black font-semibold">
            Specialized Contact Options
          </h2>
          <p className="text-[15px] 2xl:text-[17px] text-[#706f6f] tracking-tight -mt-2">
            For specific needs, we have set up specialized contact options:
          </p>
          <h3 className="text-[18px] xl:[20px] font-semibold text-black">
            Private Customers
          </h3>
          <p className="text-[14px] xl:text-[16px] text-[#706f6f] -mt-2">
            If you want to contact us as a private customer
          </p>
          <button className="w-[110px] text-white text-[14px] rounded-sm py-2 px-3 bg-[#139140] mb-1 hover:bg-[#15a146] hover:scale-[1.03] transition-all duration-300">
            Customer
          </button>
          <h3 className="text-[18px] xl:[20px] font-semibold text-black">
            Authorities
          </h3>
          <p className="text-[14px] xl:text-[16px] text-[#706f6f] -mt-2">
            To reach our authorities hotline
          </p>
          <button className="w-[110px] text-white text-[14px] rounded-sm py-2 px-3 bg-[#139140] hover:bg-[#15a146] hover:scale-[1.03] transition-all duration-300">
            Authorities
          </button>
        </div>
        <div
        
        className="basis-[49%]  lg:h-[560px] flex flex-col justify-start items-start gap-4 px-6 py-8 w-full bg-white rounded-xl  cursor-pointer">
          <h1
          className="text-[32px] xl:text-[34px] font-semibold text-left">
            Online Contact Form
          </h1>
          <p className="text-[16px] 2xl:text-[18px] text-[#706f6f] max-w-[96%]">
            Visit our website and fill out our online contact form for a quick
            and easy way to get in touch with us.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <fieldset className="border border-gray-300 rounded-lg p-1 w-full ">
              <legend className="text-[14px] px-2 ml-3 text-gray-400">
                First Name*
              </legend>
              <input
                type="text"
                className="border-none outline-none h-full w-full py-1 px-4 text-gray-500 text-[14px] "
              />
            </fieldset>
            <fieldset className="border border-gray-300 rounded-lg p-1 w-full ">
              <legend className="text-[14px] px-2 ml-3 text-gray-400">
                Last Name*
              </legend>
              <input
                type="text"
                className="border-none outline-none h-full w-full py-1 px-4 text-gray-500 text-[14px] "
              />
            </fieldset>
          </div>
          <div className="w-full flex justify-start items-center -mt-2">
            <Image
              src={validityIcon}
              alt="validityIcon"
              width={20}
              height={20}
            />
            <p className="text-yellow-400 text-[12px]">Enter a valid name</p>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4">
            <fieldset className="border border-gray-300 rounded-lg p-1 w-full ">
              <legend className="text-[14px] px-2 ml-3 text-gray-400">
                Email*
              </legend>
              <input
                type="text"
                className="border-none outline-none h-full w-full py-1 px-4 text-gray-500 text-[14px] "
              />
            </fieldset>
            <fieldset className="border border-gray-300 rounded-lg p-1 w-full ">
              <legend className="text-[14px] px-2 ml-3 text-gray-400">
                Phone*
              </legend>
              <input
                type="tel"
                className="border-none outline-none h-full w-full py-1 px-4 text-gray-500 text-[14px] "
              />
            </fieldset>
          </div>
          <fieldset className="border border-gray-300 rounded-lg p-1 w-full ">
            <legend className="text-[14px] px-2 ml-3 text-gray-400">
              Message*
            </legend>
            <textarea className="border-none outline-none w-full py-1 px-4 text-gray-500 text-[14px] resize-none h-[100px]"></textarea>
          </fieldset>
          <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-3">
            <button className="sm:w-[130px] w-full text-white text-[14px] rounded-sm p-3 bg-[#139140] mb-1 hover:bg-[#15a146] hover:scale-[1.03] transition-all duration-300">
              Send Message
            </button>
            <Image
              src={checkHuman}
              alt="checkHuman"
              className="w-full sm:w-[210px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeHoursandOnlineContactForm;
