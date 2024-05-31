import React,  { useEffect } from 'react'
import "../css/comboMD-R.css";


import biselBig from '../assets/LogosCoca.png';
import biselBigM from '../assets/LogosCocaM.png';
import biselBigL from '../assets/LogosCodaL.png';
    

const ComboMD = ({data}) => {

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
                        <span className='text-sm-nunito-700 call-to-action'>{data[0].comboTitulo}</span>
                    </div>

                    <div className='mdr-ca-f1-f2'>

                        
                        <div className='mdr-ca-f1-f2-c2'>
                            <div className='mdr-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-700 grey-black'>{data[0].linea1}</p>
                            </div>
                            <div className='mdr-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-400 grey-black'>{data[0].linea2}</p>
                            </div>
                            <div className='mdr-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-400 grey-black'>{data[0].linea3}</p>
                            </div>
                            <div className='mdr-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-400 grey-black'>{data[0].linea4}</p>
                            </div>
                            <p className='text-sm-nunito-400 grey-black ml-2'>{data[0].linea5}</p>
                            
                            
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
                <div className='mdr-ca-f2'> 
                    <img src={data[1]}/>
                    <img src={data[2]}/>
                </div>
            </div>

        </div>

    
      
    </>
  )
}

export default ComboMD
