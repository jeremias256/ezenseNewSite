import { getClienteById } from "../routes/clientes";
import { Link } from 'react-router-dom';

const ComboMD = ({ data, className }) => {
  const clienteRender = getClienteById(data[0]);

  const imagenes = Object.values(clienteRender.imgCombo);

  return (
    <div className={`${className} flex flex-col mt-[53px] rounded-e-[84px] border-b-0 border-l-0 border-r-0 relative border-2 border-callToAction`}>
      <div className="absolute -top-9 left-0 text-sm-nunito-700 call-to-action text-[24px]">{clienteRender.descripcionCombo.comboTitulo}</div>
      <div className="relative overflow-hidden">
        <div className="absolute w-20 h-[153px] right-0 rounded-e-full bg-gradient-to-l from-white -z-10 to-background"></div>
        <div className="absolute w-20 h-[153px] top-[0.5px] right-0 rounded-e-full bg-gradient-to-l from-white -z-10 to-background"></div>
        <div className="h-[155px] flex-col pr-[80.5px] pl-4">
          {[clienteRender.descripcionCombo.linea1, clienteRender.descripcionCombo.linea2, clienteRender.descripcionCombo.linea3, clienteRender.descripcionCombo.linea4].map((linea, index) => (
            <div key={index} className="border-b border-greyBlack h-[31px] pt-2 pb-[10px] pl-2 items-center flex">
              <p className={`text-sm-nunito-${index === 0 ? '700' : '400'} grey-black`}>{linea}</p>
            </div>
          ))}
          <p className="text-sm-nunito-400 grey-black ml-2">{clienteRender.descripcionCombo.linea5}</p>
        </div>
        <div className='absolute top-[61px] right-[64.5px] border border-greyBlack border-l-0 rounded-e-full h-[32px] w-[16px]'></div>
        <div className='absolute top-[92px] left-0 border border-greyBlack border-r-0 rounded-s-full h-[32px] w-[16px]'></div>
        <div className='absolute top-[30px] left-0 border border-greyBlack border-r-0 rounded-s-full h-[32px] w-[16px]'></div>
      </div>
      <Link to={`/${clienteRender.cliente}`}>
        <div className='absolute w-[70%] sm:w-[75%] top-0 right-0 h-[154.5px] border-2 border-t-0 border-l-0 rounded-e-full border-callToAction'></div>
        <div className='absolute w-[70%] sm:w-[80%] top-[152.8px] sm:top-[153.2px] h-[200px] border-t-2 rounded-s-full border-callToAction'></div>
        <div className="flex flex-1 gap-4 py-4 pr-0 pl-4 border-2 border-callToAction border-r-0 border-t-0 rounded-s-full">
          {imagenes.map((imgSrc, index) => (
            <img key={index} src={imgSrc.url} alt={`Imagen ${index + 1}`} className={imgSrc.pant === 'd' ? ' hidden ml:block' : imgSrc.pant === 'onlyMovile' ? 'xl:hidden' : ' block'} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ComboMD;