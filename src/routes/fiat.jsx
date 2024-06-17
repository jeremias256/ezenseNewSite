import React, { useEffect, useState } from "react";
import { clientes, getClienteById } from "./clientes"; // Asegúrate de que la ruta sea correcta
import { useParams } from 'react-router-dom';
import "../css/fiat.css";

/* SubComponentes */
import TituloSeccionWhite from "../components/tituloSeccion";
import ComboPP from "../components/comboPP";
import Contacto from "../components/contacto";
import HeaderPP from '../components/headerPP'

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



const Proyecto = () => {

  const { cliente } = useParams();

  const nombreCliente =  cliente; //iplan -- fiat



  const clienteRender = getClienteById(nombreCliente);
  const idCliente = clienteRender.id;

  /** Imagenes que van en la descripción */
  const img1 = `/ezenseSite12/assets/fotoClientes/proyecto${idCliente}/foto1.png`;
  const img2 = `/ezenseSite12/assets/fotoClientes/proyecto${idCliente}/foto2.png`;

  /** Imagenes que van en el carrousel */
  const videoBackImagenes = `/ezenseSite12/assets/fotoClientes/proyecto${idCliente}/fotoSlider.mp4`;
  const imagenesSlider = [];
  for (let index = 0; index < clienteRender.cantImagen; index++) {
    let obj = {
      id: index + 1,
      imagen: `/ezenseSite12/assets/fotoClientes/proyecto${idCliente}/fotoSlider${index + 1}.png`,
    };

    imagenesSlider.push(obj);
  }

  useEffect(() => {
    // Esto desplazará la ventana hacia la parte superior cuando el componente se monte
    window.scrollTo(0, 0);
  }, []);

  return (
    <>  
    <div className="fixed left-1/2 z-50  w-full -translate-x-1/2 transform bg-white50 backdrop-blur-sm md:top-0 md:flex md:h-auto md:w-[98%] md:rounded-[555px] md:px-[16px] lg:mt-[8px]">
      <HeaderPP />
    </div>

    <div className="pp-content pt-[80px] lg:w-[1440px] lg:m-[auto] ">
      <div className="works-titulo px-[16px] lg:px-[60px]">
        <TituloSeccionWhite titulo={clienteRender.titulo} />
      </div>
      <div className="pp-info
        flex 
        flex-col lg:flex-row lg:justify-between
        my-[40px] 
        mx-[16px] lg:mx-[90px]
        gap-[40px] lg:gap-[90px]
      ">
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

      <div className="imagenesMovile lg:hidden mx-[16px] flex flex-col gap-[24px]">
           {imagenesSlider.map((img) => (
              
                <img
                  src={img.imagen}
                  alt={`Slider ${img.id}`}
                  className="d-block w-100"
                />
              
            ))}

      </div>


      <div className="video-background-container hidden lg:block">
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
            className="mySwiper "
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

      <div className="pp-relacionados my-[18px] mx-[16px] flex flex-col gap-[30px]">
       
        <p className="text-lg-nunito-400 greyBlack"> Proyectos relacionados </p>
       
        <div className="
            lg:flex
            lg:gap-[70px]
            lg:px-[90px]">
          
          <div className="w-full">
          <ComboMD
            data={[clienteRender.proyectoRelacionado1.proyectoRelacionado, 'pp']}
          /> 
          </div>
          <div className=" w-full">
          <ComboMD2
            data={[clienteRender.proyectoRelacionado2.proyectoRelacionado, 'pp']}
          />
         </div>
        </div>

      </div>

      <div>
        <Contacto />
      </div>
    </div>
    </>

  );
};
export default Proyecto;
