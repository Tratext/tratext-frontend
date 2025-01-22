import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ButtonList } from "../ui/button";
import StrapiImage from "../shared/StrapiImage";

function Header({ header, direction }) {
  const {
    top_header: { logo, cta_buttons },
    bottom_header: { menu },
  } = header;
  return (
    <div className="w-full bg-white px-8">
      <div className="w-full max-w-[1150px] mx-auto">
        {/* Upper nav */}
        <div className="w-full flex items-center justify-between py-3">
          <div>
            <Link href={logo.url}>
              <StrapiImage
                image={logo.image}
                className="cursor-pointer h-auto !max-w-[175px]"
              />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-3 md:gap-7 ">
            <LanguageSelector />
            <div className="lg:flex justify-center items-center gap-7 hidden ">
              <ButtonList buttons={cta_buttons} />
            </div>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <div className="w-[35px] h-[35px] bg-[#15AB49] text-white flex justify-center items-center rounded-full">
                    <IoMenu className="text-white text-[24px]" />
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetTitle></SheetTitle>
                  <Link href={logo.url}>
                    <StrapiImage
                      image={logo.image}
                      className="cursor-pointer !max-w-[150px] -mt-2"
                    />
                  </Link>
                  <div className="w-full flex flex-col justify-center items-start gap-3 mt-3 px-3">
                    {menu.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex justify-center items-center gap-1 hover:text-[#15AB49] relative group"
                        >
                          <Link
                            href={item.url}
                            className="text-[16px] text-gray-500  hover:text-green-600 flex justify-center items-center"
                          >
                            {item.text}
                          </Link>
                          {item.sub_menu.length > 0 && (
                            // <div className="hidden group-hover:flex flex-col justify-center items-start    bg-white shadow-lg absolute top-full  left-0 py-4 border rounded z-10 ">
                            <div className="hidden group-hover:flex flex-col justify-center items-start    bg-white shadow-lg absolute top-full  left-0 py-4 border rounded z-10 ">
                              {item.sub_menu.map((menu, j) => (
                                <div
                                  key={j}
                                  className="w-full flex flex-col px-1"
                                >
                                  <Link
                                    href={menu.url}
                                    key={j}
                                    className="text-[16px]  hover:bg-green-200  px-4 py-1 cursor-pointer transition-all duration-300 w-full min-w-[190px]"
                                  >
                                    <span className="flex w-full items-center">
                                      {menu.text}
                                    </span>
                                  </Link>
                                  {menu.sub_sub_menu.length > 0 && (
                                    <div className="flex flex-wrap bg-gray-50">
                                      {menu.sub_sub_menu.map((sub_menu, k) => (
                                        <Link
                                          href={sub_menu.url}
                                          key={k}
                                          className="text-[11px] text-gray-600  hover:bg-green-200 px-6 py-1 cursor-pointer transition-all duration-300 w-full"
                                        >
                                          {sub_menu.text}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                    <div className="flex flex-col w-full justify-center items-start gap-4 py-3">
                      <ButtonList buttons={cta_buttons} />
                    </div>
                  </div>
                  <div></div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="text-[#15AB49] border-b border-[#15AB49]" />
        {/* Bottom nav  */}
        <div className="w-full py-2 hidden lg:block">
          <div className="w-full flex justify-between items-center">
            {menu.map((item, i) => (
              <div key={i} className="relative group mr-4">
                <Link
                  href={item.url ? item.url : "/"}
                  className="flex justify-center items-center text-center gap-1 hover:text-[#15AB49]"
                >
                  <p className="flex items-center text-[11px] lg:text-[13px] font-light h-[26px]">
                    <span className="w-[16px]">
                      <StrapiImage image={item.icon} width={14} height={15} />
                    </span>
                    {item.text}
                    {item.sub_menu.length > 0 && (
                      <IoIosArrowDown className="ml-1 text-[14px]" />
                    )}
                  </p>
                </Link>
                {item.sub_menu.length > 0 && (
                  // <div className="hidden group-hover:flex flex-col justify-center items-start  w-[200px] bg-white shadow-lg absolute top-full  left-0 py-4 border rounded z-10 ">
                  <div
                    className={`hidden group-hover:flex flex-wrap  w-[450px] bg-white shadow-lg absolute top-full  ${
                      direction === "ltr" ? "left-0" : "right-0"
                    } py-4 border rounded z-10 `}
                  >
                    {item.sub_menu.map((menu, j) => (
                      <div
                        key={j}
                        className={`w-1/2 flex flex-col px-1 ${
                          menu.sub_sub_menu.length > 0 ? "" : ""
                        }`}
                      >
                        <Link
                          href={menu.url}
                          key={j}
                          className="text-[12px] lg:text-[14px]  hover:bg-green-200 py-1 cursor-pointer transition-all duration-300 w-full"
                        >
                          <span className="flex w-full items-center">
                            <span className="mx-2 w-[16px]">
                              <StrapiImage
                                image={menu.icon}
                                width={16}
                                height={16}
                              />
                            </span>
                            {menu.text}
                          </span>
                        </Link>
                        {menu.sub_sub_menu.length > 0 && (
                          <div className="flex flex-wrap">
                            {menu.sub_sub_menu.map((sub_menu, k) => (
                              <Link
                                href={sub_menu.url}
                                key={k}
                                className="text-[10px] flex w-full items-center lg:text-[12px] text-gray-600  hover:bg-green-200 px-2 py-1 cursor-pointer transition-all duration-300"
                              >
                                <span className="mx-2 w-[16px]">
                                  <StrapiImage
                                    image={sub_menu.icon}
                                    width={16}
                                    height={16}
                                  />
                                </span>
                                {sub_menu.text}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
