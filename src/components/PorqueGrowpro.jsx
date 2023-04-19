import React from "react";
import icono1 from "./imagenes/icono1.png";
import icono2 from "./imagenes/icono2.png";
import icono3 from "./imagenes/icono3.png";
import icono4 from "./imagenes/icono4.png";
import icono5 from "./imagenes/icono5.png";
import icono6 from "./imagenes/icono6.png";
const PorqueGrowpro = () => {
  return (
    <div>
      <div className="pregunta">
        <p>
          ¿Por qué <span className="growpro">GrowPro?</span>
        </p>
      </div>

      <div className="row w-100 ">
        <div className="col-lg-4  col-12 borde">
          <div className="rectanguloIcono">
            <img src={icono1} className="icono1"></img>
          </div>
          <p className="textIcono">
            <strong>+15.000 growers </strong>ya han viajado con nosotros
          </p>
          <p className="text">
            Nuestro fin es que todo el mundo tenga la oportunidad de vivir una
            experiencia que le cambie la vida. ¡Vamos por el buen camino! Somos
            expertos en lo que hacemos.
          </p>
        </div>
        <div className="col-lg-4  col-12 borde">
          <div className="rectanguloIcono">
            <img src={icono2} className="icono2"></img>
          </div>
          <p className="textIcono">20 ciudades de destinos</p>
          <p className="text">
            Trabajamos únicamente en las ciudades en las que podemos estar
            presencialmente ¡nuestra comunidad es lo primero! Ahora disponemos
            de 20 destinos, pero la lista no para de crecer.
          </p>
        </div>
        <div className="col-lg-4  col-12">
          <div className="rectanguloIcono">
            <img src={icono3} className="icono3"></img>
          </div>
          <p className="textIcono">A tu lado en destino ¡pura experiencia!</p>
          <p className="text">
            Tenemos equipo y oficinas en todas nuestras ciudades y estamos
            contigo desde que aterrizas. Atención de 10 y eventazos en los que
            conocernos.
          </p>
        </div>
      </div>
      <div className="row mt-5 w-100">
        <div className="col-lg-4  col-12 borde">
          <div className="rectanguloIcono">
            <img src={icono4} className="icono4"></img>
          </div>
          <p className="textIcono2">
            GrowPro <b>Community</b>
          </p>
          <p className="text">
            Desde el momento en el que viajas con GrowPro, ya formas parte de
            una comunidad global, conectada a través de eventos y la GrowPro
            App. Compartimos un mismo espíritu valiente y divertido.
          </p>
        </div>
        <div className="col-lg-4  col-12 borde">
          <div className="rectanguloIcono">
            <img src={icono5} className="icono5"></img>
          </div>
          <p className="textIcono2">
            Servicio <b>Gratuito</b>
          </p>
          <p className="text">
            Sí, has leído bien. El asesoramiento que recibes de GrowPro es
            gratuito, nuestro sistema de ganancias funciona a través de las
            colaboraciones con las escuelas y seguros
          </p>
        </div>
        <div className="col-lg-4  col-12">
          <div className="rectanguloIcono">
            <img src={icono6} className="icono6"></img>
          </div>
          <p className="textIcono2">
            GrowPro <b>App</b>
          </p>
          <p className="text">
            Somos pioneros en el sector en tener una app propia. Con la GrowPro
            App llevamos el acompañamiento en destino a otro nivel. ¡Conecta con
            los eventos y la comunidad de tu ciudad!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PorqueGrowpro;
