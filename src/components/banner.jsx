import { useEffect, useRef } from "react";
/* -------------------------------------------- libs -------------------------------------------- */
import ReactPlayer from "react-player";
import StickyBox from "react-sticky-box";
/* ------------------------------------------- context ------------------------------------------ */
import { useEzense } from "./src/context";
/* ------------------------------------------- assets ------------------------------------------- */
import ezenseVideo from "assets/ezenseVideo.mp4";

export const Banner = () => {
  const { setScrollY, acumuladorFrame, setAcumuladorFrame } =
    useEzense();
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
    <div className="flex items-start w-screen min-h-[2400px]"
      ref={contentBannerDivRef}
    >
      <StickyBox offsetTop={0} offsetBottom={20}>
        <div
          className="w-screen h-screen"
          ref={bannerDivRef}
        >
          <ReactPlayer
            ref={playerRef}
            url={ezenseVideo}
            width="100%"
            height="100%"
            muted
          />
        </div>
      </StickyBox>

      <div className="h-[2000px] w-[0px] z-20"></div>
      <div className="absolute top-[600px] left-1/2 transform -translate-x-1/2">
        <div className="mt-[350px]">
          <p className="text-banner">Design</p>
          <p className="text-banner">Technology</p>
        </div>

        <div className="mt-[350px]">
          <p className="text-banner">Transforming the</p>
          <p className="text-banner">Digital Landscape</p>
        </div>

        <div className="my-[350px]">
          <p className="text-banner">Design and Technology</p>
          <p className="text-banner">via Cutting-Edge</p>
        </div>
      </div>
    </div>
  );
};

