import React from 'react';
import vector from '../imagenes/Vector.png';
import G from '../imagenes/Google/G.png';
import O from "../imagenes/Google/O (2).png";
import O1 from "../imagenes/Google/O1.png";
import G1 from "../imagenes/Google/G1.png";
import L from "../imagenes/Google/L (2).png";
import E from "../imagenes/Google/E (2).png";
import './Valoracion.css';


const Valoracion = () => {
    return (
        <div>
            <div className="valoracion">4.9</div>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <p className="opiniones">354 opiniones</p>
              <div className="google">
                <img src={G} className="G"></img>
                <img src={O} className="O"></img>
                <img src={O1} className="O1"></img>
                <img src={G1} className="G1"></img>
                <img src={L} className="L"></img>
                <img src={E} className="E"></img>
              </div>
        </div>
    );
}

export default Valoracion;
