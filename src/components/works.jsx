import React from "react";
import TituloSeccion from "./tituloSeccion";
import ComboMD from "./comboMD";
import ComboMDR from "./comboMD-R";
import ButtonVerMas from "./buttonVerMas";
import { useState } from "react";

export const Works = () => {
  const [paginacionCombos, setPaginacionCombos] = useState(0);

  const combosData = [
    {
      data1: ['clarin', 'home'],
      data2: ['mondelez', 'home'],
      gridCols: 'xl:grid-cols-[61.5%_34.5%]'
    },
    {
      data1: ['nissan', 'home'],
      data2: ['cocacola', 'home'],
      gridCols: 'xl:grid-cols-[48%_48%]'
    },
    {
      data1: ['molinos', 'home'],
      data2: ['unilever', 'home'],
      gridCols: 'xl:grid-cols-[34.5%_61.5%]'
    },
    {
      data1: ['fiat', 'home'],
      data2: ['whirlpool', 'home'],
      gridCols: 'xl:grid-cols-[48%_48%]'
    },
    {
      data1: ['estrada', 'home'],
      data2: ['disneyBaby', 'home'],
      gridCols: 'xl:grid-cols-[61.5%_34.5%]'
    },
    {
      data1: ['iplan', 'home'],
      data2: ['givaudan', 'home'],
      gridCols: 'xl:grid-cols-[48%_48%]'
    }
  ];

  const filaCombosData = [
    {
      className: "xl:grid-cols-[420px_750px] px-[20px] mt[16px]",
      combos: [{ component: ComboMDR, data: ['procter', 'home'] }, { component: ComboMD, data: ['beiersdorf', 'home'] }]
    },
    {
      className: "xl:grid-cols-[1fr_1fr] px-[8px] mt-[16px] gap-[16px]",
      combos: [{ component: ComboMD, data: ['peugeot', 'home'] }, { component: ComboMDR, data: ['televisa', 'home'] }]
    },
    {
      className: "xl:grid-cols-[750px_420px] px-[8px] mt-[16px] gap-[16px]",
      combos: [{ component: ComboMDR, data: ['gm', 'home'] }, { component: ComboMD, data: ['turner', 'home'] }]
    },
    {
      className: "xl:grid-cols-[1fr_1fr] px-[8px] mt-[16px] gap-[16px]",
      combos: [{ component: ComboMD, data: ['nike', 'home'] }, { component: ComboMDR, data: ['mcdonalds', 'home'] }]
    },
    {
      className: "xl:grid-cols-[420px_750px] px-[20px] mt[16px]",
      combos: [{ component: ComboMDR, data: ['philip', 'home'] }, { component: ComboMD, data: ['abinbev', 'home'] }]
    },
    {
      className: "xl:grid-cols-[1fr_1fr] px-[8px] mt-[16px] gap-[16px]",
      combos: [{ component: ComboMD, data: ['disney', 'home'] }, { component: ComboMDR, data: ['kimberly', 'home'] }]
    },
    {
      className: "xl:grid-cols-[750px_420px] px-[8px] mt-[16px] gap-[16px]",
      combos: [{ component: ComboMDR, data: ['pepsico', 'home'] }, { component: ComboMD, data: ['pacoRabanne', 'home'] }]
    }
  ];

  const mostrarMas = () => {
    // console.log("Presiono mostrar más");
    setPaginacionCombos(1);
  }

  const mostrarMenos = () => {
    // console.log("Presiono mostrar más");
    setPaginacionCombos(0);
  }

  return (
    <div className="px-3 py-0 relative mt-[48px] justify-center flex ">
      <div className="mx-auto w-full max-w-[1440px] ">
        <TituloSeccion titulo="Works" id="works" customWidth="w-[155px]" className="works-titulo px-[16px] ml:px-[40px] lg:px-[50px] xl:px-[30px] 1.5xl:px-[60px] gap-10" />

        <div className="flex flex-col px-[16px] mt-[24px] ml:px-[40px] lg:px-[50px] xl:px-[90px]">
          <span className="text-md-lato-700 grey-black text-left">Grounded in research and elevated by creativity.</span>
          <span className="text-md-lato-400 grey-black text-left">We navigate the complexities of user behavior to deliver experiences that captivate and convert.</span>
        </div>

        <div className="sm:px-4 md:px-11 xl:px-5 1.5xl:px-[90px]">
          {combosData.map((combo, index) => (
            <div key={index} className={`grid lg:mt-[45px] gap-4 xl:gap-[52px] 1.5xl:gap-[90px] 2xl:gap-[70px] ${combo.gridCols} mt-[16px]`}>
              {index % 2 !== 0 ? (
                <>
                  <ComboMD data={combo.data1} />
                  <ComboMDR data={combo.data2} />
                </>
              ) : (
                <>
                  <ComboMDR data={combo.data1} />
                  <ComboMD data={combo.data2} />
                </>
              )}
            </div>
          ))}

          <div className={`text-center my-[32px] ${paginacionCombos == 1 ? 'hidden' : 'block'}`} >
            <ButtonVerMas text={'Mostrar más'} onClick={mostrarMas} />
          </div>

          {paginacionCombos == 1 &&
            (
              <>
                {filaCombosData.map((fila, index) => (
                  <div key={index} className={`grid lg:mt-[46px] lg:px-[90px] lg:gap-[90px] grid-cols-[1fr] ${fila.className}`}>
                    {fila.combos.map((combo, idx) => {
                      const ComboComponent = combo.component;
                      return <ComboComponent key={idx} data={combo.data} />;
                    })}
                  </div>
                ))}
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};


