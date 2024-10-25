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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollY = throttle(() => {
      setAcumuladorFrame(acumuladorFrame + frame);
      const newY = window.scrollY;
      const deltaY = newY - anteriorY.current;
      // 1s * 30fps (para este caso es: 3s * 3fps = 90)
      const framesToAdvance = deltaY / (scrollHeightFactor / 90);

      if (framesToAdvance > 0) adelantarVideo(framesToAdvance);
      else retrasarVideo(Math.abs(framesToAdvance));

      anteriorY.current = newY;
      setScrollY(newY);
    }, 100);

    window.addEventListener("scroll", updateScrollY);
    return () => {
      window.removeEventListener("scroll", updateScrollY);
    };
  }, [scrollHeightFactor]);

  useEffect(() => {
    const adjustScrollHeightFactor = () => {
      const width = window.innerWidth;

      if (width > 1560) {
        setScrollHeightFactor(1700);
      } else if (width > 1024) {
        setScrollHeightFactor(1960);
      } else if (width > 768) {
        setScrollHeightFactor(1980);
      } else if (width > 640) {
        setScrollHeightFactor(1290);
      } else if (width > 500) {
        setScrollHeightFactor(1270);
      } else {
        setScrollHeightFactor(1320);
      }
    };

    adjustScrollHeightFactor();
    window.addEventListener("resize", adjustScrollHeightFactor);

    return () => {
      window.removeEventListener("resize", adjustScrollHeightFactor);
    };
  }, []);

  useEffect(() => {
    if (window.scrollY == 0) { playerRef.current.seekTo(0, "seconds"); }

    if (window.scrollY > 2480) { playerRef.current.seekTo(3, "seconds"); }
    setScreenHeight(window.innerHeight);
  });

  const adelantarVideo = (frames) => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + frames * (1 / 30), "seconds")
  };
  const retrasarVideo = (frames) => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime - frames * (1 / 30), "seconds");
  };

  useEffect(() => {
    const handleScroll = () => {
      let scrollThreshold;

      if (window.innerWidth >= 1560) {
        scrollThreshold = 1860;
      } else if (window.innerWidth >= 1280) {
        scrollThreshold = 2000;
      } else if (window.innerWidth >= 1024) {
        scrollThreshold = 2020;
      } else if (window.innerWidth >= 768) {
        scrollThreshold = 2150;
      } else if (window.innerWidth >= 540) {
        scrollThreshold = 1350;
      } else if (window.innerWidth >= 480) {
        scrollThreshold = 1380;
      } else {
        scrollThreshold = 1520;
      }
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll);

    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <div className="flex items-start w-full min-h-[1850px] sm:h-[290vw] sm:max-h-[1920px] md:h-[355vw] md:max-h-[2750px] lg:max-h-[2750px] xl:max-h-[2750px] 2xl:max-h-[2600px]"
      ref={contentBannerDivRef}
    >
      <StickyBox offsetTop={0} offsetBottom={20}>
        <div
          className="w-full lg:w-[98.3vw] 2lg:w-[98.49vw] xl:w-[98.7vw] h-screen"
          ref={bannerDivRef}
        >
          {/* VIDEO */}
          <ReactPlayer ref={playerRef} url={ezenseVideo} width="100%" height="103%" muted />

          {/* SOMBRA */}
          <div className={`bg-gradient-to-b from-transparent from-50% via-[#f7f4ef] via-100% to-background to-80%  pointer-events-none absolute -bottom-5 left-0 h-[40%] w-full transition-opacity duration-500 ${isScrolled ? 'opacity-80' : 'opacity-0'}`}></div>

          <div className={`bg-gradient-to-t  absolute -bottom-6 xl: 2xl:-bottom-[40px] w-full h-14 from-[#eceae5] from-[40%] ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
      </StickyBox>

      <div className=" w-[0px] z-20"></div>
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

