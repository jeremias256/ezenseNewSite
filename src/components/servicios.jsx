import React from "react";
import TituloSeccion from "../components/tituloSeccion";

const sections = [
  {
    title: 'Web Development',
    items: [
      'Platform-Agnostic Solutions',
      'Continuous Maintenance',
      'Seamless Service Integration',
    ],
  },
  {
    title: 'Ui/UX Design',
    items: [
      'Intuitive User Interfaces',
      'Responsive Design',
      'CSS3/HTML5 Expertise',
    ],
  },
  {
    title: 'Digital Strategy',
    items: [
      'Real-Time Analytics',
      'Community Engagement',
      'Creative Storytelling',
    ],
  },
  {
    title: 'Online Marketing',
    items: [
      'Targeted Google Ads',
      'Comprehensive SEO',
      'Digital Visibility',
    ],
  },
  {
    title: 'Mobile APPs',
    items: [
      'Cross-Platform Development',
      'User Engagement Focus',
      'Integrated Web Applications',
    ],
  },
];

export const Servicios = () => {
  return (
    <div className="px-4 mt-[60px] xl:px-[60px]" id="services">
      <div className="relative mx-auto w-full max-w-[1440px] servicios-back">
        <div className="px-4 pt-[30px] pb-8 rounded-2xl xl:px-0 xl:pt-[60px] xl:pb-[90px] bg-[#4d4d60e0]">
          <TituloSeccion className="max-w-[1320px] mx-auto" titulo="Services" customColor="text-white" />

          <div className="mx-auto flex flex-col xl:px-[28px] white max-w-[1320px] mt-6">
            <span className="text-md-lato-700">
              Unites aesthetic innovation with technical prowess.{" "}
            </span>
            <span className="text-md-lato-400">
              From strategic planning that charts your digital destiny to
              Intuitive UX Design paired with advanced Coding Techniques, we
              architect and implement ideas into impactful digital realities{" "}
            </span>
          </div>

          <div className="mx-auto max-w-[1320px] flex lg:py-4">
            <div className="flex relative flex-col w-full gap-5 ml:gap-0">
              <div className="ml:border-2 ml:border-b-0 ml:border-callToAction ml:absolute ml:w-[60%] ml:top-[36px]"></div>
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col relative">
                  <div className="border-b-[2px] border-callToAction w-[100%] self-end ml:hidden">
                    <span className="text-md-lato-700 call-to-action">{section.title}</span>
                  </div>
                  <div className="flex self-end h-[124px] w-[82%] max-w-[433.7px] p-2 mr-2 relative ml:w-[64.5%] ml:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 1.5xl:max-w-[763px] ml:ml-[80px] ml:h-[155px] ml:pt-10 ml:mr-20">
                    <div className="ml:border-b-[2px] ml:border-callToAction ml:w-[100%] ml:top-0 ml:absolute">
                      <span className="hidden ml:block ml:text-md-lato-700 ml:call-to-action">{section.title}</span>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="ml:absolute ml:top-[36px] ml:-left-[70px] ml:border-2 ml:border-r-0 ml:h-[157px] ml:w-[90px] ml:rounded-s-full ml:border-callToAction"></div>
                    )}
                    <div className="absolute top-[39px] left-[-8px] h-[32.5px] w-[16px] border border-white border-r-0 rounded-s-full ml:top-[71px]">
                    </div>
                    <div className="flex-1 ml:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] 1.5xl:max-w-[763px]">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex ml:relative items-center mx-auto border-b border-white p-2 h-[32px] pl-[0px]">
                          <div className="ml:absolute text-sm-nunito-400 white ml:flex ml:left-[40%] lg:left-[50%] xl:pl-[48px]">{item}</div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute top-[71.2px] right-[-8px] h-[32.5px] w-[16px] border border-white border-l-0 rounded-e-full ml:top-[103px]">
                    </div>
                  </div>
                  {index % 2 == 0 && index !== sections.length - 1 && (
                    <div className="ml:absolute ml:top-9 ml:right-0 ml:border-2 ml:border-l-0 ml:h-[157px] ml:w-[90px] ml:rounded-e-full ml:border-callToAction"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

