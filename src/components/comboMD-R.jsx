import { getClienteById } from "../routes/clientes";
import { Link } from 'react-router-dom';

const ComboMD = ({ data, className }) => {
    const clienteRender = getClienteById(data[0]);

    const imagenes = Object.values(clienteRender.imgCombo);

    return (
        <>
            <div className={`${className} flex flex-col mt-[53px] rounded-s-[83px] sm:rounded-s-[84px] border-b-0 border-l-0 border-r-0 relative border-2 border-callToAction`}>
                <div className="absolute -top-9 left-20 text-sm-nunito-700 call-to-action text-[24px]">{clienteRender.descripcionCombo.comboTitulo}</div>
                <div className='relative  w-full pr-4 xl:pr-[9.8px] overflow-hidden'>
                    <div className="absolute w-20 h-[153px] rounded-s-full bg-gradient-to-r from-white -z-10 to-background"></div>
                    <div className='flex flex-col pl-[74px]'>
                        {[clienteRender.descripcionCombo.linea1, clienteRender.descripcionCombo.linea2, clienteRender.descripcionCombo.linea3, clienteRender.descripcionCombo.linea4, clienteRender.descripcionCombo.linea5].map((linea, index) => (
                            <div key={index} className={`flex items-center h-[31px] xl:w-[99%] pt-2 pb-[10px] ${index < 4 ? 'border-b border-greyBlack' : ''}`}>
                                <p className={` text-sm-nunito-${index === 0 ? '700' : '400'} grey-black`}>{linea}</p>
                            </div>
                        ))}
                    </div>
                    <div className='absolute top-[61px] left-[60px] border border-greyBlack border-r-0 rounded-s-full h-[32px] w-[16px]'></div>
                    <div className='absolute top-[92px] right-[0.8px] border border-greyBlack border-l-0 rounded-e-full h-[32px] w-[16px]'></div>
                    <div className='absolute top-[30px] right-[0.8px] border border-greyBlack border-l-0 rounded-e-full h-[32px] w-[16px]'></div>
                </div>
                <div className='flex-1'>
                    <Link to={`/${clienteRender.cliente}`}>
                        <div className='absolute w-[70%] sm:w-[75%] top-0  h-[154.5px] border-2 border-t-0 border-r-0 rounded-s-full border-callToAction'></div>
                        <div className='absolute w-[70%] sm:w-[80%] top-[152.6px] sm:top-[153.2px] right-[1px] sm:right-0 h-[200px] border-t-2 rounded-e-full border-callToAction'></div>
                        <div className='flex flex-1 justify-end gap-4 py-4 pr-4 border-b-2 border-r-2 border-callToAction border-l-0 rounded-e-full '>
                            {imagenes.map((imgSrc, index) => (
                                <img key={index} src={imgSrc.url} alt={`Imagen ${index + 1}`} className={imgSrc.pant === 'd' ? ' hidden ml:block' : imgSrc.pant === 'onlyMovile' ? 'xl:hidden' : ' block'} />
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ComboMD