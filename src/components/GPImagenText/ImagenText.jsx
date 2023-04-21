import React from 'react';
import './ImagenText.css';
const ImagenText = () => {
    return (
        <div className="img" id="imgmovil">
        <div className="textHeader">
          <p>
            Aquí empiezan el viaje hacia tus
            <span className="sueños">sueños</span>
          </p>
        </div>
        <div className="masInfoHeader" id="botonInfo">
          <button className="infoHeader">QUIERO MÁS INFO</button>
        </div>
      </div>
    );
}

export default ImagenText;
