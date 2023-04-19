import React from 'react';
import tickrojo from './tickrojo.png';

const LoremIpsum = () => {
    return (
        <div>
            <p className="Lorem" id="lorem-text">
              Lorem Ipsum es simplemente el texto de relleno de las{" "}
              <b>imprentas</b>
            </p>
            <div className="ipsum" id="lorem">
              <div>
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div>
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div>
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div>
                <img src={tickrojo} className="tickrojo"></img>
                <span className="ms-2">
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas.
                </span>
              </div>
              <div className="masInfo" id="masInfoButton">
                <button className="info">QUIERO MÁS INFO</button>
              </div>
            </div>
          
        </div>
    );
}

export default LoremIpsum;
