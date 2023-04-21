import React from 'react';
import Formulario from '../GPformulario/formulario';
import Listado from '../GPlistado/Listado';
const ListForm = () => {
    return (
        <div className="row">
        <div className="col-lg-6 col-sm-12 order-lg-1 order-2">
          <Formulario></Formulario>
        </div>

        <div className="col order-lg-2 order-1" id="loremIpsum">
          <Listado></Listado>
        </div>
      </div>
    );
}

export default ListForm;
