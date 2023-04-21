import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./components/imagenes/logo-white.png";
import imagen from "../src/components/imagenes/header.png";
import background from "../src/components/imagenes/background.png";
import vector from "../src/components/imagenes/Vector.png";
import G from "../src/components/imagenes/Google/G.png";
import O from "../src/components/imagenes/Google/O (2).png";
import O1 from "../src/components/imagenes/Google/O1.png";
import G1 from "../src/components/imagenes/Google/G1.png";
import L from "../src/components/imagenes/Google/L (2).png";
import E from "../src/components/imagenes/Google/E (2).png";
import icono1 from "../src/components/imagenes/icono1.png";
import tickrojo from "./components/imagenes/tickrojo.png";
import icono2 from "../src/components/imagenes/icono2.png";
import icono3 from "../src/components/imagenes/icono3.png";
import icono4 from "../src/components/imagenes/icono4.png";
import icono5 from "../src/components/imagenes/icono5.png";
import icono6 from "../src/components/imagenes/icono6.png";
import playa from "../src/components/imagenes/playa.png";
import icono7 from "../src/components/imagenes/icono7.png";
import canada from "../src/components/imagenes/canadá.png";
import australia from "../src/components/imagenes/australia.png";
import nuevazelanda from "../src/components/imagenes/nuevazelanda.png";
import irlanda from "../src/components/imagenes/irlanda.png";
import eeuu from "../src/components/imagenes/eeuu.png";
import malta from "../src/components/imagenes/malta.png";
import flecha1 from "../src/components/imagenes/flecha1.png";
import flecha2 from "../src/components/imagenes/flecha2.png";
import Formulario from "./components/GPformulario/formulario";
import Listado from "./components/GPlistado/Listado";
import DescubreAustralia from "./components/GPdescubreAustralia/DescubreAustralia";
import ThePrinting from "./components/GPthePrinting/ThePrinting";
import Estudiantes from "./components/GPestudiantes/Estudiantes";
import Valoracion from "./components/GPvaloracion/Valoracion";
import PorqueGrowpro from "./components/GPgrowpro/PorqueGrowpro";
import Rectangulo from "./components/GPrectangulo/Rectangulo";
import ListForm from "./components/GPListForm/ListForm";
import ImagenText from "./components/GPImagenText/ImagenText";


function App() {
  const tarjetas = [
    {
      imagen: canada,
      titulo: "Canadá",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultrices sollicitudin diam pretium.",
      boton: "VER MÁS",
    },
    {
      imagen: australia,
      titulo: "Australia",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultrices sollicitudin diam pretium.",
      boton: "VER MÁS",
    },
    {
      imagen: nuevazelanda,
      titulo: "Nueva Zelanda",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultrices sollicitudin diam pretium.",
      boton: "VER MÁS",
    },
    {
      imagen: irlanda,
      titulo: "Irlanda",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultrices sollicitudin diam pretium.",
      boton: "VER MÁS",
    },
    {
      imagen: eeuu,
      titulo: "Estados Unidos",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultrices sollicitudin diam pretium.",
      boton: "VER MÁS",
      id: "eeuu",
    },
    {
      imagen: malta,
      titulo: "Malta",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis ultrices sollicitudin diam pretium.",
      boton: "VER MÁS",
      id: "malta",
    },
  ];

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

        <Rectangulo></Rectangulo>

        <div className="row">
          <div className="col-6  offset-md-1 col-sm-12" id="infoCard">
            <ThePrinting></ThePrinting>
          </div>
        </div>

        <ListForm></ListForm>
      </header>

      <main className="backgroundBody margenIcono">
        <PorqueGrowpro></PorqueGrowpro>

        <DescubreAustralia></DescubreAustralia>

        <div className="dondeEstudiar mb-4 ">
          <p>
            ¿Dónde <b>podrás estudiar?</b>{" "}
          </p>
          <div className="flechas">
            <img src={flecha1} className="flecha1"></img>
            <img src={flecha2} className="flecha2"></img>
          </div>
        </div>

        <div className="row g-5">
          {tarjetas.map((tarjetas, index) => {
            return (
              <div
                className="col-lg-3  col-12 p-3 mt-lg-1 mt-sm-5 tarjetaPaises"
                key={index}
                id={tarjetas.id}
              >
                <img src={tarjetas.imagen} className="paises"></img>
                <div className="fondoTarjeta">
                  <p className="pais">{tarjetas.titulo}</p>
                  <p class="textPais">{tarjetas.texto}</p>
                  <div className="verMas">
                    <button class="ver">{tarjetas.boton}</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grower">
          <p>
            ¿Te unes a nuestra <b> comunidad grower ?</b>
          </p>
        </div>
        <div>
          <p className="textGrower">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type pecimen book.
          </p>
        </div>

        <div className="masInfo mt-2" id="masInfoGrower">
          <button className="info">QUIERO MÁS INFO</button>
        </div>

      </main>

      

      <footer className="piedepagina">
        <div className="row w-100 text-center">
          <div className="col-lg-6 col-12 order-lg-1 order-2">
            <p>©2021 GrowPro • Todos los derechos reservados</p>
          </div>
          <div className="col-lg-6 col-12 order-lg-2 order-1">
            <p>Aviso legal | Política de cookies | Política de privacidad</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  window.addEventListener(
    "load",
    () => {
      var rectangle = document.getElementById("rectangle");
      var boton = document.getElementById("infoTitulo");
      var lastScrollPosition = 400;

      window.addEventListener("scroll", function () {
        var currentScrollPosition = window.scrollY;
        console.log(currentScrollPosition);
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
}

export default App;
