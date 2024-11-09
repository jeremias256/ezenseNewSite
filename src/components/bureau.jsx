import React from "react";
import "../css/bureau.css";
import TituloSeccion from "./tituloSeccion";

import flavio from "../assets/Flavio.png";
import javi from "../assets/Javier.png";
import ale from "../assets/Alejandro.png";

export const Bureau = () => {
  return (
    <div className="px-4 py-0 mt-[60px] xl:px-[60px]">
      <div className="bureau-back bg-bgGris luminosity m-auto max-w-[1440px] rounded-[24px] bg-opacity-90 bg-cover bg-no-repeat brightness-90 filter"
        style={{ backgroundImage: "url(src/assets/back-servicios.gif)" }}
      >
        <div className="bureau-back2 px-[16px] py-[40px] lg:py-[60px] lg:px-[36px]" id="bureau">
          <TituloSeccion titulo="Bureau" />

          <div className="bureau-subTitulo flex flex-col gap-[24px] py-[32px] px-[12px] lg:px-[30px]">
            <p className="text-md-lato-700 grey-black">
              From concept to pixels, e-zense turns innovative designs into stellar experiences with clean, scalable, and forward-thinking code solutions designed for tomorrow’s digital demands.
            </p>

            <p className="text-md-lato-400 grey-black">
              At the nexus of state-of-the-art design and cutting-edge technology, we transforms your business imperatives and communication goals into vibrant dynamic digital solutions. We go beyond traditional design; We craft user-centric digital landscapes that fine-tune every interaction to enhance effectiveness, deliver results, and amplify your brand’s unique story.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">

            <div className="persona">

              <div className="persona-foto">
                <img src={flavio} />
              </div>

              <div className="persona-nombre">
                <span className="text-sm-nunito-700 grey-black">FLAVIO VILLAN</span>
              </div>

              <div className="persona-funcion">
                <span className="text-sm-nunito-700 text-[#7C818D] ">Creative Director / <span className="text-sm-nunito-400">Partner</span></span>
              </div>
            </div>

            <div className="persona">
              <div className="persona-foto">
                <img src={javi} />
              </div>

              <div className="persona-nombre">
                <span className="text-sm-nunito-700 grey-black">JAVIER MARTINE</span>
              </div>

              <div className="persona-funcion">
                <span className="text-sm-nunito-700 text-[#7C818D] ">IT Director / <span className="text-sm-nunito-400">Partner</span></span>
              </div>
            </div>

            <div className="persona">
              <div className="persona-foto">
                <img src={ale} />
              </div>

              <div className="persona-nombre">
                <span className="text-sm-nunito-700 grey-black">ALE JEROZ</span>
              </div>

              <div className="persona-funcion">
                <span className="text-sm-nunito-700 text-[#7C818D] ">Operation Director / <span className="text-sm-nunito-400">Asociated</span></span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

