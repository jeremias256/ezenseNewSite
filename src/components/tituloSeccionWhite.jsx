import React from "react";
import "../css/tituloSeccion.css";
import biselBig from "../assets/biselBig.png";
import biselLine from "../assets/biselLine.png";

import BiselSmall from "./bisel/biselSmall";

const TituloSeccion = (props) => {
  return (
    <>
      <div className="title_content flex">
        <div className="tc-c1 w-[32px]">
          <div className="tc-c1-r1 h-[58px] rounded-bl-custom-br555 rounded-tl-custom-br555 border-[2.5px] border-r-0 border-callToAction"></div>
          <div className="tc-c1-r2 h-[30px] border-b-[2.5px] border-callToAction"></div>
        </div>
        <div className="tc-c2">
          <div className="tc-c2-r1 min-h-[58px] border-b-[2.5px] border-t-[2.5px] border-callToAction pt-[2px]">
            <span className="text-lg-nunito-400 white ml-[-8px]">
              {props.titulo}
            </span>{" "}
          </div>
          <div className="tc-c2-r2 h-[30px] border-b-[2.5px] border-callToAction">
            {" "}
          </div>
        </div>
        <div className="tc-c3">
          <div className="tc-c3-r1 h-[34px] w-[45px]">
            <BiselSmall />{" "}
          </div>
          <div className="tc-c3-r2 h-[24px] w-[45px] border-b-[2.5px] border-callToAction">
            {" "}
          </div>
          <div className="tc-c3-r3 h-[30px] border-b-[2.5px] border-callToAction">
            {" "}
          </div>
        </div>
        <div className="tc-c4 flex-1">
          <div className="tc-c4-r1 mt-[32px] h-[26px] w-full border-b-[2.5px] border-t-[2.5px] border-callToAction">
            {" "}
          </div>
          <div className="tc-c4-r2 h-[30px] border-b-[2.5px] border-callToAction">
            {" "}
          </div>
        </div>

        <div className="tc-c5 w-[24px]">
          <div className="tc-c5-r1 mt-[32px] h-[24.5px] w-full border-t-[2.5px] border-callToAction">
            {" "}
          </div>
          <div className="tc-c5-r2 my-[-1px] h-[32.5px] rounded-br-custom-br555 rounded-tr-custom-br555 border-b-[2.5px] border-r-[2.5px] border-t-[2.5px] border-callToAction">
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default TituloSeccion;
