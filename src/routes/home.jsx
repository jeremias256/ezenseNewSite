import { Works, Servicios, Bureau, Banner2, Banner, Clientes, Contacto, Footer } from "../components";

export const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col z-0 absolute mt-[60px] md:mt-0">
        <Banner />

        <Works />

        <Servicios />

        <Clientes />

        <Bureau />

        <Contacto />

        <Footer />

      </div>
    </>
  );
};

