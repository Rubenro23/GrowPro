import React from "react";
import "./Meeting.css";

const Meeting = () => {
  return (
    <div className="mt-5">
      <div className="row mt-lg-5 mt-0 mb-lg-5 mb-0">
        <div className="col-lg-6 col-12 mb-5 ">
          <h2 className="Meeting-title">
            <strong>¿Por qué asistir a nuestra GrowPro meeting?</strong>
            <span></span>
          </h2>
          <div className="Meeting-Descr mt-4">
            <span>
              Las GrowPro Meetings son eventos organizados por nuestros Student
              Advisor y son la oportunidad perfecta para comenzar a idear tu
              próxima etapa en Australia, resolver todas las dudas que tengas y
              por supuesto hablar de nuestra pasión, los viajes, para
              inscribirte solo clica abajo.
            </span>
          </div>

          <div className="Register-meeting " >
            <button className="register mt-3">¡Registrate!</button>
          </div>
        </div>
        <div className="col-lg-6 col-12 mt-3 mb-5 ">
          <div>
            <img
              src="https://campaign.growproexperience.com/hubfs/c801f0ca-5f27-467b-ac84-6a6819b02bd3.jpg"
              alt="c801f0ca-5f27-467b-ac84-6a6819b02bd3"
              className="Img-meeting "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
