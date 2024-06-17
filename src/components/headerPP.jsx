import React from "react";
import imgLogo from "../assets/logo-ezense.png";
import useEzense from "../hooks/useEzenseProvider";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const { scrollY, screenHeight } = useEzense();
  
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      let yOffset;
      if(isMenuOpen == true){
        yOffset = -70; // Ajuste de 54px
      }else{
        yOffset = -120; // Ajuste de 54px
      }
      
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };
  return (

  
    <header className={` w-full flex ${isMenuOpen ? 'lg:h-[54px] h-[62px]' : 'lg:h-[54px] h-[115px]'}`}>


    <div className="flex flex-col lg:flex-row items-center justify-between w-full px-[16px] md:px-0 ">

      <div className="flex w-full  lg:items-center justify-between h-[62px]">
        
        <div className="flex items-center gap-[8px]">
          <img src={imgLogo} width="31px" height="31px" alt="Logo de e-zense" />
          <div className="mt-[10px]">
            <span className="titulo grey-black">e-zense</span>
          </div>
        </div>

        <Link to={`/#`} className="flex">
          <button className="flex items-center" >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          </button>
        </Link>

      </div>

    </div>



    
  </header>
  );
};

export default Header;
