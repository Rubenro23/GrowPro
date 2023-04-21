import React from "react";
import Valoracion from "../GPvaloracion/Valoracion";
import Estudiantes from "../GPestudiantes/Estudiantes";
import "./Rectangulo.css";

const Rectangulo = () => {
  return (
    <div>
      <div className="rectangulo" id="rectangulo">
        <div className="row">
          <div className="col-5  offset-md-1">
            <Valoracion></Valoracion>
          </div>
          <div className="col-5 m-auto  offset-md-1">
            <Estudiantes></Estudiantes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangulo;
