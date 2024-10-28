import React from "react";
import "../css/bureau.css";
import TituloSeccionWhite from "./tituloSeccion";

import clarin from "../assets/clarin.png";
import mondelez from "../assets/mondelez.png";
import nissan from "../assets/nissan.png";
import cocacola from "../assets/cocacola.png";
import molinos from "../assets/molinos.png";
import unilever from "../assets/unilever.png";
import FIAT from "../assets/FIAT.png";
import whirlpool from "../assets/whirlpool.png";
import estrada from "../assets/estrada.png";
import Disney from "../assets/Disney.png";
import Givaudan from "../assets/Givaudan.png";
import IPLAN from "../assets/IPLAN.png";
import PG from "../assets/PG.png";
import beiersdorf from "../assets/beiersdorf.png";
import peugeot from "../assets/peugeot.png";
import Televisa from "../assets/Televisa.png";
import GM from "../assets/GM.png";
import turner from "../assets/turner.png";
import Nike from "../assets/Nike.png";
import McDonald from "../assets/McDonald.png";
import PEPSICO from "../assets/PEPSICO.png";
import ABInBev from "../assets/ABInBev.png";
import Kimberly_Clark from "../assets/Kimberly_Clark.png";
import Paco_Rabanne from "../assets/Paco_Rabanne.png";
import HAVAS from "../assets/HAVAS.png";
import Saatchi from "../assets/Saatchi.png";
import Ogilvy from "../assets/Ogilvy.png";
import FCB from "../assets/FCB.png";
import TBWA from "../assets/TBWA.png";
import VMLY_R from "../assets/VMLY_R.png";
import DDB from "../assets/DDB.png";
import GREY from "../assets/GREY.png";

export const Clientes = () => {
  return (
    <div className="px-4 py-0 mt-[60px] xl:px-[60px]" id="clients">
      <div className="mx-auto w-full max-w-[1440px]">
        <TituloSeccionWhite className="max-w-[1320px] mx-auto" titulo="Clients" gradient="bg-gradient-to-r from-white to-background" />

        {/* TEXTO HEADER */}
        <div className="mx-auto flex flex-col px-3 mt-6 xl:px-[28px] max-w-[1320px]">
          <p className="text-md-lato-700 grey-black">
            From daring startups and agencies to Fortune 500 companies.
          </p>

          <p className="text-md-lato-400 grey-black">
            We go beyond traditional design; We craft user-centric digital landscapes that fine-tune every interaction to enhance effectiveness, deliver results, and amplify your brand’s unique story.
          </p>
        </div>

        <div className="luminosity m-auto max-w-[1320px] mt-6 rounded-[24px] bg-opacity-90 bg-cover bg-no-repeat brightness-90 filter"
          style={{ backgroundImage: "url(/imgClientesSitioEzense/back-clientes.gif)" }}
        >

          <div className="bg-callToAction bg-opacity-90 rounded-[24px] px-[16px] py-[40px] lg:py-[60px] lg:px-[60px]" >

            <div className="flex flex-col gap-[24px] mb-[24px]">
              <p className="text-md-lato-700 text-white border-b-[2px] border-white pb-4"> BRANDS </p>
              <p className="text-sm-nunito-400 text-white"> At the nexus of state-of-the-art design and cutting-edge technology, we transforms your business imperatives and communication goals into vibrant dynamic digital solutions. We go beyond traditional design. </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 1.5xl:grid-cols-6 justify-center items-center">
              <div className="mx-auto"><img src={clarin} /></div>
              <div className="mx-auto"><img src={mondelez} /></div>
              <div className="mx-auto"><img src={nissan} /></div>
              <div className="mx-auto"><img src={cocacola} /></div>
              <div className="mx-auto"><img src={molinos} /></div>
              <div className="mx-auto"><img src={unilever} /></div>
              <div className="mx-auto"><img src={FIAT} /></div>
              <div className="mx-auto"><img src={whirlpool} /></div>
              <div className="mx-auto"><img src={estrada} /></div>
              <div className="mx-auto"><img src={Disney} /></div>
              <div className="mx-auto"><img src={Givaudan} /></div>
              <div className="mx-auto"><img src={IPLAN} /></div>
              <div className="mx-auto"><img src={PG} /></div>
              <div className="mx-auto"><img src={beiersdorf} /></div>
              <div className="mx-auto"><img src={peugeot} /></div>
              <div className="mx-auto"><img src={Televisa} /></div>
              <div className="mx-auto"><img src={GM} /></div>
              <div className="mx-auto"><img src={turner} /></div>
              <div className="mx-auto"><img src={Nike} /></div>
              <div className="mx-auto"><img src={McDonald} /></div>
              <div className="mx-auto"><img src={PEPSICO} /></div>
              <div className="mx-auto"><img src={ABInBev} /></div>
              <div className="mx-auto"><img src={Kimberly_Clark} /></div>
              <div className="mx-auto"><img src={Paco_Rabanne} /></div>
            </div>
          </div>
        </div>

        <div className="luminosity m-auto max-w-[1320px] rounded-[24px] bg-opacity-90 bg-cover bg-no-repeat brightness-90 filter"
          style={{ backgroundImage: "url(/imgClientesSitioEzense/back-clientes.gif)" }}
        >

          <div className="bg-[#4A4C58] bg-opacity-90 rounded-[24px] px-[16px] py-[40px] lg:py-[60px] lg:px-[60px] mt-[40px]" >

            <div className="flex flex-col gap-[24px] mb-[24px]">
              <p className="text-md-lato-700 text-white border-b-[2px] border-white pb-4"> AGENCIES </p>
              <p className="text-sm-nunito-400 text-white"> At the nexus of state-of-the-art design and cutting-edge technology, we transforms your business imperatives and communication goals into vibrant dynamic digital solutions. We go beyond traditional design. </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 1.5xl:grid-cols-4 justify-center items-center">
              <div className="mx-auto"><img src={HAVAS} /></div>
              <div className="mx-auto"><img src={Saatchi} /></div>
              <div className="mx-auto"><img src={Ogilvy} /></div>
              <div className="mx-auto"><img src={FCB} /></div>
              <div className="mx-auto"><img src={TBWA} /></div>
              <div className="mx-auto"><img src={VMLY_R} /></div>
              <div className="mx-auto"><img src={DDB} /></div>
              <div className="mx-auto"><img src={GREY} /></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

