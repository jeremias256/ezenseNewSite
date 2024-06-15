import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Works from "../components/works";
import Servicios from "../components/servicios";
import Bureau from "../components/bureau";
import Contacto from "../components/contacto";
import useEzense from "../hooks/useEzenseProvider";

const home = () => {
  const { screenHeight } = useEzense();
  const adjustedHeight = screenHeight * 2;
  return (
    <>
      <div className="fixed left-1/2 z-50 h-[110px] w-full -translate-x-1/2 transform bg-white50 backdrop-blur-sm md:top-0 md:flex md:h-auto md:w-[98%] md:rounded-[555px] md:px-[16px]">
        <Header />
      </div>

      <Banner />

      {/* <div
        className="absolute flex w-full flex-col"
        style={{ top: `${adjustedHeight}px` }}
      >
        <Works />

        <Servicios />

        <Bureau />

        <Contacto />
      </div> */}
    </>
  );
};

export default home;
