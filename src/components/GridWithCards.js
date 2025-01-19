"use client"
import { easeInOut, motion } from 'framer-motion'
import StrapiImage from './shared/StrapiImage'
import Image from 'next/image'
import Link from 'next/link'
import { Button, ButtonList } from './ui/button'
import { useMediaQuery } from 'react-responsive'
const GridWithCards = (props) => {
  const renderContent = () => {
    switch (props.design) {
      case 'services':
        return <ServicesGrid {...props} />
      case 'sustainability':
        return <SustainabilityGrid {...props} />
      case 'quality':
        return <QualityGrid {...props} />
      case 'legal':
        return <LegalGrid {...props} />
      case 'features':
        return <FeaturesGrid {...props} />
      default:
        return <ServicesGrid {...props} />
    }
  }

  return <>{renderContent()}</>
}

const ServicesGrid = ({ title, description, cards, view_all }) => {
  return (
    <div className="w-full py-24 bg-gray-100">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-12 px-6">
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <h1 className="text-center text-[36px]  sm:text-[44px] lg:text-[48px] font-semibold text-black leading-tight max-w-[800px] w-full">
            {title}
          </h1>
          <p className="text-center text-gray-700 text-[16px] md:text-[18px]">
            {description}
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {cards.map((service, i) => {
            return (
              <div
                key={i}
                className=" max-w-[450px] lg:max-w-[350px] flex justify-start items-start gap-3 flex-col bg-white p-7 rounded-xl text-black hover:bg-green-500 cursor-pointer hover:text-white group overflow-hidden relative transition-all duration-300 hover:scale-[1.03]"
              >
                <Image
                  width={100}
                  height={100}
                  src="/leave_image.svg"
                  alt=""
                  className="text-green-500 absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 w-auto h-auto"
                />
                <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#e7f3eb] group-hover:bg-white rounded-md">
                  <StrapiImage
                    image={service.icon}
                    alt={service.title}
                    width={25}
                    height={25}
                    className="text-green-500"
                  />
                </div>
                <h1 className="text-[18px] md:text-[20px] font-semibold">
                  {service.title}
                </h1>
                <p className="text-[14px]">{service.description}</p>
                <div className=" flex justify-start items-center gap-3 text-green-500 group-hover:text-white">
                  <Link className="text-[14px]" href={service.link.url}>
                    {service.link.text}
                  </Link>
                  {/* <RiArrowRightSLine /> */}
                </div>
              </div>
            )
          })}
        </div>
        <div className="w-full mx-auto text-center">
          <ButtonList buttons={view_all} />
        </div>
      </div>
    </div>
  )
}

