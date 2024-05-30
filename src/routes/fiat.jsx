import React, { useEffect, useState } from "react";
import TituloSeccionWhite from "../components/tituloSeccion";
import "../css/fiat.css";
import ComboPP from "../components/comboPP";
import Contacto from "../components/contacto";
import ComboMD1 from "../components/comboMD";
import ComboMD2 from "../components/comboMD-R";

import fiat1 from "../assets/fotoClientes/fiat/fiat-1.png";
import fiat2 from "../assets/fotoClientes/fiat/fiat-2.png";

import fiatSlider1 from "../assets/fotoClientes/fiat/fiatSlider1.png";
import fiatSlider2 from "../assets/fotoClientes/fiat/fiatSlider2.png";
import fiatSlider3 from "../assets/fotoClientes/fiat/fiatSlider3.png";
import fiatSlider4 from "../assets/fotoClientes/fiat/fiatSlider4.png";
import fiatSlider5 from "../assets/fotoClientes/fiat/fiatSlider5.png";
import fiatSlider6 from "../assets/fotoClientes/fiat/fiatSlider6.png";
import fiatSlider7 from "../assets/fotoClientes/fiat/fiatSlider7.png";

import videoBackImagenes from "../assets/fotoClientes/fiat/fiat-video.mp4";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Fiat = () => {
  const imagenesSlider = [
    {
      id: 1,
      imagen: fiatSlider1,
    },

    {
      id: 2,
      imagen: fiatSlider2,
    },

    {
      id: 3,
      imagen: fiatSlider3,
    },
    {
      id: 4,
      imagen: fiatSlider4,
    },
    {
      id: 5,
      imagen: fiatSlider5,
    },
    {
      id: 6,
      imagen: fiatSlider6,
    },
    {
      id: 7,
      imagen: fiatSlider7,
    },
  ];

  console.log({ imagenesSlider });

  return (
    <div className="pp-content">
      <TituloSeccionWhite titulo="FIAT" />

      <div className="pp-info">
        <div className="pp-info-detalle">
          <p className="text-md-lato-700 call-to-action">
            {" "}
            “Stylish Parenting”{" "}
          </p>
          <p className="text-sm-nunito-400 text-greyBlack">
            Supporting the client's brief, we designed a website blending
            disruptive grid design with classic content. The Rich Media campaign
            conveys that the 500L retains style and aspiration in its family
            version, emphasizing that parenthood doesn't mean compromising on a
            stylish car.
          </p>
        </div>

        <div className="pp-info-imagen">
          <img src={fiat1} />
          <p className="text-md-lato-700 call-to-action"> + </p>
          <img src={fiat2} />
        </div>

        <div className="pp-info-combo">
          <ComboPP />
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
          <ComboMD1 />
          <ComboMD2 />
        </div>
      </div>

      <div>
        <Contacto />
      </div>
    </div>
  );
};
export default Fiat;
