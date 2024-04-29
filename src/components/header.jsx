import React from "react";
import imgLogo from "../assets/logo-ezense.png";
import useEzense from "../hooks/useEzenseProvider";

const Header = () => {
  const { scrollY, screenHeight } = useEzense();

  return (
    <header className="w-full md:flex md:justify-between">
      <div className="flex cursor-pointer items-center justify-between px-[16px] md:px-0">
        <div className="flex items-center">
          <img src={imgLogo} width="31px" height="31px" alt="Logo de e-zense" />
          <span className="titulo text-greyBlack"> e-zense</span>
        </div>

        <div className="mt-[8px] flex items-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.6826 2.52663L12.6839 2.52672C17.6898 2.86739 21.4978 7.24851 21.4978 12.3179V13.4079C21.4978 14.6699 20.779 15.8379 19.6539 16.2829L19.6526 16.2834C18.2462 16.8443 16.7046 16.2889 15.9417 15.2432L15.5944 14.767L15.1812 15.1874C14.1508 16.2357 12.5785 16.7701 10.9128 16.3813C9.21693 15.9771 7.87514 14.554 7.57007 12.8402L7.57004 12.8401C7.02 9.75622 9.60323 7.11129 12.6665 7.55276L12.6679 7.55296C14.8759 7.86458 16.4978 9.8906 16.4978 12.1779V13.4279C16.4978 13.9691 16.7378 14.4799 17.0873 14.8517C17.4371 15.2235 17.9369 15.4979 18.4978 15.4979C19.0587 15.4979 19.5586 15.2235 19.9083 14.8517C20.2579 14.4799 20.4978 13.9691 20.4978 13.4279V12.3279C20.4978 8.39208 17.9442 4.75562 14.082 3.77353C7.91238 2.17874 2.17928 7.92536 3.76353 14.0923L3.76362 14.0926C4.75583 17.9441 8.39169 20.4979 12.3278 20.4979H15.9978C16.2717 20.4979 16.4978 20.724 16.4978 20.9979C16.4978 21.2717 16.2717 21.4979 15.9978 21.4979H12.3078C7.24876 21.4979 2.86734 17.6902 2.52666 12.6839L2.52657 12.6827C2.11799 6.89599 6.89593 2.11805 12.6826 2.52663ZM8.49781 11.9979C8.49781 13.934 10.0617 15.4979 11.9978 15.4979C13.934 15.4979 15.4978 13.934 15.4978 11.9979C15.4978 10.0617 13.934 8.49787 11.9978 8.49787C10.0617 8.49787 8.49781 10.0617 8.49781 11.9979Z"
              fill="#4A4C58"
              stroke="#4A4C58"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between rounded-b-[12px] border-t-2 border-callToAction px-[16px] py-[12px] md:mt-[8px] md:items-center md:gap-[16px] md:border-none md:px-0 md:py-0">
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Works
        </span>
        <span className="opciones flex cursor-pointer  hover:text-callToAction md:text-[18px] ">
          Bureau
        </span>
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Services
        </span>
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Clients
        </span>
        <span className="opciones flex cursor-pointer hover:text-callToAction md:text-[18px]">
          Team
        </span>
      </div>

      <div className="mt-[8px] hidden items-center md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.6826 2.52663L12.6839 2.52672C17.6898 2.86739 21.4978 7.24851 21.4978 12.3179V13.4079C21.4978 14.6699 20.779 15.8379 19.6539 16.2829L19.6526 16.2834C18.2462 16.8443 16.7046 16.2889 15.9417 15.2432L15.5944 14.767L15.1812 15.1874C14.1508 16.2357 12.5785 16.7701 10.9128 16.3813C9.21693 15.9771 7.87514 14.554 7.57007 12.8402L7.57004 12.8401C7.02 9.75622 9.60323 7.11129 12.6665 7.55276L12.6679 7.55296C14.8759 7.86458 16.4978 9.8906 16.4978 12.1779V13.4279C16.4978 13.9691 16.7378 14.4799 17.0873 14.8517C17.4371 15.2235 17.9369 15.4979 18.4978 15.4979C19.0587 15.4979 19.5586 15.2235 19.9083 14.8517C20.2579 14.4799 20.4978 13.9691 20.4978 13.4279V12.3279C20.4978 8.39208 17.9442 4.75562 14.082 3.77353C7.91238 2.17874 2.17928 7.92536 3.76353 14.0923L3.76362 14.0926C4.75583 17.9441 8.39169 20.4979 12.3278 20.4979H15.9978C16.2717 20.4979 16.4978 20.724 16.4978 20.9979C16.4978 21.2717 16.2717 21.4979 15.9978 21.4979H12.3078C7.24876 21.4979 2.86734 17.6902 2.52666 12.6839L2.52657 12.6827C2.11799 6.89599 6.89593 2.11805 12.6826 2.52663ZM8.49781 11.9979C8.49781 13.934 10.0617 15.4979 11.9978 15.4979C13.934 15.4979 15.4978 13.934 15.4978 11.9979C15.4978 10.0617 13.934 8.49787 11.9978 8.49787C10.0617 8.49787 8.49781 10.0617 8.49781 11.9979Z"
            fill="#4A4C58"
            stroke="#4A4C58"
          />
        </svg>
      </div>
      <div className="absolute left-0 top-0 flex">
        <p>---Alto: {screenHeight}px</p>
        <p>---Y: {scrollY}px</p>
      </div>
    </header>
  );
};

export default Header;
