import { Card, CardContent } from "@/components/ui/card";
import StrapiImage from "./shared/StrapiImage";

const StepsWithLine = ({ title, sub_title, step }) => {
  return (
    <div className="container mx-auto px-4 py-16 hidden md:block">
      <span>{sub_title}</span>
      <h3 className="text-4xl font-bold text-center mb-16">{title}</h3>
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-[85%] top-[7.5%]">
          <div className="h-full w-px border-l-2 border-dashed border-[#40B16C] opacity-50" />
        </div>

        {step.map((step, index) => (
          <div key={step.id} className="relative mb-16">
            <div
              className={`flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "" : ""}`}>
                <Card
                  className={`bg-white shadow-lg ${
                    index % 2 === 0 ? "mr-12" : "ml-12"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#F5F9F6] p-3 rounded-lg">
                        <StrapiImage
                          key={index}
                          image={step.icon}
                          alt="icon"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-white rounded-full p-1">
                    <div className="w-16 h-16 rounded-full text-[#40B16C] bg-slate-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm">STEP</div>
                        <div className="text-xl font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute transform w-20 
                    ${index % 2 === 0 ? "-translate-x-20" : "translate-x-0"}
                    `}
                >
                  <div className="w-full h-px border-b-2 border-dashed border-[#40B16C] opacity-50" />
                </div>
              </div>

              <div className="w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StepsWithList=({ title, step })=>{
  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-6 px-6">
        <div  className="w-full flex justify-center items-center">
            {/* <h1
              initial={{ opacity: 0, y: 120 }}
              animate={InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: easeInOut }}
              className="text-black font-semibold text-[32px] md:text-[44px] lg:text-[48px] max-w-[700px] text-center leading-snug"
            >
              Our Range of <br />
              E-Commerce <br />
              Translation Services <br /> Includes
            </h1> */}
            <h1 className="text-black font-semibold text-[32px] md:text-[44px] lg:text-[48px] max-w-[700px] text-center leading-snug">
              {title}
            </h1>
        </div>
        <div className="w-full flex flex-col gap-10 justify-center items-center py-7 ">
          {step.map((rang, i) => {
            return (
              <div
                key={i}
                className="w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-6"
              >
                <div className="basis-[30%] flex justify-center items-start md:items-center">
                  <div className="p-2 sm:w-[120px] w-[90px] h-[90px] sm:h-[120px] rounded-full bg-green-100 flex justify-center items-center cursor-pointer">
                    <StrapiImage
                      image={rang.icon}
                      width="60"
                      height="60"
                      className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="basis-[70%] flex flex-col justify-center items-start gap-2">
                  <div className="text-[14px] lg:text-[16px] bg-yellow-400 rounded-2xl px-4 p-1 cursor-pointer">
                    {rang.step_text} {rang.step_number_text}
                  </div>
                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-[#3c3c3c]">
                    {rang.title}
                  </h3>
                  <p className="text-[16px] md:text-[18px] text-[#3c3c3c] font-light">
                    {rang.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ProcessSteps=(props)=>{
  const renderContent = () => {
    switch (props.design) {
      case 'line':
        return <StepsWithLine {...props} />
      case 'list':
        return <StepsWithList {...props} />
      default:
        return <StepsWithLine  {...props} />
    }
  }
  return <>{renderContent()}</>
}

export default ProcessSteps;