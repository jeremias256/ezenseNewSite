import { useEffect, useRef, useState } from "react";
/* -------------------------------------------- libs -------------------------------------------- */
import ReactPlayer from "react-player";
import StickyBox from "react-sticky-box";
import { throttle } from "lodash";
/* ------------------------------------------- context ------------------------------------------ */
import useEzense from "hooks/useEzenseProvider";
/* ------------------------------------------- assets ------------------------------------------- */
import ezenseVideo from "assets/ezenseVideo.mp4";
export const Banner = () => {

  const { setScrollY, acumuladorFrame, setAcumuladorFrame, setScreenHeight } = useEzense();
  /* --------------------------------------- estados locales -------------------------------------- */
  const contentBannerDivRef = useRef(null); //div contenedor video
  const bannerDivRef = useRef(null); //div video
  const playerRef = useRef(null); //idVideo
  const anteriorY = useRef(0); //eje y actual
  const frame = 0.03; //fps

  const [scrollHeightFactor, setScrollHeightFactor] = useState(2000);

  useEffect(() => {
    const adjustScrollHeightFactor = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        setScrollHeightFactor(2000); // Pantallas grandes
      } else if (width > 768) {
        setScrollHeightFactor(1950); // Pantallas medianas
      } else {
        setScrollHeightFactor(1350); // Pantallas pequeñas
      }
    };

    // Inicializa el factor y añade un listener para cuando se redimensione la ventana
    adjustScrollHeightFactor();
    window.addEventListener("resize", adjustScrollHeightFactor);

    return () => {
      window.removeEventListener("resize", adjustScrollHeightFactor);
    };
  }, []);

  useEffect(() => {
    const updateScrollY = throttle (() => {
      setAcumuladorFrame(acumuladorFrame + frame);
      const newY = window.scrollY;

      const deltaY = newY - anteriorY.current;
      const framesToAdvance = deltaY / (scrollHeightFactor/90);

      console.log(window.scrollY)

      if (framesToAdvance > 0) adelantarVideo(framesToAdvance);
      else retrasarVideo(Math.abs(framesToAdvance));

      anteriorY.current = newY;
      setScrollY(newY);
    },100);

    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, [scrollHeightFactor]);

  useEffect(() => {
    console.log("USE EFFECT PARA ACTUALIZAR VIDEO x EJE Y")
    if (window.scrollY == 0) {
      playerRef.current.seekTo(0, "seconds");
    }

    if (window.scrollY > 2480) {
      playerRef.current.seekTo(3, "seconds");
    }
    setScreenHeight(window.innerHeight);
  });

  const adelantarVideo = (frames) => {
    const currentTime = playerRef.current.getCurrentTime();
    const secondsPerFrame = 1 / 30;
    playerRef.current.seekTo(currentTime + frames * secondsPerFrame, "seconds")
  };
  const retrasarVideo = (frames) => {
    const currentTime = playerRef.current.getCurrentTime();
    const secondsPerFrame = 1 / 30;
    playerRef.current.seekTo(currentTime - frames * secondsPerFrame, "seconds");
  };

  return (
    <div className="flex items-start w-screen h-[380vw] max-h-[2280px] md:h-[350vw] md:max-h-[2800px] lg:h-[270vw] border border-x-blue-950"
      ref={contentBannerDivRef}
    >
      <StickyBox offsetTop={0} offsetBottom={20}>
        <div
          className="w-full h-screen"
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

      {/* <div className=" w-[0px] z-20"></div> */}
      <div className="absolute top-[180px]  md:top-[600px] left-1/2 transform -translate-x-1/2">
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

