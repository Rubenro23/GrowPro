import React from 'react';
import Formulario from '../GPformulario/formulario';
import Listado from '../GPlistado/Listado';
import Img from '../GPimg/Img';
import Listado2 from '../GPlistado2/Listado2';
import './ImgList.css';
import Rectangulo from '../GPrectangulo/Rectangulo';

const ImgList = () => {
    return (
      
      <div className="row imgList">
    <div className="col-6">
      
        <div className='imgrectangulo'>
          <Img></Img>
          
          <Rectangulo></Rectangulo>
          
        </div>
        
      
    </div>
    <div className="col-6 List">
      <Listado></Listado>
      </div>

  </div>

 
    );
}

export default ImgList;
