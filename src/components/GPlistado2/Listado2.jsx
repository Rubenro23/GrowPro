import React from 'react';
import tickrojo from '../imagenes/tickrojo.png';
import  './Listado2.css';

const Listado2 = () => {
    return (
        <div>
            <p className="titulo">
              Lorem Ipsum es simplemente el texto de relleno de las
              <b>imprentas</b>
            </p>
            <div className='ipsum'>
             <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2 ">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
            <div>
            <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2 ">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
            </div>
            <div>
            <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2 ">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
            </div>
            <div>
            <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2 ">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
            </div>
            </div>
        </div>
    );
}

export default Listado2;
