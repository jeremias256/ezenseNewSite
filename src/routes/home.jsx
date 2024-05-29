import React from "react";
import Banner from "../components/banner";
import Works from "../components/works";
import Servicios from "../components/servicios";
import Bureau from "../components/bureau";
import Contacto from "../components/contacto";
import useEzense from "../hooks/useEzenseProvider";

const home = () => {
  const { screenHeight } = useEzense();
  const adjustedHeight = screenHeight * 1.1;
  return (
    <>
      <Banner />
      <div className="absolute flex w-full flex-col border-4 border-green-500">
        <Works />

        <Servicios />

        <Bureau />

        <Contacto />
      </div>
    </>
  );
};

export default home;
