import React from 'react';
import './Header.css';
import { Getdatos } from "../../services/datos";
import { useState, useEffect } from "react";
import background from '../imagenes/background.png';
import logo from '../imagenes/logo-white.png';
import ImagenText from '../GPImagenText/ImagenText';
import Rectangulo from '../GPrectangulo/Rectangulo';
import ThePrinting from '../GPthePrinting/ThePrinting';
import ListForm from '../GPListForm/ListForm';

const Header = () => {
    const [test, setTest] = useState(null);
  useEffect(() => {
    const social = Getdatos().then((response) => {
      setTest(response);
      console.log(test);
      console.log(response.social.gp_socials[0].gp_stars);
    });
  }, []);
  
    window.addEventListener(
      "load",
      () => {
        var rectangle = document.getElementById("rectangle");
        var boton = document.getElementById("infoTitulo");
        var lastScrollPosition = 400;
  
        window.addEventListener("scroll", function () {
          var currentScrollPosition = window.scrollY;
          console.log(currentScrollPosition > lastScrollPosition);
          if (currentScrollPosition > lastScrollPosition) {
            // Scrolling hacia abajo
            boton.classList.add("botonshow");
            
            //rectangle.classList.add('rectanglescondido');
          } else {
            // Scrolling hacia arriba
            //rectangle.classList.remove('rectanglescondido');
            boton.classList.remove("botonshow");
          }
        });
      },
      false
    );
  
    return (
        
    <div className="principal">
      <img src={background} className="fondo"></img>
      <header className="header">
        <div className="rectangle" id="rectangle">
          <img
            src={logo}
            className="logo"
            id="logomovil"
            alt="logo growpro"
          ></img>
          <div className="masInfoHeader" id="infoTitulo">
            <button className="infoHeader" id="infotituloText">
              QUIERO MÁS INFO
            </button>
          </div>
        </div>
       
        <ImagenText></ImagenText>
        <div className="colocar">
          {/*datos ?
              <Rectangulo valoracion={data.social.gp_socials[0].gp_stars}
              opiniones ={datos.social.gp_socials[0].n_reviews}
              estudiantes ={datos.global.gp_social_variable.gp_number}
              descripcion={datos.global.gp_social_variable.gp_description}/>
              :
              <div><p>Loading...</p></div>*/}
          {test && test.social && (
            <Rectangulo
              valoracion={test.social.gp_socials[0].gp_stars}
              opiniones={test.social.gp_socials[0].n_reviews}
              estudiantes={test.global.gp_social_variable[0].gp_number}
              descripcion={test.global.gp_social_variable[0].gp_description}
            ></Rectangulo>
          )}
        </div>
        <div className="row">
          <div className="col-6  offset-md-1 col-sm-12" id="infoCard">
            <ThePrinting></ThePrinting>
          </div>
        </div>

        <ListForm></ListForm>
      </header>
        </div>
    );
}

export default Header;
