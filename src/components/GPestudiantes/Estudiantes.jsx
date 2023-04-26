import React from 'react';
import './Estudiantes.css';

const Estudiantes = (estudiantes) => {
    return (
        <div>
            <div className="estudiantes">+{estudiantes.estudiantes}</div>
              <p className="datos">
                {estudiantes.descripcion}
              </p>
        </div>
    );
}

export default Estudiantes;
