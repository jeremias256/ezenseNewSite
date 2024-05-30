import React, { useEffect } from "react";
import "../css/comboLG.css";

import biselBig from "../assets/LogosCoca.png";
import biselBigM from "../assets/LogosCocaM.png";
import biselBigL from "../assets/LogosCodaL.png";

const ComboLG = () => {
  // Para ver la resolución de la pantalla

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      console.log(
        `Ancho de pantalla: ${screenWidth}px, Alto de pantalla: ${screenHeight}px`,
      );
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="combo_content3">
        <div className="ca">
          <div className="ca-f1">
            <div className="ca-f1-f1 mt-[1px] h-[30px] border-b-2 border-b-callToAction md:h-[31px]">
              <span className="text-sm-nunito-700 call-to-action">
                GLADIATOR
              </span>
            </div>

            <div className="ca-f1-f2">
              <div className="ca-f1-f2-c1">
                <div className="ca-f1-f2-c1-relleno1"></div>
                <div className="ca-f1-f2-c1-f1"></div>
                <div className="ca-f1-f2-c1-relleno2"></div>
                <div className="ca-f1-f2-c1-f2"></div>
              </div>

              <div className="ca-f1-f2-c2">
                <div className="ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-700 grey-black">
                    Innovaative design
                  </p>
                </div>
                <div className="ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    45 Days process
                  </p>
                </div>
                <div className="ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Lorem ipsum dumy text
                  </p>
                </div>
                <div className="ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Drupal services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="ca-f2 flex flex-1 gap-[16px] rounded-bl-custom-br555 rounded-tl-custom-br555 border-2 border-r-0 border-callToAction py-4 pl-4">
            <img src={biselBig} />
            <img className="hidden md:block" src={biselBigM} />
            <img className="hidden md:block" src={biselBigL} />
            <img className="hidden md:block" src={biselBig} />
            <img className="" src={biselBig} />
          </div>
        </div>
        <div className="cb">
          <div className="cb-f1 flex h-[159.5px] w-[78px] rounded-br-custom-br555 rounded-tr-custom-br555 border-2 border-l-0 border-callToAction pt-[69px] md:pt-[69px]">
            <div className="cb-f1-f1 border-1 h-[32px] w-[16px] rounded-br-custom-br555 rounded-tr-custom-br555 border-l-0 border-greyBlack"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboLG;
