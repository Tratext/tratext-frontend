"use client";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { fetchLocales } from "@/lib/api";
import Cookies from "js-cookie";

function LanguageSelector() {
  const [locales, setLocales] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const navigator = usePathname();

  useEffect(() => {
    const getLocales = async () => {
      try {
        const localesData = await fetchLocales();
        setLocales(localesData);
      } catch (error) {
        console.error("Failed to fetch locales:", error);
      }
    };

    getLocales();
  }, []);

  useEffect(() => {
    const langFromPath = navigator.split("/")[1];
    setSelectedLanguage(langFromPath);
    Cookies.set("lang", langFromPath, { path: "/" });
  }, [navigator]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (langCode) => {
    const currentPath = navigator.replace(`/${selectedLanguage}`, "");
    Cookies.set("lang", langCode, { path: "/" });
    setIsOpen(false);
    window.location.href = `/${langCode}${currentPath}`;
  };

  const selectedLanguageObj =
    locales.find((lang) => lang.code === selectedLanguage) || {};

  return (
    <div
      className="relative w-[100px] dropdown flex justify-center items-center cursor-pointer"
      onClick={toggleDropdown}
    >
      <div>
        <div
          className="py-2 flex items-center justify-between cursor-pointer"
          onClick={toggleDropdown}
        >
          {selectedLanguageObj?.code && (
            <>
              <Image
                src={`/flags/${selectedLanguageObj.code}.png`} // Adjust flag paths as needed
                alt={selectedLanguageObj.name}
                width={18}
                height={18}
              />
              <span className="ml-2 font-light text-[14px]">
                {selectedLanguageObj.name || selectedLanguageObj.code}
              </span>
            </>
          )}
        </div>

        {isOpen && (
          <div className="absolute mt-2 w-full bg-white z-10 shadow-md shadow-gray-300">
            {locales.map((lang) => (
              <div
                key={lang.code}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => changeLanguage(lang.code)} // Update onClick handler
              >
                <Image
                  src={`/flags/${lang.code}.png`} // Adjust flag paths as needed
                  alt={lang.name}
                  width={18}
                  height={18}
                />
                <span className="ml-2 font-light text-[14px]">{lang.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <IoIosArrowDown className="ml-2 text-[14px]" />
    </div>
  );
}

export default LanguageSelector;
