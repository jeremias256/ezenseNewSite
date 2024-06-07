import React from "react";
import "../css/bureau.css";
import TituloSeccionWhite from "./tituloSeccion";

import flavio from "../assets/flavioVillan.png";
import javi from "../assets/javiMartinez.png";
import ale from "../assets/aleJeroz.png";

const Bureau = () => {
  return (
    <div className="bureau-content px-3 py-0 mt-[60px]">
      <div
        className="bureau-back bg-bgGris luminosity m-auto max-w-[1440px] rounded-[24px] bg-opacity-90 bg-cover bg-no-repeat brightness-90 filter"
        style={{ backgroundImage: "url(src/assets/back-servicios.gif)" }}
      >
        <div className="bureau-back2">
          <TituloSeccionWhite titulo="Bureau" />

          <div className="bureau-subTitulo">
            <span className="text-md-lato-700 grey-black">
              Unites aesthetic innovation with technical prowess.
            </span>

            <span className="text-md-lato-400 grey-black">
              From strategic planning that charts your digital destiny to
              Intuitive UX Design paired with advanced Coding Techniques, we
              architect and implement ideas into impactful digital realities
            </span>
          </div>

          <div className="personas">
            <div className="persona">
              <div className="persona-foto">
                <img src={flavio} />
              </div>

              <div className="persona-nombre">
                <span className="text-sm-nunito-700 grey-black">
                  FLAVIO VILLAN{" "}
                </span>
              </div>

              <div className="persona-funcion">
                <span className="text-sm-nunito-400 grey-black">
                  {" "}
                  UI/UX Specialist / Partner{" "}
                </span>
              </div>
            </div>

            <div className="persona">
              <div className="persona-foto">
                <img src={javi} />
              </div>

              <div className="persona-nombre">
                <span className="text-sm-nunito-700 grey-black">
                  {" "}
                  JAVIER MARTINEZ{" "}
                </span>
              </div>

              <div className="persona-funcion">
                <span className="text-sm-nunito-400 grey-black">
                  {" "}
                  IT Director / Partner{" "}
                </span>
              </div>
            </div>

            <div className="persona">
              <div className="persona-foto">
                <img src={ale} />
              </div>

              <div className="persona-nombre">
                <span className="text-sm-nunito-700 grey-black">
                  {" "}
                  ALE JEROZ{" "}
                </span>
              </div>

              <div className="persona-funcion">
                <span className="text-sm-nunito-400 grey-black">
                  {" "}
                  Operative Director / Asociated{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bureau;
