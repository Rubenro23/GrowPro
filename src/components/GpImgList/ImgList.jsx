import React from 'react';
import Formulario from '../GPformulario/formulario';
import Listado from '../GPlistado/Listado';
import Img from '../GPimg/Img';
import Listado2 from '../GPlistado2/Listado2';
import './ImgList.css';
import Rectangulo from '../GPrectangulo/Rectangulo';

const ImgList = (props) => {
    return (
      
      <div className="row imgList">
    <div className="col-lg-6 col-12 order-sm-1">
      
        <div className='imgrectangulo'>
          <Img></Img>
          
          <Rectangulo
            valoracion={props.valoracion}
            opiniones={props.opiniones}
            estudiantes={props.estudiantes}
            descripcion={props.descripcion}></Rectangulo>
          
        </div>
        
      
    </div>
    <div className="col-lg-6 col-12 order-sm-2 List" id='List'>
      <Listado></Listado>
      </div>

  </div>

 
    );
}

export default ImgList;
