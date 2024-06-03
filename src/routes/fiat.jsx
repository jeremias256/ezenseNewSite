import React, { useEffect, useState } from "react";
import { clientes, getClienteById } from "./clientes"; // Asegúrate de que la ruta sea correcta

import "../css/fiat.css";

/* SubComponentes */
import TituloSeccionWhite from "../components/tituloSeccion";
import ComboPP from "../components/comboPP";
import Contacto from "../components/contacto";

import ComboMD from "../components/comboMD";
import ComboMD2 from "../components/comboMD-R";

// #region Librerias para hacer carrousel */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// #endregion Librerias para hacer carrousel */

const nombreCliente = "cocacola"; //iplan -- fiat

const clienteRender = getClienteById(nombreCliente);
console.log(clienteRender.descripcionCombo);
const idCliente = clienteRender.id;

/** Imagenes que van en la descripción */
const img1 = `/ezenseSite9/src/assets/fotoClientes/proyecto${idCliente}/foto1.png`;
const img2 = `/ezenseSite9/src/assets/fotoClientes/proyecto${idCliente}/foto2.png`;

/** Imagenes que van en el carrousel */
const videoBackImagenes = `/ezenseSite9/src/assets/fotoClientes/proyecto${idCliente}/fotoSlider.mp4`;
const imagenesSlider = [];
for (let index = 0; index < clienteRender.cantImagen; index++) {
  let obj = {
    id: index + 1,
    imagen: `/ezenseSite9/src/assets/fotoClientes/proyecto${idCliente}/fotoSlider${index + 1}.png`,
  };

  imagenesSlider.push(obj);
}

/* Fotos que van en los proyectos relacionados */



const Proyecto = () => {
  return (
    <div className="pp-content">
      <TituloSeccionWhite titulo={clienteRender.titulo} />

      <div className="pp-info">
        <div className="pp-info-detalle">
          <p className="text-md-lato-700 call-to-action">
            {" "}
            {clienteRender.descripcionText.descTitulo}
          </p>
          <p className="text-sm-nunito-400 text-greyBlack">
            {clienteRender.descripcionText.descParrafo}
          </p>
        </div>

        <div className="pp-info-imagen">
          <img src={img1} />
          <p className="text-md-lato-700 call-to-action"> + </p>
          <img src={img2} />
        </div>

        <div className="pp-info-combo">
          <ComboPP data={clienteRender.descripcionCombo} />
        </div>
      </div>

      <div className="video-background-container">
        <video autoPlay loop muted className="video-background">
          <source src={videoBackImagenes} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="pp-imagenes">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {imagenesSlider.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  src={img.imagen}
                  alt={`Slider ${img.id}`}
                  className="d-block w-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="pp-relacionados">
        <p className="text-lg-nunito-400 greyBlack"> Proyectos relacionados </p>
        <div className="pp-relacionadosCombos">
          <ComboMD
            data={[clienteRender.proyectoRelacionado1.proyectoRelacionado, 'pp']}
          /> 
          <ComboMD2
            data={[clienteRender.proyectoRelacionado2.proyectoRelacionado, 'pp']}
          />
        </div>
      </div>

      <div>
        <Contacto />
      </div>
    </div>
  );
};
export default Proyecto;
