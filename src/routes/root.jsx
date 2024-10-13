import { Header } from "../components";
import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <>
      <div className="fixed left-1/2 z-50 w-full -translate-x-1/2 transform bg-white50 backdrop-blur-sm md:top-0 md:flex md:h-auto md:w-[98%] md:rounded-[555px] md:px-[16px] md:mt-[8px]">
        <Header />
      </div>
      <Outlet />
    </>
  );
}
