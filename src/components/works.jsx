import React from "react";
import TituloSeccion from "./tituloSeccion";
import ComboLG from "./comboLG";
import ComboMD from "./comboMD";
import "../css/works.css";

const Works = () => {
  return (
    <>
      <div className="works_content absolute top-[80px] w-full">
        <TituloSeccion titulo="Works" />
        <div className="seccion-subTitulo">
          <span className="text-md-lato-700 grey-black">
            {" "}
            Unites aesthetic innovation with technical prowess.{" "}
          </span>

          <span className="text-md-lato-400 grey-black">
            {" "}
            From strategic planning that charts your digital destiny to
            Intuitive UX Design paired with advanced Coding Techniques, we
            architect and implement ideas into impactful digital realities{" "}
          </span>
        </div>
        <div className="combo_fila1">
          <ComboLG />
        </div>

        <div className="combo_fila2">
          <ComboMD />
          <ComboMD />
        </div>

        <div className="combo_fila3">
          <ComboLG />
          <ComboLG />
        </div>




      </div>
    </>
  );
};

export default Works;
