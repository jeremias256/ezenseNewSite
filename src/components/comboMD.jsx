import React, { useEffect } from "react";
import "../css/comboMD.css";
import { clientes, getClienteById } from "../routes/clientes"; 

import biselBig from "../assets/LogosCoca.png";
import biselBigM from "../assets/LogosCocaM.png";
import biselBigL from "../assets/LogosCodaL.png";

const ComboMD = ({ data }) => {
  console.log(data);
  const clienteRender = getClienteById(data[0]);
  console.log(clienteRender);

  // Si la variable pp es 'pp', limita las imágenes a 2
  const imagenes = data[1] === 'pp' ? Object.values(clienteRender.imgCombo).slice(0, 2) : Object.values(clienteRender.imgCombo);


  return (
    <>
      <div className="md-combo_content3">
        <div className="md-ca">
          <div className="md-ca-f1">
            <div className="md-ca-f1-f1">
              <span className="text-sm-nunito-700 call-to-action">
                {clienteRender.descripcionCombo.comboTitulo}
              </span>
            </div>

            <div className="md-ca-f1-f2">
              <div className="md-ca-f1-f2-c1">
                <div className="md-ca-f1-f2-c1-relleno1"></div>
                <div className="md-ca-f1-f2-c1-f1"></div>
                <div className="md-ca-f1-f2-c1-relleno2"></div>
                <div className="md-ca-f1-f2-c1-f2"></div>
              </div>

              <div className="md-ca-f1-f2-c2">
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-700 grey-black">
                    {clienteRender.descripcionCombo.linea1}
                  </p>
                </div>
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    {clienteRender.descripcionCombo.linea2}
                  </p>
                </div>
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    {clienteRender.descripcionCombo.linea3}
                  </p>
                </div>
                <div className="md-ca-f1-f2-c2-f1">
                  <p className="text-sm-nunito-400 grey-black">
                    {clienteRender.descripcionCombo.linea4}
                  </p>
                </div>
                <p className="text-sm-nunito-400 grey-black ml-2">
                  {clienteRender.descripcionCombo.linea5}
                </p>
              </div>
            </div>
          </div>
          <div className="md-ca-f2">
            {imagenes.map((imgSrc, index) => (
               <img key={index} src={imgSrc} alt={`Imagen ${index + 1}`} />
            ))}
           
          </div>
        </div>
        <div className="md-cb">
          <div className="md-cb-f1">
            <div className="md-cb-f1-f1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComboMD;
