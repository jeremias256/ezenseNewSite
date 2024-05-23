import Header from "../components/header";
import { Outlet } from "react-router-dom";
import StickyBox from "react-sticky-box";

export default function Root() {
  return (
    <div className="mx-auto flex max-w-[1440px]">
      <div className=" mx-auto max-w-[1440px]">
        <StickyBox
          offsetTop={0}
          className="z-50 mx-auto h-[110px] bg-white50 backdrop-blur-sm md:flex md:h-auto md:w-[98%] md:rounded-[555px] md:px-[16px]"
        >
          <Header />
        </StickyBox>
        <Outlet />
      </div>

      <div className="w-0" style={{ height: `2750px` }}></div>
    </div>
  );
}
