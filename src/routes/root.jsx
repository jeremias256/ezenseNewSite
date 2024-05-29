import Header from "../components/header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="relative w-full">
      <div className="fixed left-1/2 z-50 h-[110px] w-full -translate-x-1/2 transform bg-white50 backdrop-blur-sm md:top-0 md:flex md:h-auto md:w-[98%] md:rounded-[555px] md:px-[16px]">
        <Header />
      </div>

      <Outlet />
    </div>
  );
}
