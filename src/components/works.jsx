import React from "react";
import TituloSeccion from "./tituloSeccion";
import ComboLG from "./comboLG";
import ComboMD from "./comboMD";
import ComboMDR from "./comboMD-R";
import ComboL from "./comboL";
import ComboS from "./comboS";
import ButtonVerMas from "./buttonVerMas";




import "../css/works.css";

const Works = () => {
  return (
    <div className="works_content px-3 py-0 md:mt-[16px]">
      <div className="works-back mx-auto w-full max-w-[1440px] ">
        <div className="works-titulo px-[16px] lg:px-[60px]" id="works">
          <TituloSeccion titulo="Works" />
        </div>
        <div className="seccion-subTitulo flex flex-col px-[16px] mt-[24px] lg:px-[90px]">
          <span className="text-md-lato-700 grey-black text-left">
            Grounded in research and elevated by creativity.
          </span>

          <span className="text-md-lato-400 grey-black text-left">
            We navigate the complexities of user behavior to deliver experiences that captivate and convert.
          </span>
        </div>

        <ButtonVerMas />



        <div className="contenedorCombos">

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[750px_420px] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px]">
            <ComboMDR data={['clarin','home']}/>
            <ComboMD data={['mondelez','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[1fr_1fr] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px] ">
            <ComboMD data={['nissan','home']}/>
            <ComboMDR data={['cocacola','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[420px_750px] lg:gap-[90px] grid-cols-[1fr] px-[20px] mt[16px]">
            <ComboMDR data={['molinos','home']}/>
            <ComboMD data={['unilever','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[1fr_1fr] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px] ">
            <ComboMD data={['fiat','home']}/>
            <ComboMDR data={['whirlpool','home']}/>
          </div>
        
          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[750px_420px] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px]">
            <ComboMDR data={['estrada','home']}/>
            <ComboMD data={['disneyBaby','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[1fr_1fr] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px] ">
            <ComboMD data={['iplan','home']}/>
            <ComboMDR data={['givaudan','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[420px_750px] lg:gap-[90px] grid-cols-[1fr] px-[20px] mt[16px]">
            <ComboMDR data={['procter','home']}/>
            <ComboMD data={['beiersdorf','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[1fr_1fr] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px] ">
            <ComboMD data={['peugeot','home']}/>
            <ComboMDR data={['televisa','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[750px_420px] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px]">
            <ComboMDR data={['gm','home']}/>
            <ComboMD data={['turner','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[1fr_1fr] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px] ">
            <ComboMD data={['nike','home']}/>
            <ComboMDR data={['mcdonalds','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[420px_750px] lg:gap-[90px] grid-cols-[1fr] px-[20px] mt[16px]">
            <ComboMDR data={['philip','home']}/>
            <ComboMD data={['abinbev','home']}/>
          </div>
          
          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[1fr_1fr] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px] ">
            <ComboMD data={['disney','home']}/>
            <ComboMDR data={['kimberly','home']}/>
          </div>

          <div className=" filaCombos grid lg:mt-[46px] lg:px-[90px] lg:grid-cols-[750px_420px] lg:gap-[90px] grid-cols-[1fr] px-[8px] mt-[16px] gap-[16px]">
            <ComboMDR data={['pepsico','home']}/>
            <ComboMD data={['pacoRabanne','home']}/>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Works;
