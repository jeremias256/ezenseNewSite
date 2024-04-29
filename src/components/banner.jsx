import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";

import StickyBox from "react-sticky-box";

import ezenseVideo from "../assets/ezenseVideo.mp4";
import useEzense from "../hooks/useEzenseProvider";

const Banner = () => {
  const { setClassFixed, setScrollY } = useEzense();
  /* --------------------------------------- estados locales -------------------------------------- */
  const playerRef = useRef(null);
  const anteriorY = useRef(0);
  const frame = 0.025;
  let acumulador = 0;

  useEffect(() => {
    const updateScrollY = () => {
      acumulador = acumulador + frame;
      const newY = window.scrollY;
      if (newY > anteriorY.current) {
        adelantarVideo();
      } else {
        retrasarVideo();
      }

      anteriorY.current = newY;

      setScrollY(newY); //NO VA PARA FINAL
      //0.795 79.5% screenHeight * 0.795
      if (newY < 4000) setClassFixed(true);
      if (newY >= 4000) setClassFixed(false);
    };

    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);
  const adelantarVideo = () => {
    playerRef.current.seekTo(
      playerRef.current.getCurrentTime() + frame,
      "fraction ",
    );
  };
  const retrasarVideo = () => {
    playerRef.current.seekTo(
      playerRef.current.getCurrentTime() - frame,
      "fraction ",
    );
  };

  return (
    <ReactPlayer
      ref={playerRef}
      url={ezenseVideo}
      width="100%"
      height="100%"
      muted
      //style={{ position: "", top: "0px" }}
    />
  );
};

export default Banner;
