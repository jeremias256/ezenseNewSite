import React, { useEffect } from 'react'
import { getClienteById } from "../routes/clientes";
import { Link } from 'react-router-dom';

const ComboMD = ({ data }) => {
    const clienteRender = getClienteById(data[0]);

    // Si la variable pp es 'pp', limita las imágenes a 2
    const imagenes = data[1] === 'pp' ? Object.values(clienteRender.imgCombo).slice(0, 2) : Object.values(clienteRender.imgCombo);

    // Para ver la resolución de la pantalla

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            console.log(`Ancho de pantalla: ${screenWidth}px, Alto de pantalla: ${screenHeight}px`);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col mt-[53px] rounded-s-[84px] w-full border-b-0 border-l-0 border-r-0 relative border-2 border-callToAction">
                <div className="absolute -top-8 left-20 text-sm-nunito-700 call-to-action">{clienteRender.descripcionCombo.comboTitulo}</div>
                <div className='absolute top-[61px] left-[60px] border border-[#4d4f61] border-r-0 rounded-s-full h-[32px] w-[16px]'></div>
                <div className='border-l-2 rounded-s-full border-callToAction h-[155px] w-full pr-4 xl:pr-[9.8px]'>
                    <div className='flex flex-col pl-[74px]'>
                        {[ clienteRender.descripcionCombo.linea1, clienteRender.descripcionCombo.linea2, clienteRender.descripcionCombo.linea3, clienteRender.descripcionCombo.linea4, clienteRender.descripcionCombo.linea5 ].map((linea, index) => (
                            <div key={index} className={`flex items-center h-[31px] xl:w-[99%] pt-2 pb-[10px] ${ index < 4 ? 'border-b border-[#4D4F61]' : '' }`}>
                                <p className={`text-sm-nunito-${ index === 0 ? '700' : '400'} grey-black ${index === 4 ? 'ml-2' : ''}`}>{linea}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col h-[124px] absolute top-0 right-0'>
                        <div className='w-4 h-[31px]'></div>
                        <div className='w-4 h-[32px] border border-[#4d4f61] border-l-0 rounded-e-full'></div>
                        <div className='w-4 h-[31px]'></div>
                        <div className='w-4 h-[32px] border border-[#4d4f61] border-l-0 rounded-e-full'></div>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='absolute w-[75%] top-0  h-[154.5px] border-b-2 rounded-s-full border-callToAction'></div>
                    <div className='absolute w-[80%] top-[153.2px] right-0 h-[200px] border-t-2 rounded-e-full border-callToAction'></div>
                    <Link to={`/${clienteRender.cliente}`}>
                        <div className='flex flex-1 justify-end gap-4 py-4 pr-4 border-b-2 border-r-2 border-callToAction border-l-0 rounded-e-full '>
                            {imagenes.map((imgSrc, index) => (
                                <img key={index} src={imgSrc.url} alt={`Imagen ${index + 1}` }  className={imgSrc.pant === 'd' ? ' hidden lg:block' :  imgSrc.pant === 'onlyMovile'? 'lg:hidden':' block'} />
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ComboMD
