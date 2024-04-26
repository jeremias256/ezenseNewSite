import React from "react";
import Banner from "../components/banner";
import Works from "../components/works";
import Services from "../components/services";
import Bureau from "../components/bureau";
import Clients from "../components/clients";

const home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Works />
      <Clients />
      <Services />
      <Bureau />
    </>
  );
};

export default home;
