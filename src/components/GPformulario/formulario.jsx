import React from 'react';
import './formulario.css';

const Formulario = () => {
    return (
        <div>
             <div className="container" id="formulario">
              <div className="row">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <label form="nombreInput" className="form-nombre">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombreInput"
                    ></input>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label form="apellidosInput" className="form-apellidos">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidosInput"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label form="correoInput" className="form-correo">
                      Correo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="correoInput"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <label form="telefonoInput" className="form-telefono">
                    Número de Telefono
                  </label>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-5">
                    <select
                      type="text"
                      className="form-control select-form"
                      id="Inputelefono"
                    >
                      <option>Spain</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-7">
                    <br />
                    <div className="Inputtelefono2">
                      <input
                        type="text"
                        className="form-control"
                        id="telefonoInput"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <label form="Nacionalidad" className="form-nacionalidad">
                      Nacionalidad
                    </label>
                    <select className="form-control select-form">
                      <option>España</option>
                      <option>Argentina</option>
                      <option>México</option>
                      <option>Colombia</option>
                      <option>Chile</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label form="Estudiar" className="form-estudiar">
                      ¿Qué quieres estudiar?
                    </label>
                    <select className="form-control select-form">
                      <option>Marketing</option>
                      <option>Ingles</option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <p className="privacidad">
                    <input type="checkbox" id="tickmorado"></input>
                    He leído y acepto el{" "}
                    <span>
                      {" "}
                      <a href="" className="morado">
                        aviso legal
                      </a>{" "}
                    </span>{" "}
                    y la{" "}
                    <span>
                      {" "}
                      <a href="" className="morado">
                        política de privacidad{" "}
                      </a>
                      .
                    </span>
                  </p>
                </div>

                <div className="enviarBoton" id='enviarBoton'>
                  <input
                    className="enviar"
                    type="submit"
                    value="ENVIAR"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        
    );
}

export default Formulario;
