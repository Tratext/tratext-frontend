'use client'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion'

import facebook from '../../public/icons/facebook_icon.svg'
import twitter from '../../public/icons/twitter_icon.svg'
import linkedIn from '../../public/icons/linkedIn_icon.svg'
import instagram from '../../public/icons/instagram-icon.svg'
import Link from 'next/link'
import { Button, ButtonList } from './ui/button'
import StrapiImage from './shared/StrapiImage'

const Banner = (props) => {
  const renderContent = () => {
    switch (props.design) {
      case 'default':
        return <DefaultBanner {...props} />
      case 'partnership':
        return <PartnerShipBanner {...props} />
      case 'social-media':
        return <SocialMediaBanner {...props} />
      case 'left-image':
        return <LeftImageBanner {...props} />
      case 'right-image':
        return <RightImageBanner {...props} />
      default:
        return <DefaultBanner {...props} />
    }
  }

  return <>{renderContent()}</>
}

const DefaultBanner = ({ cta_buttons, description, title }) => {
  return (
    <div className="banner default-banner">
      <div className="w-full max-w-[1100px] mx-auto">
        <div className="w-full h-auto md:h-[380px] bg-gradient-to-b from-[#028418] to-[#03971c] flex flex-col justify-center items-center gap-6 py-16 md:py-24 px-4 rounded-2xl relative my-16">
          <h1 className="text-[34px]  sm:text-[42px] lg:text-[48px] text-white text-center -mb-2 font-semibold px-2">
            {title}
          </h1>
          <p className="text-[16px] text-white text-center max-w-[840px] px-2">
            {description}
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:behoerde@tratext"
              className="px-4 py-3 flex justify-start items-center gap-5 md:gap-3 bg-white rounded-xl md:max-w-[44%] w-full cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-linear"
            >
              <div className="w-[46px] h-[46px] bg-[#03971c] p-2  rounded-lg">
                <Image
                  src="/icons/email_icon.svg"
                  width="36"
                  height="36"
                  alt="email_icon w-[36px] h-[36px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start ">
                <span className="text-[16px] xl:text-[18px] text-gray-500">
                  Email us at{' '}
                </span>
                <h3 className="text-[18px] xl:text-[20px] font-semibold ">
                  behoerde@tratext
                </h3>
              </div>
            </a>
            <a
              href="tel:800 8728398"
              className="px-4 py-3 flex justify-start items-center md:gap-3 gap-5 bg-white rounded-xl md:max-w-[44%] w-full cursor-pointer hover:scale-[1.02] transition-all duration-300 ease-linear"
            >
              <div className="w-[46px] h-[46px] bg-[#03971c] p-2  rounded-lg">
                <Image
                  src="/icons/calling_icon.svg"
                  width="36"
                  height="36"
                  alt="email_icon w-[36px] h-[36px]"
                />
              </div>
              <div className="flex flex-col justify-center items-start ">
                <span className="text-[16px] xl:text-[18px] text-gray-500">
                  Call our toll-free hotline at{' '}
                </span>
                <h3 className="text-[18px] xl:text-[20px] font-semibold ">
                  0800 8728398
                </h3>
              </div>
            </a>
          </div>
          <Image
            src="/free_translation_logo_img.svg"
            alt="freetranslationlogoimg"
            width="120"
            height="120"
            className="absolute w-[120px] md:w-[150px] h-[120px] md:h-[150px] -right-4 -top-4"
          />
          <Image
            src="/free_translation_logo_img.svg"
            alt="freetranslationlogoimg"
            width="120"
            height="120"
            className="absolute w-[120px] md:w-[150px] h-[120px] md:h-[150px] -left-5 md:-top-4 -bottom-9"
          />
        </div>
      </div>
    </div>
  )
}

