import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/components/imagenes/logo-white.png";
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
import tickrojo from "../src/components/imagenes/tickrojo.png";
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
import flecha1 from "../src/components/imagenes/flecha1.png";
import flecha2 from "../src/components/imagenes/flecha2.png";
import flecha3 from '../src/components/imagenes/flecha3.png';
function App() {
  return (
    <div className="principal">
      <img src={background} className="fondo"></img>
      <header className="header">
        <div className="rectangle">
          {" "}
          <img src={logo} className="logo" id="logomovil" alt="logo growpro"></img>{" "}
            <div className="masInfoHeader" id="infoTitulo">
              <div className="infoHeader" id="infotituloText">QUIERO MÁS INFO</div>
            </div>
        </div>

        <div className="img">
          <div className="textHeader">
            <p>
              Aquí empiezan el viaje hacia tus{" "}
              <span class="sueños">sueños</span>
            </p>
          </div>
          <div className="masInfoHeader" id="botonInfo">
            <div className="infoHeader">QUIERO MÁS INFO</div>
          </div>
        </div>

        <div className="rectangulo" id="rectangulo">
          <div className="row">
            <div className="col-5  offset-md-1">
              <div className="valoracion">4.9</div>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <img src={vector} className="vector"></img>
              <p>354 opiniones</p>
              <div className="google" >
              <img src={G} className="G"></img>
              <img src={O} className="O"></img>
              <img src={O1} className="O1"></img>
              <img src={G1} className="G1"></img>
              <img src={L} className="L"></img>
              <img src={E} className="E"></img>
              </div>
            </div>
            <div className="col-5 offset-md-1">
              <div className="estudiantes">+15.000</div>
              <p className="datos">
                Estudiantes ya han vivido la experiencia con GrowPro
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6  offset-md-1 col-sm-12" id="infoCard">
            <div className="text-intro">
              Lorem Ipsum is simply dummy text of <b>the printing</b>
            </div>
            <p className="texto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has{" "}
            </p>

            <div className="masInfo" id="infoTextIntro">
              <div className="info">QUIERO MÁS INFO</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6 order-lg-1 order-2">
            <div className="container" id="formulario">
              <div className="row">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <label form="nombreInput" className="form-nombre">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombreInput"
                    ></input>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label form="apellidosInput" className="form-apellidos">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="apellidosInput"
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label form="correoInput" className="form-correo">
                      Correo
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="correoInput"
                    ></input>
                  </div>
                </div>
                <div className="row">
                    <label form="telefonoInput" className="form-telefono">
                      Número de Telefono
                    </label>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-5">
                    
                    <select
                      type="text"
                      className="form-control select-form"
                      id="Inputelefono"
                      >
                      <option>Spain</option>
                      </select>
                  </div>
                  <div className="col-lg-6 col-7">
                    <br />
                    <div className="Inputtelefono2">
                    <input
                      type="text"
                      className="form-control"
                      id="telefonoInput"
                    ></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <label form="Nacionalidad" className="form-nacionalidad">Nacionalidad</label>
                    <select className="form-control select-form">
                      <option>España</option>
                      <option>Argentina</option>
                      <option>México</option>
                      <option>Colombia</option>
                      <option>Chile</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <label form="Estudiar" className="form-estudiar">
                      ¿Qué quieres estudiar?
                    </label>
                    <select className="form-control select-form">
                      <option>Marketing</option>
                      <option>Ingles</option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <p className="privacidad">
                    <input type="checkbox"></input>
                    He leído y acepto el{" "}
                    <span className="morado">
                      {" "}
                      <u>aviso legal</u>{" "}
                    </span>{" "}
                    y la{" "}
                    <span className="morado">
                      {" "}
                      <u>política de privacidad </u>.
                    </span>
                  </p>
                </div>

                <div className="enviarBoton">
                  <div className="enviar">Enviar</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col order-lg-2 order-1">
            <p className="Lorem" id="lorem-text">
              Lorem Ipsum es simplemente el texto de relleno de las{" "}
              <b>imprentas</b>
            </p>
            <div className="ipsum" id="lorem">
              <p>
                <img src={tickrojo} className="tickrojo"></img>Lorem Ipsum es
                simplemente el texto de relleno de las imprentas.
              </p>
              <p>
                <img src={tickrojo} className="tickrojo"></img>Lorem Ipsum es
                simplemente el texto de relleno de las imprentas.
              </p>
              <p>
                <img src={tickrojo} className="tickrojo"></img>Lorem Ipsum es
                simplemente el texto de relleno de las imprentas.
              </p>
              <p>
                <img src={tickrojo} className="tickrojo"></img>Lorem Ipsum es
                simplemente el texto de relleno de las imprentas.
              </p>
              <div className="masInfo" id="masInfoButton">
                <div className="info">QUIERO MÁS INFO</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="backgroundBody" class="margenIcono">
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
              experiencia que le cambie la vida. ¡Vamos por el buen camino!
              Somos expertos en lo que hacemos.
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
          <div className="col-lg-4  col-12 borde" >
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
          <div className="col-lg-4  col-12 borde" >
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
              Somos pioneros en el sector en tener una app propia. Con la
              GrowPro App llevamos el acompañamiento en destino a otro nivel.
              ¡Conecta con los eventos y la comunidad de tu ciudad!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12 d-flex justify-content-end">
            <div>
              <div className="rectanguloIcono" id="rectanguloIcono7">
                <img src={icono7} className="icono7"></img>
              </div>
              <img src={playa} className="playa"></img>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <p className="australia">
              Descubre Australia,¡sumérgete <b> en un mar de aventuras!</b>
            </p>
            <p className="textAustralia">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
              egestas ultricies scelerisque senectus consequat netus justo in.
              Neque fusce sem sagittis ante. Maecenas dui urna amet morbi.{" "}
            </p>
            <p className="tick1">
              <img src={tickrojo} className="tickrojo"></img>
              Asesoramiento con expertos en la vida aussie
            </p>
            <p className="tick2">
              <img src={tickrojo} className="tickrojo"></img>
              Gestión del curso y el visado ¡para que te olvides del papeleo!
            </p>

            <div className="masInfo">
              <div className="info">QUIERO MÁS INFO</div>
            </div>
          </div>
        </div>

        <div className="dondeEstudiar">
          <p>¿Dónde <b>podrás estudiar?</b> </p>
          <div className="flechas">
            <img src={flecha1} className="flecha1"></img>
            <img src={flecha2} className="flecha2"></img>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3  col-12 p-3 mt-lg-1 mt-sm-5 tarjetaPaises">
            <img src={canada} className="paises"></img>
            <div className="fondoTarjeta">
              <p class="pais">Canadá</p>
              <p class="textPais">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices sollicitudin diam pretium.
              </p>
              <div className="verMas">
                <div class="ver">VER MÁS</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-12 p-3 mt-1 tarjetaPaises">
            <img src={australia} className="paises"></img>
            <div className="fondoTarjeta">
              <p class="pais">Australia</p>
              <p class="textPais">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices sollicitudin diam pretium.
              </p>
              <div className="verMas">
                <div class="ver">VER MÁS</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-12 p-3 mt-1 tarjetaPaises">
            <img src={nuevazelanda} className="paises"></img>
            <div className="fondoTarjeta">
              <p class="pais" id="paisNueva">
                Nueva Zelanda
              </p>
              <p class="textPais">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices sollicitudin diam pretium.
              </p>
              <div className="verMas">
                <div class="ver">VER MÁS</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-12 p-3 mt-1 tarjetaPaises">
            <img src={irlanda} className="paises"></img>
            <div className="fondoTarjeta">
              <p class="pais">Irlanda</p>
              <p class="textPais">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                ultrices sollicitudin diam pretium.
              </p>
              <div className="verMas">
                <div class="ver">VER MÁS</div>
              </div>
            </div>
          </div>
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

        <div className="masInfo" id="masInfoGrower">
          <div className="info">QUIERO MÁS INFO</div>
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

{/*addEventListener('load', () => {
  var rectangle = document.getElementById('rectangle');
  var lastScrollPosition = 0;
  
  window.addEventListener('scroll', function() {
  var currentScrollPosition = window.scrollY;
  
  if (currentScrollPosition > lastScrollPosition) {
  // Scrolling hacia abajo
  rectangle.classList.add('rectangle');
  
  } else {
  // Scrolling hacia arriba
  rectangle.classList.remove('rectangle');
  }
  
  lastScrollPosition = currentScrollPosition;
  })
  }, false);*/}

export default App;
