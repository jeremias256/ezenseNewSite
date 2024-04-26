import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

import videoDrone from "../assets/drone.mp4";
import useEzense from "../hooks/useEzenseProvider";

const Banner = () => {
  /* --------------------------------------- estados locales -------------------------------------- */
  const [playing, setPlaying] = useState(false);
  const anteriorY = useRef(0);
  const playerRef = useRef(null);
  /* ------------------------------------------- context ------------------------------------------ */
  const {
    setClassFixed,
    scrollY,
    setScrollY,
    screenWidth,
    setScreenWidth,
    screenHeight,
    setScreenHeight,
    heightX5,
    setHeightX5,
  } = useEzense();

  //actualia eje y
  useEffect(() => {
    const updateScrollY = () => {
      const screenHeight10 = screenHeight * 0.1;
      const screenHeight90 = screenHeight * 0.9;
      const newY = window.scrollY;

      if (newY > anteriorY.current) {
        setPlaying(true);
        //adelantaVideo()
        setTimeout(() => {
          setPlaying(false);
        }, 1000);
      } else {
        retrocedeVideo();
      }
      anteriorY.current = newY;

      setScrollY(newY); //NO VA PARA FINAL
      //menor al 10% agrega FIXED
      if (newY < screenHeight10) setClassFixed(true);
      //mayor al 90% remove FIXED
      if (newY > screenHeight90) setClassFixed(false);
    };

    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);
  const retrocedeVideo = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime - 1, "seconds");
  };
  const adelantaVideo = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + 1, "seconds");
  };

  //captura tam de w y h
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
      setHeightX5(window.innerHeight / 5);
    };

    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url={videoDrone}
        width="100%"
        height="100%"
        muted
        playing={playing}
      />
    </>
  );
};

export default Banner;
