import React from 'react';
import imagen from './nuevoComponente.png';
import Rectangulo from '../GPrectangulo/Rectangulo';
import './Img.css';


const Img = () => {
    return (
        <div className='row '>
        <img src={imagen} className='imagen' id='imgcanada'></img>
        <div className='row'>
        
        </div>
        </div>
    );
}

export default Img;
