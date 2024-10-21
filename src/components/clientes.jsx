import React from "react";
import "../css/bureau.css";
import TituloSeccionWhite from "./tituloSeccion";

import clientes from "../assets/clientes.png";
import clientesMovile from "../assets/clientesMovile.png";

import agencias from "../assets/agencias.png";
import agenciasMovile from "../assets/agenciasMovile.png";



export const Clientes = () => {
  return (
    <div className="mt-[58px] lg:mt-[58px] mx-[16px] lg:m-auto max-w-[1440px] lg:px-[36px] " id="clients">

        <TituloSeccionWhite titulo="Clients"/>

        <div className="bureau-subTitulo flex flex-col py-[32px] px-[12px] lg:px-[30px]">
        <p className="text-md-lato-700 grey-black">
            From daring startups and agencies to Fortune 500 companies.
        </p>

        <p className="text-md-lato-400 grey-black">
            We go beyond traditional design; We craft user-centric digital landscapes that fine-tune every interaction to enhance effectiveness, deliver results, and amplify your brand’s unique story.
        </p>
        </div>


      <div
        className="luminosity m-auto max-w-[1440px] rounded-[24px] bg-opacity-90 bg-cover bg-no-repeat brightness-90 filter"
        style={{ backgroundImage: "url(/imgClientesSitioEzense/back-clientes.gif)" }}
      >

        <div className="bg-callToAction bg-opacity-90 rounded-[24px] px-[16px] py-[40px] lg:py-[60px] lg:px-[60px]" >
            
            <div className="flex flex-col gap-[24px] mb-[24px]">
              <p className="text-md-lato-700 text-white"> BRANDS </p>
              <p className="text-sm-nunito-400 text-white"> At the nexus of state-of-the-art design and cutting-edge technology, we transforms your business imperatives and communication goals into vibrant dynamic digital solutions. We go beyond traditional design. </p>
            </div>
            <div className="lg:hidden px-[16px]">
                <img src={clientesMovile} />
            </div>
            <div className="hidden lg:block">
                <img src={clientes} />
            </div>

        </div>
      </div>

      <div
        className="luminosity m-auto max-w-[1440px] rounded-[24px] bg-opacity-90 bg-cover bg-no-repeat brightness-90 filter"
        style={{ backgroundImage: "url(/imgClientesSitioEzense/back-clientes.gif)" }}
      >

        <div className="bg-[#4A4C58] bg-opacity-90 rounded-[24px] px-[16px] py-[40px] lg:py-[60px] lg:px-[60px] mt-[40px]" >
            
            <div className="flex flex-col gap-[24px] mb-[24px]">
              <p className="text-md-lato-700 text-white"> AGENCIES </p>
              <p className="text-sm-nunito-400 text-white"> At the nexus of state-of-the-art design and cutting-edge technology, we transforms your business imperatives and communication goals into vibrant dynamic digital solutions. We go beyond traditional design. </p>
            </div>
            <div className="lg:hidden px-[16px]">
                <img src={agenciasMovile} />
            </div>
            <div className="hidden lg:block">
                <img src={agencias} />
            </div>

        </div>
      </div>

    </div>
  );
};

