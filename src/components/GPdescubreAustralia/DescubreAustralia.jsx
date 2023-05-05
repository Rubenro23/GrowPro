import React from 'react';
import icono7 from '../imagenes/icono7.png';
import playa from '../imagenes/playa.png';
import tickrojo from '../imagenes/tickrojo.png';
import './DescubreAustralia.css';

const DescubreAustralia = () => {
    return (
        <div>
            <div className="row mt-lg-5 mt-0 mb-lg-5 mb-0">
          <div className="col-lg-6 col-12 mb-5  d-flex justify-content-end">
            <div className='imagen'>
              <div className="rectanguloIcono" id="rectanguloIcono7">
                <img src={icono7} className="icono7"></img>
              </div>
              <img src={playa} className="playa"></img>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-3 mb-5 ">
            <p className="australia">
              Descubre Australia,¡sumérgete <b> en un mar de aventuras!</b>
            </p>
            <p className="textAustralia">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
              egestas ultricies scelerisque senectus consequat netus justo in.
              Neque fusce sem sagittis ante. Maecenas dui urna amet morbi.{" "}
            </p>

            <div className="tick1">
              <img src={tickrojo} className="rojo" ></img>
              <span className="ms-2">
                Asesoramiento con expertos en la vida aussie
              </span>
            </div>
            <div className="tick2">
              <img src={tickrojo} className="rojo"></img>
              <span className="ms-2">
                Gestión del curso y el visado ¡para que te olvides del papeleo!
              </span>
            </div>

            <div className="masInfo" id="masinfobutton2">
              <button className="info">QUIERO MÁS INFO</button>
            </div>
          </div>
        </div>

        </div>
    );
}

export default DescubreAustralia;
