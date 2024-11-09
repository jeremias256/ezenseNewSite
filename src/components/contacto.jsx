import React from "react";
import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Loader } from "./Loader";

import BiselSmall from "./bisel/biselSmall";
/* ------------------------------------------- context ------------------------------------------ */
import useEzense from "hooks/useEzenseProvider";

export const Contacto = () => {
  const { loaderForm } = useEzense();
  const [stepContacto, setStepContacto] = useState(1);

  return (
    <div className="w-full px-3" id="contact">
      <div className="lg:gap-[60px]sm:flex max-w-[1440px] rounded-[24px] bg-custom-gradient px-4 pt-6 sm:m-[12px] sm:flex-col sm:gap-[30px] lg:m-auto lg:flex lg:flex-row lg:p-[60px] lg:items-start">
        {/* formulario */}
        <div className="lg:basis-1/2">
          <div className="flex">
            <div className="rounded-tl-[24px] border-l-[2px] border-t-[2px] border-callToAction pl-6"></div>
            <div className="border-y-[2px] border-callToAction">
              <span className="text-lg-nunito-400 grey-black">hello</span>
            </div>
            <div className="flex flex-col">
              <div className="h-[34px] w-[45px]">
                <BiselSmall />
              </div>
              <div className="h-[24px] w-[45px] border-b-[2px] border-callToAction"></div>
            </div>
            <div className="mt-8 h-[26px] flex-1 border-y-[2px] border-callToAction"></div>
            <div className="mt-8 h-[26px] rounded-tr-[24px] border-r-[2px] border-t-[2px] border-callToAction pr-6"></div>
          </div>

          {
            loaderForm ? <Loader />
              : <div className="rounded-b-[24px] border-x-[2px] border-b-[2px] border-callToAction px-4 py-6">
                {stepContacto === 1 ? (
                  <Step1 setStepContacto={setStepContacto} />
                ) : stepContacto === 2 ? (
                  <Step2 setStepContacto={setStepContacto} />
                ) : (
                  <Step3 />
                )}
              </div>
          }


        </div>

        {/* datos */}
        <div className="mt-[60px] flex flex-col justify-start items-center lg:mt-0 lg:basis-1/2">
          <div className="flex flex-col items-center xl:flex-row lg:gap-8">
            <div className="flex flex-col items-center sm:flex sm:items-start sm:justify-center lg:flex">
              <span className="text-md-lato-700 grey-black"> Argentina </span>
              <span className="text-sm-nunito-400 grey-black text-[16px] lg:text-center lg:mt-8">Av Santa Fe 3778</span>
              <span className="text-sm-nunito-400 grey-black text-[16px] lg:text-center">CABA - Buenos Aires</span>
              <a href="mailto:santiago@e-zense.com" className="text-sm-nunito-400 call-to-action lg:mt-8">bue@e-zense.com</a>
            </div>

            <div className="mt-8 flex flex-col items-center sm:flex sm:items-start sm:justify-center lg:mt-0 lg:flex">
              <span className="text-md-lato-700 grey-black"> Chile </span>
              <span className="text-sm-nunito-400 grey-black text-[16px] lg:text-center lg:mt-8">Dr Manuel Barros 71</span>
              <span className="text-sm-nunito-400 grey-black text-[16px] lg:text-center">Providencia - Santiago</span>
              <a href="mailto:santiago@e-zense.com" className="text-sm-nunito-400 call-to-action lg:mt-8">santiago@e-zense.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};