import React, { useEffect } from "react";

import "../css/comboLG.css";
import biselBig from "../assets/LogosCoca.png";
import biselBigM from "../assets/LogosCocaM.png";
import biselBigL from "../assets/LogosCodaL.png";

const ComboLG = () => {
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
      <div className="combo_content3 mt-[24px] flex">
        <div className="ca">
          <div className="ca-f1">
            <div className="ca-f1-f1">
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
          <div className="ca-f2">
            <img src={biselBig} />
            <img src={biselBigM} />
            <img src={biselBigL} />
            <img src={biselBig} />
            <img src={biselBig} />
          </div>
        </div>
        <div className="cb">
          <div className="cb-f1">
            <div className="cb-f1-f1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboLG;
