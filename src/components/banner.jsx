import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

import videoDrone from "../assets/drone.mp4";
import useEzense from "../hooks/useEzenseProvider";

const Banner = () => {
  /* --------------------------------------- estados locales -------------------------------------- */
  const anteriorY = useRef(0);
  const playerRef = useRef(null);
  const estado = useRef(null);
  /* ------------------------------------------- context ------------------------------------------ */
  const { setClassFixed, setScrollY } = useEzense();

  //actualia eje y
  useEffect(() => {
    const updateScrollY = () => {
      const newY = window.scrollY;
      if (newY > anteriorY.current) estado.current = "subir";
      if (newY >= 100 && newY <= 200) adelantaVideo1();
      if (newY >= 200 && newY <= 300) adelantaVideo2();
      if (newY >= 300 && newY <= 400) adelantaVideo3();
      if (newY >= 400 && newY <= 500) adelantaVideo4();
      if (newY >= 500 && newY <= 600) adelantaVideo5();
      if (newY >= 600 && newY <= 700) adelantaVideo6();
      if (newY >= 700 && newY <= 800) adelantaVideo7();
      if (newY >= 800 && newY <= 900) adelantaVideo8();
      if (newY >= 900 && newY <= 1000) adelantaVideo9(anteriorY.current);
      if (newY >= 1000) adelantaVideo10(anteriorY.current);

      anteriorY.current = newY;

      setScrollY(newY); //NO VA PARA FINAL
      if (newY < 1000) setClassFixed(true);
      if (newY >= 1000) setClassFixed(false);
    };

    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);
  const adelantaVideo1 = () => {
    playerRef.current.seekTo(1, "seconds");
  };
  const adelantaVideo2 = () => {
    playerRef.current.seekTo(2, "seconds");
  };
  const adelantaVideo3 = () => {
    playerRef.current.seekTo(3, "seconds");
  };
  const adelantaVideo4 = () => {
    playerRef.current.seekTo(4, "seconds");
  };
  const adelantaVideo5 = () => {
    playerRef.current.seekTo(5, "seconds");
  };
  const adelantaVideo6 = () => {
    playerRef.current.seekTo(6, "seconds");
  };
  const adelantaVideo7 = () => {
    playerRef.current.seekTo(7, "seconds");
  };
  const adelantaVideo8 = () => {
    playerRef.current.seekTo(8, "seconds");
  };
  const adelantaVideo9 = (estado) => {
    playerRef.current.seekTo(9, "seconds");
  };
  const adelantaVideo10 = (estado) => {
    console.log("👀 - adelantaVideo10 - estado:", estado);
    document.getElementById("bannerVideo").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("bannerVideo").classList.add("hidden");
    }, 2000);
    playerRef.current.seekTo(10, "seconds");
  };

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url={videoDrone}
        width="100%"
        height="100%"
        muted
      />
    </>
  );
};

export default Banner;
