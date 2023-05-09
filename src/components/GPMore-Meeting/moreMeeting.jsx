import React from "react";
import './moreMeeting.css';

const MoreMeeting = () => {
  return (
    <div className="mt-5 mb-3">
      <div className="row mt-lg-5 mt-0 mb-lg-5 mb-0">
        <div className="col-lg-6 col-12 mb-5 ">
          <h2 class="fw-bold">
            ¿Quieres saber más <span className="meeting-color">sobre GrowPro?</span>
          </h2>
          <div class="text-moremeeting mt-4">
            <p>
              GrowPro es una plataforma de experiencias internacionales. Te
              ofrecemos todos los servicios que necesitas para estudiar y
              trabajar a otros país: asesoramiento, contacto con las escuelas,
              visados, seguros... ¿Lo mejor? Que el acompañamiento sigue en
              destino y que además ¡el servicio es gratuito!
            </p>
            <p>
              Ya hemos ayudado a 15.000 estudiantes como tú ¡únete a nuestra
              meeting para comenzar tu viaje!
            </p>
          </div>

          
        </div>
        <div className="col-lg-6 col-12 mt-3 mb-5 ">
        <div class="img-more" id="img-more">
              
              <img src="https://campaign.growproexperience.com/hubfs/GrowPro%20Experience%20Grupo.jpg"  class="Img-moreMeeting"/>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default MoreMeeting;
