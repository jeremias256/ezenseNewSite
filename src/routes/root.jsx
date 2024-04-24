import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Root() {
    return (
      <div className="flex flex-col">
        
        <Header/>

        <div id="detail">
          {/* Este componente es una plantilla vacia */}
          <Outlet />
        </div>

        <Footer/>
      </div>
    );
  }