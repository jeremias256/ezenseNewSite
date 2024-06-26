import React, { useEffect } from "react";
import "../css/comboS.css";

import biselBig from "../assets/LogosCoca.png";
import biselBigM from "../assets/LogosCocaM.png";
import biselBigL from "../assets/LogosCodaL.png";

const ComboMD = () => {
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
      <div className="s-combo_content3">
        <div className="s-ca">
          <div className="s-ca-f1">
            <div className="s-ca-f1-f1">
              <span className="text-sm-nunito-700 call-to-action">
                GLADIATOR
              </span>
            </div>

            <div className="s-ca-f1-f2">
              <div className="s-ca-f1-f2-c1">
                <div className="s-ca-f1-f2-c1-relleno1"></div>
                <div className="s-ca-f1-f2-c1-f1"></div>
                <div className="s-ca-f1-f2-c1-relleno2"></div>
                <div className="s-ca-f1-f2-c1-f2"></div>
              </div>

              <div className="s-ca-f1-f2-c2">
                <div className="s-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-700 grey-black">
                    Innovaative design
                  </p>
                </div>
                <div className="s-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    45 Days process
                  </p>
                </div>
                <div className="s-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Lorem ipsum dumy text
                  </p>
                </div>
                <div className="s-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Drupal services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="s-ca-f2">
            <img src={biselBig} />
            <img className="hidden md:block" src={biselBigM} />
            <img className="hidden md:block" src={biselBigL} />
            <img className="" src={biselBig} />
            <img className="hidden md:block" src={biselBig} />
          </div>
        </div>
        <div className="s-cb">
          <div className="s-cb-f1">
            <div className="s-cb-f1-f1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboMD;
