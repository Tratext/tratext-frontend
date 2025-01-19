"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SocialIcon } from "react-social-icons";

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1200,
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 17,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 17,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 16,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
  ],
};

function FooterSlider({ social }) {
  return (
    <div className="max-w-[1100px] lg:mx-auto md:px-6 bg-[#181d24] md:rounded-lg py-3 my-3 md:mb-10 overflow-hidden">
      <Slider {...sliderSettings} className="w-auto">
        {social.map((item, i) => (
          <div key={i} className="flex justify-center items-center ml-2">
            <SocialIcon
              url={item.url}
              bgColor="black"
              fgColor="white"
              style={{ width: 36, height: 36 }}
              className="-mr-[30px] w-[40px] h-[40px] rounded-full bg-[#222831] flex items-center justify-center hover:bg-green-600"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FooterSlider;
