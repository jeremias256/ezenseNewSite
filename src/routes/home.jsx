import { Header, Servicios, Bureau, Banner2, Banner, Clientes, Footer } from "../components";
import Contacto from "../components/contacto";
import Works from "../components/works";

export const Home = () => {
  return (
    <>
      <div
        className="flex w-full flex-col z-0 absolute mt-[60px] md:mt-0"
      >
        <Banner />
{/* 
        <Works />

        <Servicios />

        <Clientes />

        <Bureau />

        <Contacto />

        <Footer /> */}

        <div className="h-[250px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque quas eos commodi deserunt nemo et ex, nihil vel amet numquam obcaecati tenetur! Soluta dolorum provident consequatur aliquam cum quas sit nisi itaque perferendis dolores? Deserunt necessitatibus ad optio voluptas alias. Unde recusandae consequatur reprehenderit! Natus consectetur blanditiis repellendus repudiandae?
        </div>
        <div className="h-[250px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque quas eos commodi deserunt nemo et ex, nihil vel amet numquam obcaecati tenetur! Soluta dolorum provident consequatur aliquam cum quas sit nisi itaque perferendis dolores? Deserunt necessitatibus ad optio voluptas alias. Unde recusandae consequatur reprehenderit! Natus consectetur blanditiis repellendus repudiandae?
        </div>
        <div className="h-[250px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque quas eos commodi deserunt nemo et ex, nihil vel amet numquam obcaecati tenetur! Soluta dolorum provident consequatur aliquam cum quas sit nisi itaque perferendis dolores? Deserunt necessitatibus ad optio voluptas alias. Unde recusandae consequatur reprehenderit! Natus consectetur blanditiis repellendus repudiandae?
        </div>
        <div className="h-[250px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero neque quas eos commodi deserunt nemo et ex, nihil vel amet numquam obcaecati tenetur! Soluta dolorum provident consequatur aliquam cum quas sit nisi itaque perferendis dolores? Deserunt necessitatibus ad optio voluptas alias. Unde recusandae consequatur reprehenderit! Natus consectetur blanditiis repellendus repudiandae?
        </div>
      </div>
    </>
  );
};

