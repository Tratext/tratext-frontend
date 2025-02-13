"use client";
import Link from "next/link";
import FooterSlider from "../FooterSlider";
import FooterDropDownSection from "../FooterDropDownSection";
import { easeInOut, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import StrapiImage from "../shared/StrapiImage";
import Banner from "../Banner";

function Footer({ footer }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const ref = useRef(null);
  const Inview = useInView(ref, { once: true });
  const {
    footer_banner,
    copyright,
    social,
    top_footer: {
      top_left_footer: { logo, contact_block },
      top_right_footer: { logos, links_block },
    },
  } = footer;

  return (
    <div className="w-full ">
      {footer_banner ? <Banner {...footer_banner} /> : ""}
      <div className="w-full bg-[#0c1118] pt-[400px] sm:pt-[350px] md:pt-[250px] -mt-[80%] sm:-mt-[46%] md:-mt-[180px] flex flex-col overflow-hidden">
        <div className="max-w-[1100px] mx-auto text-white flex flex-col lg:flex-row gap-6 px-6 xl:px-0 py-6 overflow-hidden">
          <div className="basis-[42%] flex flex-col justify-start items-start gap-4">
            <Link href={logo.url}>
              <StrapiImage image={logo.image} className="!max-w-[250px]" />
            </Link>
            {contact_block?.map((block, i) => (
              <div
                key={i}
                className="flex justify-start items-start gap-2 flex-col"
              >
                <h3 className="xl:text-[20px] text-[18px] text-white font-semibold">
                  {block.title}:
                </h3>
                {block?.list?.map((item, j) => (
                  <div
                    key={j}
                    className="flex justify-center items-start gap-2"
                  >
                    <span className="min-w-[100px] text-gray-500 text-[14px] xl:text-[16px]">
                      {item.title}
                    </span>
                    {item?.link?.map((subItem, k) => (
                      <a href={subItem.url} key={k}>
                        <span className="text-[14px] xl:text-[16px]">
                          {subItem.text}
                        </span>
                        {k < item.link?.length - 1 && (
                          <span className="mx-1">or</span>
                        )}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="basis-[57%]">
            {isMobile ? (
              <>
                {links_block?.map((block, i) => (
                  <FooterDropDownSection
                    key={i}
                    title={block.title}
                    links={block}
                  />
                ))}
                <div className="w-full flex justify-between items-center gap-3 sm:gap-6 py-6">
                  {logos?.map((l, i) => (
                    <a href={l.url} key={i}>
                      <StrapiImage
                        image={l.image}
                        alt={l.name}
                        width={90}
                        height={40}
                        className="cursor-pointer"
                      />
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <div className="w-full rounded-lg p-8 bg-[#181d24] flex flex-col">
                <div className="w-full flex flex-col sm:flex-row justify-between gap-14">
                  {links_block?.map((item, i) => (
                    <div className="w-full flex flex-col gap-3" key={i}>
                      <h3 className="text-white text-[18px] xl:text-[20px] font-semibold">
                        {item.title}
                      </h3>
                      {item?.link?.map((link, j) => (
                        <Link
                          href={link.url}
                          key={j}
                          className="xl:text-[16px] text-[14px] text-white/80"
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="w-full flex justify-end gap-3 items-center  sm:gap-16 ">
                  {logos?.map((l, i) => (
                    <a href={l.url} key={i}>
                      <StrapiImage image={l.image} className="!w-auto !h-10" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <FooterSlider social={social} />
      </div>
    </div>
  );
}

export default Footer;
