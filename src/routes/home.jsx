import React from "react";
import Banner from "../components/banner";
import Works from "../components/works";
import Services from "../components/services";
import Bureau from "../components/bureau";

const home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Works />
      <Services />
      <Bureau />
    </>
  );
};

export default home;
