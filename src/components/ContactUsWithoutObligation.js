'use client'
import Image from 'next/image'
import group from '../../public/group_img.svg'
import { motion, easeInOut } from 'framer-motion'
import StrapiImage from './shared/StrapiImage'
import { ButtonList } from './ui/button'

function ContactUsWithoutObligation({
  image,
  sub_title,
  title,
  description,
  get_started,
}) {

  return (
    <div className="w-full py-20 bg-gray-100 px-6 -mb-6">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="w-full basis-[48%] flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
            whileInView={ { opacity: 1, scale: 1, rotate: 360 } }
            viewport={{once:true}}
            exit={{ opacity: 0, scale: 0.7, rotate: 0 }}
            transition={{ duration: 2, ease: easeInOut }}
            className="w-auto h-auto"
          >
            <StrapiImage
              image={image}
              alt={sub_title}
              className="w-auto h-auto"
             
            />
            {/* <Image src="/group_img.svg" alt='group_img' width="0" height="0" className="w-auto h-auto" /> */}
          </motion.div>
        </div>
        <div className="basis-[50%] flex flex-col gap-4">
          <h5 className="text-black text-[16px] font-semibold">{sub_title}</h5>
          <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] font-semibold text-black leading-snug">
            {title}
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600">
            {description}
          </p>
          <ButtonList buttons={get_started}></ButtonList>
        </div>
      </div>
    </div>
  )
}

export default ContactUsWithoutObligation