const PartnerShipBanner = ({ cta_buttons, description, title }) => {
  return (
    <div className="banner partnership-banner">
      <div className="w-full mx-auto bg-gray-100 pb-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 rounded-lg bg-[#027b16] max-w-[400px] md:max-w-[1100px] mx-auto text-white md:h-[320px] xl:h-[350px] overflow-hidden cursor-pointer">
          <div className="basis-[100%] md:basis-[50%] w-full flex flex-col justify-start items-start gap-4 p-6">
            <h1 className="text-[30px] md:text-[38px] lg:text-[48px] font-semibold leading-tight max-w-[700px]">
              {title}
            </h1>
            <p className="text-[12px] md:text-[14px] font-light">
              {description}
            </p>
            <Button
              text={cta_buttons[0].text}
              type={cta_buttons[0].type}
              variant={cta_buttons[0].variant}
            ></Button>
          </div>

          <div className="basis-[100%] md:basis-[50%] relative w-full">
            <Image
              src="/clip_for_partnership_section.svg"
              width={1500}
              height={600}
              alt="clip_for_partnership_section"
              className="overflow-hidden w-full md:h-[500px] lg:h-[400px]"
            />
            <div className="absolute top-10 sm:top-24 sm:right-16 md:top-40 lg:top-16 right-5 md:right-10 flex justify-center items-center sm:gap-2 lg:mt-[20px]">
              <Image
                src="/one_per.svg"
                alt="1% logo"
                width={150}
                height={150}
                className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[250px]"
              />
              <Image
                src="/Stripe_Climate_Badge.svg"
                alt="Stripe Climate Badge"
                width={150}
                height={120}
                className="w-[120px] sm:w-[160px] md:w-[180px] lg:w-[220px] md:-ml-8 lg:-ml-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SocialMediaBanner = ({ socials, description, title }) => (
  <div className="banner social-media-banner">
    <div className="w-full px-6 pb-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="w-full">
          <div className="w-full h-auto  bg-gradient-to-b from-[#028418] to-[#03971c] flex flex-col justify-center items-center gap-6 pt-6 pb-10 px-4 rounded-2xl relative my-16">
            <h1 className="text-[28px] md:text-[32] lg:text-[34px] text-white text-center -mb-2 font-semibold px-2 ">
              {' '}
              {title}
            </h1>
            <p className="text-[16px] 2xl:text-[18px] text-white text-center max-w-[640px] px-2">
              {description}
            </p>
            <div className="max-w-250px mx-auto flex justify-center items-center gap-4">
              {socials.map((icon, i) => {
                return (
                  <Link
                    href=""
                    key={i}
                    className="w-[40px] h-[40px] flex justify-center items-center bg-[#36b54c] rounded-full cursor-pointer hover:scale-[1.07]  transition-all duration-300 hover:bg-[#2baa40]"
                  >
                    <StrapiImage image={icon.icon} src={icon.url} />
                  </Link>
                )
              })}
            </div>
            <Image
              src="/free_translation_logo_img.svg"
              alt="freetranslationlogoimg"
              width="100"
              height="100"
              className="absolute w-[100px] md:w-[140px] h-[100px] md:h-[140px] -right-6 -top-6"
            />
            <Image
              src="/free_translation_logo_img.svg"
              alt="freetranslationlogoimg"
              width="100"
              height="100"
              className="absolute w-[100px] md:w-[140px] h-[100px] md:h-[140px] -left-8 md:-bottom-10 -bottom-9"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

const LeftImageBanner = ({ cta_buttons, description, title }) => {
  return (
    <div className="w-full bg-gray-100 pt-[240px] pb-[120px] px-6 -mt-[140px]">
      <div className="max-w-[1100px] mx-auto rounded-lg flex flex-col md:flex-row bg-[#03a01e] h-auto md:h-[370px] relative md:px-0">
        <div className="basis-[46%] bg-[url(/left_circle_clip.svg)] bg:cover md:bg-[110%_70%] bg-no-repeat flex justify-center items-center py-6 px-4 md:px-10 rounded-lg">
          <Image
            src="/free_tarnslation_img.svg"
            alt="free_tarnslation"
            width="350"
            height="0"
            className="w-[350px] md:-ml-16 h-auto"
          />
        </div>
        <div className="basis-[45%] flex flex-col justify-center items-center md:items-start gap-3 text-white md:ml-8 md:text-left pb-10 px-5 md:px-0 pt-4">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-[480px] leading-[1.2] w-full">
            {title}
          </h1>
          <p className="text-[16px] lg:text-[18px] font-light max-w-[480px]">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start gap-6 sm:gap-4 w-full sm:max-w-[300px] sm:px-0 mt-3">
            <ButtonList
              buttons={cta_buttons}
              OtherClass="w-full md:w-auto mx-auto"
            />
          </div>
          <Image
            src="/free_translation_logo_img.svg"
            alt="translationlogoimg"
            width="100"
            height="0"
            className="absolute bottom-2 right-4 md:bottom-4 md:right-6 w-[100px] md:w-[140px] cursor-pointer h-auto"
          />
        </div>
      </div>
    </div>
  )
}

const RightImageBanner = ({ cta_buttons, description, title }) => (
  <div className="banner right-image-banner">
    <motion.div
      initial={{ opacity: 0, y: 130 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: easeInOut }}
      className="max-w-[1100px] xl:mx-auto mx-6 rounded-lg flex flex-col md:flex-row bg-[#028017] h-auto md:h-[370px] relative pt-10 md:pt-0 mt-6 overflow-hidden"
    >
      <div className="basis-[45%] flex flex-col justify-center items-start gap-3 text-white md:ml-8 text-left pb-10 px-5 md:px-0 pt-4 bg-transparent">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-[480px] leading-[1.2] w-full ">
          {title}
        </h1>
        <p className="text-base lg:text-lg font-light max-w-[480px]">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-6 sm:gap-4 w-full sm:max-w-[300px] bg-transparent mt-3">
          <ButtonList
            buttons={cta_buttons}
            OtherClass="w-full md:w-auto mx-auto"
          />
        </div>
        <Image
          src="/free_translation_logo_img.svg"
          width="100"
          height="0"
          alt="Translation Logo"
          className="absolute -left-4 -top-4 md:-left-6 md:-top-6 w-[100px] md:w-[200px] cursor-pointer"
        />
      </div>
      <div className="basis-[54%] bg-[url(/right_circle_clip.svg)] bg-cover bg-no-repeat flex justify-center items-center py-6 px-4 md:px-10 w-full rounded-lg z-10">
        <Image
          src="/free_translation_img2.svg"
          alt="Free Translation"
          width="350"
          height="0"
          className="w-[350px] md:-mr-16 h-auto"
        />
      </div>
    </motion.div>
  </div>
)
export default Banner
