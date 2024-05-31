import React,  { useEffect } from 'react'
import "../css/comboPP.css";


    

const ComboPP = ({data}) => {

    console.log("data enviada: " , data);
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
       
        <div className='pp-combo_content3'>

            <div className='pp-ca'>
                <div className='pp-ca-f1'> 
                    <div className='pp-ca-f1-f1'>
                        <span className='text-md-nunito-700 call-to-action'>{data.comboTitulo}</span>
                    </div>

                    <div className='pp-ca-f1-f2'>

                        <div className='pp-ca-f1-f2-c1'> 
                            <div className='pp-ca-f1-f2-c1-relleno1'>

                            </div>          
                            <div className='pp-ca-f1-f2-c1-f1'>

                            </div>
                            <div className='pp-ca-f1-f2-c1-relleno2'>

                            </div>
                            <div className='pp-ca-f1-f2-c1-f2'>

                            </div>
                        </div>

                        <div className='pp-ca-f1-f2-c2'>
                            <div className='pp-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-700 grey-black'>{data.linea1}</p>
                            </div>
                            <div className='pp-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-400 grey-black'>{data.linea2}</p>
                            </div>
                            <div className='pp-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-400 grey-black'>{data.linea3}</p>
                            </div>
                            <div className='pp-ca-f1-f2-c2-f1'>
                                <p className='text-sm-nunito-400 grey-black'>{data.linea4}</p>
                            </div>
                            <p className='text-sm-nunito-400 grey-black'>{data.linea5}</p>
                        </div>
                        
                    </div>
                
                </div>
            </div>
            <div className='pp-cb'>
                <div className='pp-cb-f1'>
                    <div className='pp-cb-f1-f1'>

                    </div>
                </div>
            </div>


        </div>

    
      
    </>
  )
}

export default ComboPP
