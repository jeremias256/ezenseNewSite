import Banner from "../components/banner";
import Parrafo from "../components/parrafo";
import useEzense from "../hooks/useEzenseProvider";

const Landing1 = () => {
  const { classFixed, screenHeight } = useEzense();
  return (
    <>
      <div
        className={`${classFixed === true ? "" : ""} fixed top-[60px] z-50 h-[1000px] w-full bg-gray-200`}
        id="bannerVideo"
      >
        <Banner />
      </div>
      <div className="absolute top-[1060px] w-full">Bur</div>
    </>
  );
};

export default Landing1;