import { HiArrowLongRight } from 'react-icons/hi2'
import Link from 'next/link'
import StrapiImage from './shared/StrapiImage'
import { ButtonList } from './ui/button'

function CommonLanguage({ title, country, view_all }) {
  return (
    <div className="w-full px-6">
      <div className="w-full h-auto   flex flex-col justify-center items-center gap-12 py-16 pt-0 rounded-2xl relative  max-w-[1200px] mx-auto">
        <div className="w-full flex justify-center items-center text-center ">
          <h1 className="text-center text-[32px] md:text-[40px] xl:text-[48px] font-semibold md:max-w-[470px] lg:max-w-full">
            {title}
          </h1>
        </div>
        <div className="w-full flex justify-evenly items-center flex-wrap gap-4 sm:gap-8">
          {country.map((language, i) => {
            return (
              <Link
                key={i}
                href={language.url}
                className="border border-gray-500 rounded-lg flex flex-col justify-start items-start gap-2 p-2 md:p-3 w-[160px] sm:w-[200px] lg:w-[210px] xl:w-[170px] cursor-pointer"
              >
                <StrapiImage
                  image={language.icon}
                  className="w-auto"
                  alt={language.text}
                />
                <div className="w-full flex justify-between items-center ">
                  <p className="text-[12px] lg:text-[14px] font-light">
                    {language.text}
                  </p>
                  <div className="rounded-full border border-green-500 text-green-500 p-1 cursor-pointer group hover:bg-green-500 transition-all duration-200 ease-in">
                    <HiArrowLongRight className="text-[14px] group-hover:text-white transition-all duration-300 ease-in" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="w-full mx-auto flex justify-center items-center mt-2">
          <ButtonList buttons={view_all}></ButtonList>
        </div>
      </div>
    </div>
  )
}

export default CommonLanguage
