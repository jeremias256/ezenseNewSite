import React from "react";
import Banner from "../components/banner";
import Works from "../components/works";
import StickyBox from "react-sticky-box";

const home = () => {
  return (
    <>
      <StickyBox offsetTop={20} offsetBottom={20}>
        <Banner />
      </StickyBox>

      <Works />
    </>
  );
};

export default home;
