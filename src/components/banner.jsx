import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import ezenseVideo from "../assets/ezenseVideo.mp4";
import useEzense from "../hooks/useEzenseProvider";

const Banner = () => {
  const { setScrollY, screenHeight, contentHeight, setContentHeight } =
    useEzense();
  /* --------------------------------------- estados locales -------------------------------------- */
  const bannerDivRef = useRef(null);
  const contentBannerDivRef = useRef(null);
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

      setScrollY(newY);
      setContentHeight(
        contentBannerDivRef.current.getBoundingClientRect().height,
      );

      if (newY >= contentBannerDivRef.current.getBoundingClientRect().height) {
        contentBannerDivRef.current.classList.remove("fixed");
      } else {
        contentBannerDivRef.current.classList.add("fixed");
      }
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
    <div className="relative" ref={bannerDivRef} style={{ height: "2000px" }}>
      <div
        className="fixed top-[110px] w-full md:top-0"
        id="contentBannerDiv"
        ref={contentBannerDivRef}
      >
        <ReactPlayer
          ref={playerRef}
          url={ezenseVideo}
          width="100%"
          height="100%"
          muted
        />
        <div className="bg-opacity-gradient pointer-events-none absolute bottom-0 left-0 h-1/3 w-full"></div>
      </div>
    </div>
  );
};

export default Banner;
