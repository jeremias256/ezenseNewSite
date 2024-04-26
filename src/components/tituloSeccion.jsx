import React from 'react'
import '../css/tituloSeccion.css';
import biselBig from '../assets/biselBig.png';
import biselLine from '../assets/biselLine.png';

const TituloSeccion = (props) => {
  
  return (
    <>  
        <div className='title_content'> 

            <div className='row1'> 
            
                <div className='row1a'><span className='text-lg-nunito-400 grey-black'> {props.titulo}</span></div>

                <div className='row1b'>

                    
                    <div className='row1ba'>
                    
                    </div>
                    <div className='row1bb'></div>


                </div>

                <div className='row1c'>

                <div className='row1ca'></div>
                    <div className='row1cb'></div>

                </div>

                <div className='row1d'>
                    <div className='row1da'></div>
                    <div className='row1db'></div>
                </div>
            
            </div>



            <div className='row4'> 
                <div className='row4a'> </div>
                <div className='row4b'> </div>
                
            </div>

        </div>
    </>
  )
}

export default TituloSeccion
