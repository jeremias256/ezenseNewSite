import React from "react";
import imgLogoEzense from "../assets/logo-ezense.png";
import useEzense from "../hooks/useEzenseProvider";

export const Header = () => {
  const { scrollY, screenHeight } = useEzense();

  return (
    <header className="relative w-full md:flex md:justify-start">
      <div className="flex cursor-pointer items-center justify-between px-[16px] md:px-0">
        <div className="flex items-center">
          <img src={imgLogoEzense} width="31px" height="31px" alt="Logo de e-zense" />
          <span className="titulo text-greyBlack"> e-zense</span>
        </div>
      </div>

      <div className="flex justify-between rounded-b-[12px] border-t-2 border-callToAction px-[16px] py-[12px] md:absolute md:left-1/2 md:top-1/2 md:mt-[8px] md:-translate-x-1/2 md:-translate-y-1/2 md:transform md:items-center md:gap-[16px] md:border-none md:px-0 md:py-0">
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Works
        </span>
        <span className="opciones flex cursor-pointer  hover:text-callToAction md:text-[18px] ">
          Bureau
        </span>
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Services
        </span>
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Clients
        </span>
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Team
        </span>
      </div>

      {/* <div className="absolute left-[180px] top-[20px] flex flex-col bg-green-500 px-4 text-white md:flex-row">
        <p>---Y: {scrollY}px</p>
        <p>---screenHeight: {screenHeight}px</p>
      </div> */}
    </header>
  );
};

