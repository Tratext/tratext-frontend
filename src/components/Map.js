import Image from "next/image";
import locationIcon from "../../public/icons/loaction_icon.svg";

function Map({ title, location_name, iframe }) {
  return (
    <div className="w-full px-6">
      <div className="max-w-[1100px] mx-auto bg-white rounded-2xl py-6 flex justify-start items-start flex-col gap-6">
        <h1 className="text-[32px] 2xl:text-[34px] font-semibold">{title}</h1>
        <div className="w-full rounded-lg relative">
          <div className="w-full rounded-lg relative" dangerouslySetInnerHTML={{ __html: iframe }}></div>
          <div className="max-w-[470px] p-4 bg-white rounded-lg absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 flex justify-start items-center gap-3 cursor-pointer">
            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#e7f3eb] cursor-pointer">
              <Image src={locationIcon} alt="" width={25} height={25} />
            </div>
            <p className="text-[16px] 2xl:text-[18px]">{location_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
