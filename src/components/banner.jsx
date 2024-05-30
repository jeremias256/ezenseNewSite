import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import ezenseVideo from "../assets/ezenseVideo.mp4";
import useEzense from "../hooks/useEzenseProvider";

const Banner = () => {
  const { setScrollY, screenHeight, acumuladorFrame, setAcumuladorFrame } =
    useEzense();
  const adjustedHeight = screenHeight * 1.1;
  /* --------------------------------------- estados locales -------------------------------------- */
  const contentBannerDivRef = useRef(null); //div contenedor video
  const bannerDivRef = useRef(null); //div video
  const playerRef = useRef(null); //idVideo
  const anteriorY = useRef(0); //eje y actual
  const frame = 0.025; //fps

  useEffect(() => {
    const updateScrollY = () => {
      setAcumuladorFrame(acumuladorFrame + frame);
      const newY = window.scrollY;

      if (newY > anteriorY.current) adelantarVideo();
      else retrasarVideo();

      anteriorY.current = newY;

      setScrollY(newY); //actualiza estado de eje Y

      if (newY <= contentBannerDivRef.current.getBoundingClientRect().height)
        bannerDivRef.current.classList.add("fixed");

      if (newY > contentBannerDivRef.current.getBoundingClientRect().height)
        bannerDivRef.current.classList.remove("fixed");
    };

    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, []);

  useEffect(() => {
    console.log(playerRef.current.getCurrentTime());
    if (window.scrollY == 0) {
      console.log("VIDEO EN 0");
      playerRef.current.seekTo(0, "seconds");
    }
    if (window.scrollY == 1000) {
      console.log("VIDEO EN 3");
      playerRef.current.seekTo(3, "seconds");
    }
  });

  //sube el scrollY a 0 cuando se recarga la pag
  useEffect(() => {
    if (window.scrollY < 1000) {
      const handleScrollToTop = () => {
        window.scrollTo(0, 0);
      };
      const timeoutId = setTimeout(handleScrollToTop, 500);
      return () => clearTimeout(timeoutId);
    }
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
    <div
      className="relative"
      ref={contentBannerDivRef}
      style={{ height: `${adjustedHeight}px` }}
    >
      <div
        className="fixed top-[110px] w-full md:top-0"
        ref={bannerDivRef}
        style={{ height: `${screenHeight}px` }}
      >
        <ReactPlayer
          ref={playerRef}
          url={ezenseVideo}
          width="100%"
          height="100%"
          muted
        />
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-opacity-gradient"></div>
      </div>
    </div>
  );
};

export default Banner;
