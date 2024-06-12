import React, { useEffect } from 'react'
import "../css/comboMD-R.css";
import { clientes, getClienteById } from "../routes/clientes";
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

    
   // import ale from "../assets/aleJeroz.png";



    return (
        <>

            <div className='mdr-combo_content3'>

                <div className='mdr-cb'>
                    <div className='mdr-cb-f1'>
                        <div className='mdr-cb-f1-f1'>

                        </div>
                    </div>
                </div>
                <div className='mdr-ca'>
                    <div className='mdr-ca-f1'>
                        <div className='mdr-ca-f1-f1'>
                            <span className='text-sm-nunito-700 call-to-action'>{clienteRender.descripcionCombo.comboTitulo}</span>
                        </div>

                        <div className='mdr-ca-f1-f2'>


                            <div className='mdr-ca-f1-f2-c2'>
                                <div className='mdr-ca-f1-f2-c2-f1'>
                                    <p className='text-sm-nunito-700 grey-black'>{clienteRender.descripcionCombo.linea1}</p>
                                </div>
                                <div className='mdr-ca-f1-f2-c2-f1'>
                                    <p className='text-sm-nunito-400 grey-black'>  {clienteRender.descripcionCombo.linea2}</p>
                                </div>
                                <div className='mdr-ca-f1-f2-c2-f1'>
                                    <p className='text-sm-nunito-400 grey-black'>  {clienteRender.descripcionCombo.linea3}</p>
                                </div>
                                <div className='mdr-ca-f1-f2-c2-f1'>
                                    <p className='text-sm-nunito-400 grey-black'>  {clienteRender.descripcionCombo.linea4}</p>
                                </div>
                                <p className='text-sm-nunito-400 grey-black ml-2'>  {clienteRender.descripcionCombo.linea5}</p>


                            </div>

                            <div className='mdr-ca-f1-f2-c1'>
                                <div className='mdr-ca-f1-f2-c1-relleno1'>

                                </div>
                                <div className='mdr-ca-f1-f2-c1-f1'>

                                </div>
                                <div className='mdr-ca-f1-f2-c1-relleno2'>

                                </div>
                                <div className='mdr-ca-f1-f2-c1-f2'>

                                </div>
                            </div>

                        </div>

                    </div>
                    <Link to={`/${clienteRender.cliente}`}>
                    <div className='mdr-ca-f2'>
                        {imagenes.map((imgSrc, index) => (
                            
                            <img key={index} src={imgSrc.url} alt={`Imagen ${index + 1}` }  className={imgSrc.pant === 'd'
                            ? ' hidden lg:block'  // Ocultar en pantallas grandes, mostrar en pantallas pequeñas
                            :  imgSrc.pant === 'onlyMovile'
                                ? 'lg:hidden' 
                            
                            :' block'} // Ocultar en pantallas pequeñas, mostrar en pantallas grandes
                        
                            />
                        
                        ))}
                        
                    </div>
                    </Link>
                </div>

            </div>



        </>
    )
}

export default ComboMD
