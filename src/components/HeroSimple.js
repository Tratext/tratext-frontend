'use client'
import {  motion, AnimatePresence } from 'framer-motion'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { ButtonList } from './ui/button'
import StrapiImage from './shared/StrapiImage'
import Image from 'next/image'

const HeroSimpleAbout= ({
  image,
  title,
  description,
  get_started,
  call_us_text,
  number,
}) => {
  return (
    <div className="w-full px-8 py-16 pb-20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center md:py-8 gap-10 lg:gap-5 max-w-[1200px] mx-auto">
        <div className=" basis-[48%] w-full flex flex-col gap-6 justify-center items-start  ">
          <TextGenerateEffect
            words={title}
            className=" lg:-mt-6 text-[32px] sm:text-[38px] md:text-[40px] font-semibold leading-tight max-w-[530px] "
            duration={1.2}
          />

          <motion.p
            key="subheading"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-[#706f6f] max-w-[560px]"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <ButtonList buttons={get_started}></ButtonList>
            <div className="flex justify-center items-center">
              <p className="text-[16px] text-gray-950">
                {call_us_text}{' '}
                <a href={number.url} className="cursor-pointer text-green-500 ">
                  {number.text}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          <motion.div
            key="heroImage"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
            className="basis-[45%] flex justify-start items-center w-full h-auto cursor-pointer  "
          >
            <div className=' w-[85%] rounded-[24px]  bg-green-500'>
            <div className='relative '>
            {/* <StrapiImage
              image={image}
              alt="home hero"
              
              className="w-[100%] h-auto mb-5 ml-5  "
            /> */}

            <Image src="/Abouthero_img.svg" width="110" height="100" alt ="" className=" w-[100%] h-auto mb-5 ml-5 "/>
            </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
const HeroSimpleContact= ({
  image,
  title,
  description,
  get_started,
  call_us_text,
  number,
}) => {
  return (
    <div className="w-full px-8 py-16 pb-20 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center md:py-8 gap-10 lg:gap-5 max-w-[1200px] mx-auto">
        <div className=" basis-[48%] w-full flex flex-col gap-6 justify-center items-start  ">
          <TextGenerateEffect
            words={title}
            className=" lg:-mt-6 text-[32px] sm:text-[38px] md:text-[40px] font-semibold leading-tight max-w-[530px] "
            duration={1.2}
          />

          <motion.p
            key="subheading"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.1 }}
            className="text-[16px] md:text-[18px] text-[#706f6f] max-w-[560px]"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1], delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <ButtonList buttons={get_started}></ButtonList>
            <div className="flex justify-center items-center">
              <p className="text-[16px] text-gray-950">
                {call_us_text}{' '}
                <a href={number.url} className="cursor-pointer text-green-500 ">
                  {number.text}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          <motion.div
            key="heroImage"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0.58, 1] }}
            className="basis-[45%] flex justify-start items-center w-full h-auto cursor-pointer  "
          >
            <div className=' w-[85%] rounded-[24px]  bg-green-500'>
            <div className='relative '>
            {/* <StrapiImage
              image={image}
              alt="home hero"
              
              className="w-[100%] h-auto mb-5 ml-5  "
            /> */}

            <Image src="/contactHero_img.svg" width="110" height="100" alt ="" className=" w-[100%] h-auto   ml-5"/>
            </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}




const HeroSimple=(props)=>{
  const renderContent = () => {
    switch (props.show_breadcrumb) {
      case true:
        return <HeroSimpleAbout {...props} />
      case false:
        return <HeroSimpleContact {...props} />
      default:
        return <HeroSimpleAbout {...props} />
    }
  }

  return <>{renderContent()}</>
}


export default HeroSimple
