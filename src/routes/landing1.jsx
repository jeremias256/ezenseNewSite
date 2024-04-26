import Banner from "../components/banner";
import useEzense from "../hooks/useEzenseProvider";

const Landing1 = () => {
  const { classFixed, screenHeight } = useEzense();
  return (
    <div
      className={`${classFixed === true ? "fixed" : ""} top-[60px] z-50 h-[${screenHeight}px] w-full`}
    >
      <Banner />
    </div>
  );
};

export default Landing1;
