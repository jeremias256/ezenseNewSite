import { useState } from "react";
/* ------------------------------------------- assets ------------------------------------------- */
import imgLogoEzense from "assets/logo-ezense.png";
import { HamburguesaSVG } from "./svg";

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let yOffset;
      if (isMenuOpen == true) {
        yOffset = -70; // Ajuste de 54px
      } else {
        yOffset = -120; // Ajuste de 54px
      }

      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };
  return (
    <header className={`relative w-full flex ${isMenuOpen ? 'md:h-[54px] h-[62px]' : 'lg:h-[54px] h-[115px]'}`}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-[16px] md:px-0 ">

        <div className="lg:absolute flex w-full md:w-[auto] lg:items-center justify-between h-[62px]">

          <div className="flex items-center gap-[8px]">
            <img src={imgLogoEzense} width="31px" height="31px" alt="Logo de e-zense" />
            <div className="mt-[10px]">
              <span className="titulo grey-black">e-zense</span>
            </div>
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <HamburguesaSVG /> : <img src={closeIcon} />}
          </button>
        </div>


        <div className={`${isMenuOpen ? 'hidden md:flex md:m-auto md:gap-[14px]' : 'lg:hidden border-t-[2px] p-[12px] border-callToAction w-full flex justify-between'}`}>
          <span className="opciones cursor-pointer hover:text-callToAction md:text-[18px]" onClick={() => scrollToSection('works')}>
            Works
          </span>

          <span className="opciones cursor-pointer hover:text-callToAction md:text-[18px]" onClick={() => scrollToSection('services')}>
            Services
          </span>

          <span className="opciones cursor-pointer hover:text-callToAction md:text-[18px]" onClick={() => scrollToSection('clients')}>
            Clients
          </span>

          <span className="opciones cursor-pointer hover:text-callToAction md:text-[18px]" onClick={() => scrollToSection('bureau')}>
            Bureau
          </span>


          <span className="opciones cursor-pointer hover:text-callToAction md:text-[18px]" onClick={() => scrollToSection('contact')}>
            Contact
          </span>
        </div>
      </div>
    </header >
  );
};

