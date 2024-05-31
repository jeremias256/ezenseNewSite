import React from "react";

import biselBig from "../assets/LogosCoca.png";
import biselBigM from "../assets/LogosCocaM.png";
import biselBigL from "../assets/LogosCodaL.png";
import "../css/comboL.css";

const ComboMD = () => {
  return (
    <>
      <div className="l-combo_content3">
        <div className="l-ca">
          <div className="l-ca-f1">
            <div className="l-ca-f1-f1 h-[32px] border-b-2 border-callToAction">
              <span className="text-sm-nunito-700 call-to-action">
                GLADIATOR
              </span>
            </div>

            <div className="l-ca-f1-f2">
              <div className="l-ca-f1-f2-c1">
                <div className="l-ca-f1-f2-c1-relleno1"></div>
                <div className="l-ca-f1-f2-c1-f1"></div>
                <div className="l-ca-f1-f2-c1-relleno2"></div>
                <div className="l-ca-f1-f2-c1-f2"></div>
              </div>

              <div className="l-ca-f1-f2-c2">
                <div className="l-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-700 grey-black">
                    Innovaative design
                  </p>
                </div>
                <div className="l-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    45 Days process
                  </p>
                </div>
                <div className="l-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Lorem ipsum dumy text
                  </p>
                </div>
                <div className="l-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    + Drupal services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="l-ca-f2 flex flex-1 gap-[4px] rounded-bl-custom-br555 rounded-tl-custom-br555 border-2 border-r-0 border-callToAction py-4 pl-4 pr-0">
            <img src={biselBig} />
            <img className="hidden md:block" src={biselBigM} />
            <img className="hidden md:block" src={biselBigL} />
            <img className="" src={biselBig} />
            <img className="hidden md:block" src={biselBig} />
          </div>
        </div>
        <div className="l-cb">
          <div className="l-cb-f1">
            <div className="l-cb-f1-f1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboMD;
