import { Header, Servicios, Bureau, Banner2 } from "../components";
import Contacto from "../components/contacto";
import Works from "../components/works";

export const Home = () => {
  return (
    <>
      <div
        className="flex w-full flex-col z-0 absolute mt-[60px] md:mt-0"
      >
        <Banner2 />

        <Works />

        <Servicios />

        <Bureau />

        <Contacto />
      </div>
    </>
  );
};

