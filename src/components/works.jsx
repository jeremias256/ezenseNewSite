import React from "react";
import TituloSeccion from "./tituloSeccion";
import ComboLG from "./comboLG";
import ComboMD from "./comboMD";
import ComboMDR from "./comboMD-R";
import ComboL from "./comboL";
import ComboS from "./comboS";
import "../css/works.css";

const Works = () => {
  return (
    <div className="works_content px-3 py-0 md:mt-[16px]">
      <div className="works-back mx-auto w-full max-w-[1440px] ">
        <div className="works-titulo px-[60px]">
          <TituloSeccion titulo="Works" />
        </div>
        <div className="seccion-subTitulo mt-[24px] flex flex-col px-[90px]">
          <span className="text-md-lato-700 grey-black text-left">
            Grounded in research and elevated by creativity.
          </span>

          <span className="text-md-lato-400 grey-black text-left">
            We navigate the complexities of user behavior to deliver experiences that captivate and convert.
          </span>
        </div>

        <div className="combo_fila1 mt-[16px] px-[90px] ">
          <ComboMDR data={['clarin','home']}/>
          <ComboMD data={['mondelez','home']}/>
        </div>

        <div className="combo_fila3 mt-[47px] px-[90px] ">
          <ComboMD data={['nissan','home']}/>
          <ComboMDR data={['cocacola','home']}/>
        </div>
       
        {/* <div className="combo_fila3 mt-[16px] px-[90px]">
        
          <ComboMD data={['fiat','home']}/>
          <ComboMDR data={['fiat','home']}/>
  
        </div> */}


      </div>
    </div>
  );
};

export default Works;
