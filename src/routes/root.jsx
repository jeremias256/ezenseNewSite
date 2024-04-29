import Header from "../components/header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-col md:items-center">
      <Header />
      <Outlet />
    </div>
  );
}
