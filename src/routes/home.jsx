import React from "react";
import Banner from "../components/banner";
import Works from "../components/works";
import Servicios from "../components/servicios";
import StickyBox from "react-sticky-box";
import useEzense from "../hooks/useEzenseProvider";

const home = () => {
  const { screenHeight } = useEzense();

  return (
    <>
      <StickyBox offsetTop={20} style={{ height: `${screenHeight}px` }}>
        <Banner />
      </StickyBox>

      <Works />

      <Servicios />
    </>
  );
};

export default home;
