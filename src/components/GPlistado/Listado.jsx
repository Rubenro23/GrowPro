import React from 'react';
import tickrojo from '../imagenes/tickrojo.png';
import './Listado.css';

const LoremIpsum = () => {
  
    return (
        <div className="col order-lg-2 order-1" id="loremIpsum">
            <p className="Lorem" id="lorem-text">
              Lorem Ipsum es simplemente el texto de relleno de las
              <b>imprentas</b>
            </p>
            <article className="ipsum" id="lorem">
              <div>
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2 ">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div className="imprentas"> 
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div className="imprentas">
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div className="imprentas">
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div className="masInfo" id="masInfoButton">
                <button className="info">QUIERO MÁS INFO</button>
              </div>
            </article>
          
       </div>
    );
}

export default LoremIpsum;
