import React from 'react'
import '../css/tituloSeccion.css';
import biselBig from '../assets/biselBig.png';
import biselLine from '../assets/biselLine.png';


import BiselSmall from './bisel/biselSmall'



const TituloSeccion = (props) => {
  
  return (
    <>  
    <div className='title_content'> 

        <div className="tc-c1">
            <div className='tc-c1-r1'></div>
            <div className='tc-c1-r2'></div>
        </div>
        <div className="tc-c2">
            <div className='tc-c2-r1'><span className='text-lg-nunito-400 white'>{props.titulo}</span> </div>
            <div className='tc-c2-r2'> </div>
        </div>
        <div className="tc-c3">
            <div className='tc-c3-r1'><BiselSmall /> </div>
            <div className='tc-c3-r2'> </div>
            <div className='tc-c3-r3'> </div>
        </div>
        <div className="tc-c4">
            <div className='tc-c4-r1'> </div>
            <div className='tc-c4-r2'> </div>
        </div>

        <div className="tc-c5">
            <div className='tc-c5-r1'> </div>
            <div className='tc-c5-r2'> </div>
        </div>



    </div>
</>
  )
}

export default TituloSeccion
