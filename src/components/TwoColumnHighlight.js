import { ButtonList } from "./ui/button";
import StrapiImage from "./shared/StrapiImage";

function TwoColumnHighlight({ title, description, cta_button, image }) {
  return (
    <div className="w-full p-0 m-0 bg-[#deeddd]">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="basis-[50%] flex justify-end items-end gap-3 bg-[#15ab49] rounded-t-2xl md:rounded-r-2xl py-[70px]">
          <div className="p-6 max-w-full xl:max-w-[88%] exl:max-w-[80%] flex justify-center items-start gap-4 flex-col">
            <h1 className="text-[32px] md:text-[40px] xl:text-[48px] font-semibold leading-snug text-white">
              {title}
            </h1>
            <p className="text-white text-[16px] xl:text-[18px]">
              {description}
            </p>
            <ButtonList buttons={cta_button} />
          </div>
        </div>
        <div className="basis-[50%] flex justify-center items-center p-8 md:p-12">
          <StrapiImage
            image={image}
            alt="globoconversation"
            className="w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default TwoColumnHighlight;
