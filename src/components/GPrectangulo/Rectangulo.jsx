import React from "react";
import Valoracion from "../GPvaloracion/Valoracion";
import Estudiantes from "../GPestudiantes/Estudiantes";
import "./Rectangulo.css";

const Rectangulo = (valoracion) => {
  return (
    
      <div className="rectangulo" id="rectangulo">
        <div className="row">
          <div className="col-5  offset-md-1">
            <Valoracion 
            valoracion ={valoracion.valoracion}
            opiniones ={valoracion.opiniones}></Valoracion>
          </div>
          <div className="col-5 m-auto  offset-md-1">
            <Estudiantes
            estudiantes={valoracion.estudiantes}
            descripcion={valoracion.descripcion}></Estudiantes>
          </div>
        </div>
      </div>
   
  );
};

export default Rectangulo;
