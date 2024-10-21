import React from "react";
import BiselSmall from "./bisel/biselSmall";
import "../css/tituloSeccion.css";

const TituloSeccion = ({ className, id, titulo, customWidth, customColor }) => {
  return (
    <div className={className} id={id}>
      <div className="relative h-[90px] flex flex-col justify-end">
        <div className="absolute top-0 flex w-full">
          <div className={`border-t-2 border-b-2 h-[60px] rounded-s-full border-l-2 border-callToAction flex items-center `}>
            <span className={`text-lg-nunito-400 grey-black text-[32px] font-normal pl-6 ${customColor ? customColor : 'text-greyBlack'}`}>{titulo}</span>
          </div>
          <BiselSmall className="flex border-b-2 h-[60px] border-callToAction"/>
          <div className="w-full relative">
            <div className="w-full border-b-2 h-[34px] border-callToAction"></div>
            <div className="w-full absolute border-t-2 h-[30px] top-[58px] right-[1px] rounded-e-full border-callToAction"></div>
          </div>        
        </div>
        <div className="flex border-b-2 border-r-2 rounded-e-full h-[30px] border-callToAction"></div>
      </div>
    </div>
  );
};

export default TituloSeccion;