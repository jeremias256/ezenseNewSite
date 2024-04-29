import React from 'react'
import "../css/servicios.css";
import TituloSeccionWhite from "../components/tituloSeccionWhite"

const Servicios = () => {
  return (
    <div className="servicios_content absolute z-10 w-full" style={{ top: `4285px` }}>
        <div className='servicios-back'>
            <div className='servicios-back2'>
                <div className='servicios'>
                    <TituloSeccionWhite titulo="Services" />

                    <div className="servicio-subTitulo">
                        <span className="text-md-lato-700 white">
                            {" "}
                            Unites aesthetic innovation with technical prowess.{" "}
                        </span>

                        <span className="text-md-lato-400 white">
                            {" "}
                            From strategic planning that charts your digital destiny to
                            Intuitive UX Design paired with advanced Coding Techniques, we
                            architect and implement ideas into impactful digital realities{" "}
                        </span>
                    </div>

                    <div className="servicio-combo">

                        <div className='sc-c1'>
                           <div className='sc-c1-f1'></div>
                           <div className='sc-c1-f2'></div>
                           
                        </div>

                        <div className='sc-c2'>
                            <div className='sc-c2-f1'></div>
                            <div className='sc-c2-f2'>
                                <div className='sc-c2-f2-f1'></div>
                            </div>
                            <div className='sc-c2-f3'>
                                <div className='sc-c2-f3-f1'></div>
                            </div>
                           
                        </div>

                        <div className='sc-c3'>
                            {/* Web Devolepment */}
                            <div className='sc-c3-f1'> <span className='text-md-lato-700 call-to-action'> Web Development </span></div>
                            <div className='sc-c3-f2'></div>

                            {/* Ui/UX Design */}

                        </div>
{/* 
                        <div className='sc-c4'>
                        col4
                        </div> */}

                        <div className='sc-c5'>
                            <div className='sc-c5-f1'></div>
                            <div className='sc-c5-f2'>
                                <div className='sc-c5-f2-c1'>
                                    <div className='sc-c5-f2-c1-f1'></div>
                                </div>
                                <div className='sc-c5-f2-c2'></div>
                                <div className='sc-c5-f2-c3'>
                                    <div className='sc-c5-f2-c3-f1'></div>
                                </div>
                            </div>
                        </div>
                    
                    </div>


                </div>
            </div>
        </div>
    </div>
  )
}

export default Servicios
