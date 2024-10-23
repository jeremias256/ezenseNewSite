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
      gridCols: 'xl:grid-cols-[61.5%_34.5%] 2xl:grid-cols-[59.5%_34%]'
    },
    { 
      data1: ['nissan', 'home'], 
      data2: ['cocacola', 'home'], 
      gridCols: 'xl:grid-cols-[48%_48%] 2xl:grid-cols-[46.6%_47%]'
    },
    { 
      data1: ['molinos', 'home'], 
      data2: ['unilever', 'home'], 
      gridCols: 'xl:grid-cols-[34.5%_61.5%] 2xl:grid-cols-[33.7%_60%]'
    },
    { 
      data1: ['fiat', 'home'], 
      data2: ['whirlpool', 'home'], 
      gridCols: 'xl:grid-cols-[48%_48%] 2xl:grid-cols-[47%_46.5%]'
    },
    { 
      data1: ['estrada', 'home'], 
      data2: ['disneyBaby', 'home'], 
      gridCols: 'xl:grid-cols-[61.5%_34.5%] 2xl:grid-cols-[60%_33.6%]'
    },
    { 
      data1: ['iplan', 'home'], 
      data2: ['givaudan', 'home'], 
      gridCols: 'xl:grid-cols-[48%_48%] 2xl:grid-cols-[46.6%_47%]'
    }
  ];

  const filaCombosData = [
    {
      className: "xl:grid-cols-[39.5%_69.5%]",
      combos: [ { component: ComboMDR, data: ['procter', 'home'] }, { component: ComboMD, data: ['beiersdorf', 'home'] } ]
    },
    {
      className: "xl:grid-cols-[54%_54.5%]",
      combos: [ { component: ComboMD, data: ['peugeot', 'home'] }, { component: ComboMDR, data: ['televisa', 'home'] } ]
    },
    {
      className: "xl:grid-cols-[70%_40%]",
      combos: [ { component: ComboMDR, data: ['gm', 'home'] }, { component: ComboMD, data: ['turner', 'home'] } ]
    },
    {
      className: "xl:grid-cols-[55%_54%]",
      combos: [ { component: ComboMD, data: ['nike', 'home'] }, { component: ComboMDR, data: ['mcdonalds', 'home'] } ]
    },
    {
      className: "xl:grid-cols-[39.5%_70%]",
      combos: [ { component: ComboMDR, data: ['philip', 'home'] }, { component: ComboMD, data: ['abinbev', 'home'] } ]
    },
    {
      className: "xl:grid-cols-[55%_54.5%]",
      combos: [ { component: ComboMD, data: ['disney', 'home'] }, { component: ComboMDR, data: ['kimberly', 'home'] } ]
    },
    {
      className: "xl:grid-cols-[71%_39%]",
      combos: [ { component: ComboMDR, data: ['pepsico', 'home'] }, { component: ComboMD, data: ['pacoRabanne', 'home'] } ]
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
    <div className="px-3 py-0 relative mt-[48px] 1.5xl:px-0">
      <div className="mx-auto w-full max-w-[1440px] ">
        <TituloSeccion titulo="Works" id="works" customWidth="w-[155px]" className="works-titulo px-[16px] ml:px-[40px] lg:px-[50px] xl:px-[30px] 1.5xl:px-[60px] 2xl:mx-[-70px] gap-10"/>

        <div className="flex flex-col px-[16px] mt-[24px] ml:px-[40px] lg:px-[50px] xl:px-[90px]">
          <span className="text-md-lato-700 grey-black text-left">Grounded in research and elevated by creativity.</span>
          <span className="text-md-lato-400 grey-black text-left">We navigate the complexities of user behavior to deliver experiences that captivate and convert.</span>
        </div>

        <div className="sm:px-4 md:px-7 ml:px-11 xl:px-5 1.5xl:px-[90px] 1.5xl:pr-[120px] 2xl:px-0">
          {combosData.map((combo, index) => (
            <div key={index} className={`grid lg:mt-[45px] gap-4 xl:gap-[52px] 1.5xl:gap-[90px] ${combo.gridCols} mt-[16px]`}>
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
                  <div key={index} className={`grid lg:mt-[46px] lg:px-[90px] xl:gap-[52px] 1.5xl:gap-[90px] grid-cols-[1fr] xl:pl-[0px] xl:px-[154px] 2xl:pr-[180px] ${fila.className}`}>
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


