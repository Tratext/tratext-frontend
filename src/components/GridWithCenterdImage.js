'use client'
import { motion } from 'framer-motion'
import StrapiImage from './shared/StrapiImage'

const GridWithCenterdImage = (props) => {
  const renderContent = () => {
    switch (props.design) {
      case 'four-cards':
        return <FourCardsWithImage {...props} />
      case 'six-cards':
        return <SixCardsWithImage {...props} />
      default:
        return <FourCardsWithImage {...props} />
    }
  }

  return <>{renderContent()}</>
}

const FourCardsWithImage = ({ title, description, cards, center_image }) => {
  return (
    <div className="w-full py-24 bg-gray-100">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-12 px-6 xl:px-0">
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold max-w-[600px] leading-tight text-center w-full">
            {title}
          </h1>
          <p className="text-[16px] md:text-[18px] font-light ">
            {description}
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-4  lg:gap-16 justify-evenly items-center">
          <div className="flex flex-col justify-between items-center gap-8 md:gap-[70px] lg:gap-[95px] w-full mx-auto">
            {cards.slice(0, 2).map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-[1px] border-green-200 flex justify-center items-center gap-4 p-4  bg-white rounded-md cursor-pointer w-full lg:max-w-[320px] hover:scale-[1.03] transition-all duration-300"
                >
                  <StrapiImage
                    image={item.icon}
                    alt="timer"
                    width={50}
                    height={50}
                  />
                  <p className="font-medium tracking-tight max-w-[140px] text-[14] sm:text-[16px]">
                    {item.title}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className="w-full flex justify-center items-center"
            >
              <StrapiImage
                image={center_image.image}
                alt="translation_need"
                height={200}
                width={280}
                className="max-w-[160px] md:max-w-[400px] w-full cursor-pointer"
              />
            </motion.div>
          </div>
          <div className="flex flex-col justify-between items-center gap-8 md:gap-[70px] lg:gap-[80px] w-full mx-auto">
            {cards.slice(2, 4).map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-[1px] border-green-200 flex justify-center items-center gap-4 p-4  bg-white rounded-md cursor-pointer w-full lg:max-w-[320px] hover:scale-[1.03] transition-all duration-300"
                >
                  <StrapiImage
                    image={item.icon}
                    alt="timer"
                    width={50}
                    height={50}
                  />
                  <p className="font-medium tracking-tight max-w-[140px] text-[14] sm:text-[16px]">
                    {item.title}{' '}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

const SixCardsWithImage = ({ title, description, cards, center_image }) => {
  return (
    <div className="w-full py-24 bg-white px-6">
      <div className="w-full max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-12 md:px-6 xl:px-0">
        <div className="w-full flex flex-col justify-center items-center gap-2 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
            className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold max-w-[600px] leading-tight text-center w-full"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
            className="text-[14px] font-light text-center"
          >
            {description}
          </motion.p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 md:gap-4 lg:gap-2 justify-evenly items-center">
          <div className="flex flex-col justify-between items-center gap-10  w-full mx-auto">
            {cards.slice(0, 3).map((card, i) => (
              <div
                key={i}
                className={`flex justify-center items-center gap-4 p-4  rounded-md cursor-pointer w-full lg:max-w-[340px] h-[80px] md:h-auto transition-all duration-500 hover:scale-[1.03]
                  ${i === 0 && 'bg-[#fff4d4]'}
                  ${i === 1 && 'bg-[#e0ecdc]'}
                  ${i === 2 && 'bg-[#f8f4ec]'}
                  `}
              >
                <p className="font-medium tracking-tight text-[16px] sm:text-[18px]">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
              className="flex justify-center items-center"
            >
              <StrapiImage
                image={center_image.image}
                alt="translation_need"
                height={200}
                width={280}
                className="max-w-[280px] md:max-w-[300px] lg:max-w-[330px] cursor-pointer"
              />
            </motion.div>
          </div>
          <div className="flex flex-col justify-between items-center gap-10 w-full mx-auto">
            {cards.slice(3).map((card, i) => (
              <div
                key={i}
                className={`flex justify-center items-center gap-4 p-4 rounded-md cursor-pointer w-full lg:max-w-[340px] h-[80px] md:h-auto transition-all duration-500 hover:scale-[1.03] 
                  ${i === 0 && 'bg-[#e0ecdc]'}
                  ${i === 1 && 'bg-[#f8f4ec]'}
                  ${i === 2 && 'bg-[#fff4d4]'}
                
                `}
              >
                <p className="font-medium tracking-tight text-[16px] sm:text-[18px] text-left">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridWithCenterdImage
