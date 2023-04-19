import React from 'react';
import icono7 from './imagenes/icono7.png';
import playa from './imagenes/playa.png';
import tickrojo from '../components/imagenes/tickrojo.png';

const DescubreAustralia = () => {
    return (
        <div>
            <div className="row">
          <div className="col-lg-6 col-12 d-flex justify-content-end">
            <div>
              <div className="rectanguloIcono" id="rectanguloIcono7">
                <img src={icono7} className="icono7"></img>
              </div>
              <img src={playa} className="playa"></img>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-3 mb-5">
            <p className="australia">
              Descubre Australia,¡sumérgete <b> en un mar de aventuras!</b>
            </p>
            <p className="textAustralia">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
              egestas ultricies scelerisque senectus consequat netus justo in.
              Neque fusce sem sagittis ante. Maecenas dui urna amet morbi.{" "}
            </p>

            <div className="tick1">
              <img src={tickrojo} className="tickrojo"></img>
              <span className="ms-2">
                Asesoramiento con expertos en la vida aussie
              </span>
            </div>
            <div className="tick2">
              <img src={tickrojo} className="tickrojo"></img>
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
