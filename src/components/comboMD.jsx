import React, { useEffect } from "react";
import "../css/comboMD.css";

import biselBig from "../assets/LogosCoca.png";
import biselBigM from "../assets/LogosCocaM.png";
import biselBigL from "../assets/LogosCodaL.png";

const ComboMD = () => {
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
      <div className="md-combo_content3">
        <div className="md-ca">
          <div className="md-ca-f1">
            <div className="md-ca-f1-f1">
              <span className="text-sm-nunito-700 call-to-action">
                GLADIATOR
              </span>
            </div>

            <div className="md-ca-f1-f2">
              <div className="md-ca-f1-f2-c1">
                <div className="md-ca-f1-f2-c1-relleno1"></div>
                <div className="md-ca-f1-f2-c1-f1"></div>
                <div className="md-ca-f1-f2-c1-relleno2"></div>
                <div className="md-ca-f1-f2-c1-f2"></div>
              </div>

              <div className="md-ca-f1-f2-c2">
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-700 grey-black">
                    Innovaative design
                  </p>
                </div>
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    45 Days process
                  </p>
                </div>
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Lorem ipsum dumy text
                  </p>
                </div>
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Drupal services
                  </p>
                </div>
                <p className="text-sm-nunito-400 grey-black ml-2">+ Rich</p>
              </div>
            </div>
          </div>
          <div className="md-ca-f2">
            <img src={biselBig} />
            <img className="hidden md:block" src={biselBigM} />
          </div>
        </div>
        <div className="md-cb">
          <div className="md-cb-f1">
            <div className="md-cb-f1-f1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboMD;
