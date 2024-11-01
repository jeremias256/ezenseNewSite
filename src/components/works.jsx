import { useState } from "react";
/* ----------------------------------------- COMPONENTS ----------------------------------------- */
import TituloSeccion from "./tituloSeccion";
import ComboMD from "./comboMD";
import ComboMDR from "./comboMD-R";
import ButtonVerMas from "./buttonVerMas";

import { combosData, filaCombosData } from "../constants";

export const Works = () => {
  const [paginacionCombos, setPaginacionCombos] = useState(0);

  const mostrarMas = () => setPaginacionCombos(1);

  return (
    <div className="px-4 py-0 relative mt-[60px] xl:px-[60px]">

      <div className="mx-auto w-full max-w-[1440px]">
        <TituloSeccion titulo="Works" id="works" customWidth="w-[255px] md:w-[150px]" className="max-w-[1320px] mx-auto" gradient="bg-gradient-to-r from-white to-background overflow-hidden" />

        {/* TEXTO HEADER */}
        <div className="mx-auto flex flex-col px-3 mt-6 xl:px-[28px] max-w-[1320px]">
          <span className="text-md-lato-700 grey-black text-left">Grounded in research and elevated by creativity.</span>
          <span className="text-md-lato-400 grey-black text-left">We navigate the complexities of user behavior to deliver experiences that captivate and convert.</span>
        </div>

        <div className="max-w-[1320px] mx-auto">
          {combosData.map((combo, index) => (
            <div key={index} className={`grid ${index == 0 ? '' : "mt-[16px] lg:mt-[45px]"} gap-4 xl:gap-[52px] ${combo.gridCols}`}>
              {index % 2 !== 0 ? (
                <>
                  <div className="hidden">impar - {index}</div>
                  <ComboMD data={combo.data1} />
                  <ComboMDR data={combo.data2} />
                </>
              ) : (
                <>
                  <div className="hidden">par - {index}</div>
                  <ComboMDR data={combo.data1} />
                  <ComboMD data={combo.data2} />
                </>
              )}
            </div>
          ))}

          <div className={`text-center my-[32px] ${paginacionCombos == 1 ? 'hidden' : 'block'}`} >
            <ButtonVerMas text={'Mostrar más'} onClick={mostrarMas} />
          </div>

          {paginacionCombos == 1 && (
            <>
              {filaCombosData.map((fila, index) => (
                <div key={index} className={`grid lg:mt-[45px] gap-4 xl:gap-[52px] 1.5xl:gap-[90px] ${fila.className} mt-[16px]`}>
                  {index % 2 !== 0 ? (
                    <>
                      <ComboMD data={fila.data1} />
                      <ComboMDR data={fila.data2} />
                    </>
                  ) : (
                    <>
                      <ComboMDR data={fila.data1} />
                      <ComboMD data={fila.data2} />
                    </>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};


