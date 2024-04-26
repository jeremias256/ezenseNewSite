import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
  return (
    <div className="relative flex flex-col">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
