import { useState } from "react";
/* ----------------------------------------- COMPONENTS ----------------------------------------- */
import TituloSeccion from "./tituloSeccion";
import ComboMD from "./comboMD";
import ComboMDR from "./comboMD-R";
import ButtonVerMas from "./buttonVerMas";

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
      className: "xl:grid-cols-[34.5%_61.5%]",
      data1: ['procter', 'home'],
      data2: ['beiersdorf', 'home'],
    },
    {
      className: "xl:grid-cols-[48%_48%]",
      data1: ['peugeot', 'home'],
      data2: ['televisa', 'home'],
    },
    {
      className: "xl:grid-cols-[61.5%_34.5%]",
      data1: ['gm', 'home'],
      data2: ['turner', 'home'],
    },
    {
      className: "xl:grid-cols-[48%_48%]",
      data1: ['nike', 'home'],
      data2: ['mcdonalds', 'home'],
    },
    {
      className: "xl:grid-cols-[34.5%_61.5%]",
      data1: ['philip', 'home'],
      data2: ['abinbev', 'home'],
    },
    {
      className: "xl:grid-cols-[48%_48%]",
      data1: ['disney', 'home'],
      data2: ['kimberly', 'home'],
    },
    {
      className: "xl:grid-cols-[61.5%_34.5%]",
      data1: ['pepsico', 'home'],
      data2: ['pacoRabanne', 'home'],
    }
  ];

  const mostrarMas = () => setPaginacionCombos(1);

  return (
    <div className="px-4 py-0 relative mt-[60px] xl:px-[60px]">

      <div className="mx-auto w-full max-w-[1440px]">
        <TituloSeccion titulo="Works" id="works" customWidth="w-[155px]" className="max-w-[1320px] mx-auto" />

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


