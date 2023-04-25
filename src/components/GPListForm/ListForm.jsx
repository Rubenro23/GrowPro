import React from 'react';
import Formulario from '../GPformulario/formulario';
import Listado from '../GPlistado/Listado';
import './ListForm.css';
const ListForm = () => {
    return (
        <div className="row ListForm">
        <div className="col-lg-6 col-sm-12 order-lg-1 order-2">
          <Formulario></Formulario>
        </div>

        
          <Listado></Listado>
        
      </div>
    );
}

export default ListForm;