const SustainabilityGrid = ({ title, description, cards, view_all }) => (
  <div className="w-full py-24 bg-white">
    <div className="w-full max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-12 px-6 xl:px-0">
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 ">
        <h1 className="leading-tight text-[32px] sm:text-[40px] xl:text-[46px] font-semibold text-black text-center lg:text-left">
          {title}
          <br />
        </h1>
        <p className="text-black text-center lg:text-left text-[16px] md:text-[18px] max-w-[520px] leading-snug">
          {description}
        </p>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`bg-[#f0fcec] rounded-lg cursor-pointer flex justify-start items-start gap-2 flex-col p-6 col-span-2 text-left order-1 w-full max-w-full  transition-all duration-500 hover:scale-[1.03] 
            ${index === 1 && 'col-span-2 lg:col-span-1 w-full '}
            ${
              index === 3 &&
              'lg:col-span-1 row-span-2 md:order-1 order-last w-full max-w-full'
            }
            
            `}
          >
            <div className="flex justify-center items-center bg-white w-[40px] h-[40px] rounded-lg">
              <StrapiImage
                image={item.icon}
                alt="Sustainable"
                width={25}
                height={25}
                className="w-auto h-auto"
              />
            </div>
            <h1 className="text-black text-[22px] font-semibold">
              {item.title}
            </h1>
            <p className="text-[14px] text-black">{item.description}</p>
            <div className="flex justify-start items-center gap-3 text-green-500">
              <span className="text-[14px]">Read More</span>
              {/* <RiArrowRightSLine /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)



const QualityGrid = ({ title, description, cards, view_all }) => (
  <div className="w-full pt-20 pb-8 bg-white flex flex-col">
    <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center gap-4 px-3">
      <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold ">
        {title}
      </h1>
      <p className="text-[16px] md:text-[18px] font-light">{description}</p>
    </div>
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 px-6 xl:px-0">
      {cards.map((service, i) => {
        return (
          <div
            key={i}
            className={`w-full px-6 py-6 flex flex-col justify-start items-start gap-3 rounded-lg cursor-pointer  transition-all duration-500 ${
              i === 0 && 'bg-[#DEEDDD]'
            } ${i === 1 && 'bg-[#FBF3D7]'} ${
              i === 2 && 'bg-[#F4F0ED]'
            } z-10  hover:scale-[1.02]`}
          >
            <div className="w-[50px] h-[50px] flex justify-center items-center p-2 bg-[#D0E9D9] rounded-md cursor-pointer">
              <StrapiImage
                src={service.icon}
                alt={service.title}
                className="w-auto h-auto "
              />
            </div>
            <h3 className="text-[24px] font-semibold">{service.title}</h3>
            <p className="text-[18px] font-light">{service.description}</p>
            <div className="flex justify-start items-center gap-2 cursor-pointer">
              <span className="text-[14px] text-green-500">Read More</span>
              {/* <RiArrowRightSLine className="text-green-500 mt-[3px]" /> */}
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

const LegalGrid = ({ title, description, cards, view_all }) => (
  <div className="w-full py-20 px-6 bg-gradient-to-r from-[#028418] to-[#03971c]">
    <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-10 justify-center items-center  ">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-white tracking-normal text-center">
          {' '}
          {title}
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-6">
        {cards.map((tech, i) => {
          return (
            <div
              key={i}
              className="bg-white p-4 flex flex-col items-start rounded-xl justify-start w-[99%] md:max-w-[350px] cursor-pointer gap-4 h-[540px] hover:scale-[1.03] transition-all duration-300 "
            >
              <div className="w-full h-[200px] flex justify-center items-center bg-green-200 rounded-lg">
                <StrapiImage image={tech.icon} className="w-[200px] h-[200px]" alt="" />
              </div>
              <h2 className="text-[20px] md:text-[24px] text-gray-600 font-semibold">
                {tech.title}
              </h2>
              <p className="tracking-tight text-[16px] md:text-[18px] text-gray-700 font-light ">
                {tech.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

const FeaturesGrid = ({ title, description, cards, view_all }) => {
  const isMobile = useMediaQuery({ query: '(max-w:768px)' })
  
  return (
    <div className="w-full bg-gray-100 px-6 pb-24">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10">
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
          {cards.map((services, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 140 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  isMobile
                    ? { duration: 0.8, ease: easeInOut }
                    : { duration: 0.8, ease: easeInOut, delay: i * 0.2 }
                }
                key={i}
                className="w-[100%] bg-white p-6 flex flex-col justify-start items-start rounded-lg gap-3 md:min-h-[310px] xl:pb-0 cursor-pointer hover:scale-[1.03] transition-all duration-300 ease-linear"
              >
                <div className="w-[60px] h-[60px] p-2 rounded-md bg-[#e7f3eb]">
                  <StrapiImage image={services.icon} alt="" width={40} height={40} />
                </div>
                <h2 className="text-black font-semibold text-[18px] lg:text-[20px]">
                  {services.title}
                </h2>
                <p className="text-black font-light text-[14px] md:text-[16px] ">
                  {services.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        <div className="w-full flex flex-col gap-4 items-center">
          <p className="text-[16px] lg:text-[18px] text-[#989a9d] max-w-[800px] text-center">
            {description}
          </p>
          <ButtonList buttons={view_all} />
        </div>
      </div>
    </div>
  )
}

export default GridWithCards
