"use client";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { BreadCrumbComponent } from "./ui/breadcrumb";

const WhyChooseTratextYourECommerce = [
  {
    title: "Industry Knowledge and Experience",
    description:
      "Our translators are not only linguistic experts but also professionals in various industries who possess extensive knowledge of the e-commerce world. They understand the challenges and opportunities associated with expanding into new markets and know how to run a successful e-commerce business internationally.",
  },
  {
    title: "SEO Optimization",
    description:
      "At Tratext, we understand how important it is for your e-commerce website to be visible in search results. Our translators work closely with SEO experts to ensure that your content is optimized both in terms of content and technically. This ensures that your website is more visible in the search results of major search engines such as Google, Bing, and Yahoo, thereby increasing the reach of your brand.",
  },
  {
    title: "Cultural Adaptation",
    description:
      "Cultural adaptation of your e-commerce content is crucial to effectively reach your target audiences. Our translators are able to recognize cultural differences and adapt your content accordingly to ensure that your message is understood and accepted in every language and culture.",
  },
  {
    title: "Fast Delivery",
    description:
      "At Tratext, we know that time is of the essence in the e-commerce industry. Our translators specialize in fast and precise translations, helping you launch your products and services in new markets as quickly as possible.",
  },
  {
    title: "Data Security and Confidentiality",
    description:
      "At Tratext, we place great importance on the security and confidentiality of your data. Our translators and staff sign strict confidentiality agreements, and we use state-of-the-art security systems to protect your data from unauthorized access or loss.",
  },
];

const WhyChoose = ({
  expert_image,
  experts_message,
  experts_name,
  experts_position,
  show_breadcrumb,
  title,
  features,
}) => {
  return (
    <div className="w-full mx-auto px-6 py-28 bg-gray-100">
      <div className="  mx-auto flex flex-col lg:flex-row items-start justify-center gap-10 xl:gap-12">
        <div className="basis-[40%] flex flex-col justify-center items-center text-center max-w-[330px] gap-6">
          <div className="w-auto h-auto rounded-full">
            <Image
              src="/portfolio_img_why_choose_tratext.svg"
              alt="portfolio"
              width="0"
              height="0"
              className="rounded-full w-auto h-auto cursor-pointer"
            />
          </div>
          <p className="text-gray-500 text-[16px] font-light">
            {experts_message}
          </p>
          <div>
            <h4 className="font-semibold text-[16px] text-black">
              {experts_name}
            </h4>
            <p className="text-[16px] text-gray-500 p-1">{experts_position}</p>
          </div>
        </div>
        <div className="basis-[60%] w-full">
          {show_breadcrumb ? <BreadCrumbComponent /> : ""}

          <h1 className="text-[32px] md:text-[46px] max-w-[800px] font-semibold w-full leading-tight py-5 lg:py-8">
            {title}
          </h1>
          <div className="flex flex-col gap-8 justify-start items-start w-full">
            {features.map((item, i) => {
              return (
                <div
                  key={i}
                  className="w-full flex flex-col justify-start items-start gap-4 text-left"
                >
                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-gray-600">
                    {item.title}
                  </h3>
                  <p className="text-[16] md:text-[18px] text-gray-500 font-light leading-snug">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
