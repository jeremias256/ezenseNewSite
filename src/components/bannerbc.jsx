import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import ezenseVideo from "../assets/ezenseVideo.mp4";
import useEzense from "../hooks/useEzenseProvider";

export const Banner = () => {
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
    if (window.scrollY == 0) {
      playerRef.current.seekTo(0, "seconds");
    }
    if (window.scrollY == 1000) {
      playerRef.current.seekTo(3, "seconds");
    }
  });

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
      ref={contentBannerDivRef}
    >
      <div
        className="fixed top-[110px] w-full md:top-0"
        ref={bannerDivRef}
        style={{ height: `${screenHeight}px`, width: 'full' }}
      >
        <ReactPlayer
          ref={playerRef}
          url={ezenseVideo}
          width="100%"
          height="100%"
          muted
        />
      </div>
    </div>
  );
};

