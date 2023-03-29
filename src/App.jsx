import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/components/imagenes/logo-white.png';
import imagen from '../src/components/imagenes/header.png';
import background from '../src/components/imagenes/background.png'
import vector from '../src/components/imagenes/Vector.png';
import G from '../src/components/imagenes/Google/G.png';
import O from '../src/components/imagenes/Google/O (2).png';
import O1 from '../src/components/imagenes/Google/O1.png';
import G1 from '../src/components/imagenes/Google/G1.png';
import L from '../src/components/imagenes/Google/L (2).png';
import E from '../src/components/imagenes/Google/E (2).png';
import tick from '../src/components/imagenes/tick.png';
import { Col, Row } from 'react-bootstrap';
function App() {
  return (
    
    <div>
      <img src={background} className='fondo'></img>
    <header className='header'>
      
    
      <div className='rectangle'> <img src={logo} className='logo' alt='logo growpro'></img> </div>
      
      <div className='img'>
          
        <img src={imagen} className='img'></img> 
      </div>
    
      <div className='rectangulo'>
       
            <div className='row'>
              <div className='col-5 infoCard offset-md-1'>
                <div className='valoracion'>4.9</div>
                <img src={vector} className='vector'></img>
                <img src={vector} className='vector'></img>
                <img src={vector} className='vector'></img>
                <img src={vector} className='vector'></img>
                <img src={vector} className='vector'></img>
                <p>354 opiniones</p>
                <img src={G} className='G'></img>
                <img src={O} className='O'></img>
                <img src={O1} className='O1'></img>
                <img src={G1} className='G1'></img>
                <img src={L} className='L'></img>
                <img src={E} className='E'></img>
              </div>
              <div className='col-5 infoCard offset-md-1'>
              <div className='estudiantes'>
                 +15.000
              </div>
              <p className='datos'>Estudiantes ya han vivido  la experiencia con GrowPro</p>
              </div>
            </div>
          </div>
      
             







          
           <div className='row'>
           <div className='col-6 infoCard offset-md-1'>       
          <div className='text-intro'>
             Lorem Ipsum is simply dummy text of the printing 
          </div>
          <p className='texto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          It has </p>
         

          <div className='boton'>
            <p>QUIERO MÁS INFO</p>
          </div>

          </div>
          </div>
          


          

          <div className='row'>

          <div className='col-6'>
          <div className='container'>
            <div className='row'>
                <div className='row'>
                <div className='col-6'>
                  <label form='nombreInput' className='form-nombre'>Nombre</label>
                  <input type='text' className='form-control' id='nombreInput'></input>
                </div>
                <div className='col-6'>
                  <label form='apellidosInput' className='form-apellidos'>Apellidos</label>
                  <input type='text' className='form-control' id='apellidosInput'></input>
                </div>
                </div>
                  <div className='row'>
                    <div className='col'>
                      <label form='correoInput' className='form-correo'>Correo</label>
                      <input type='text' className='form-control' id='correoInput'></input>
                    </div>
                  </div>
                <div className='row'>
                  <div className='col-6'>
                    <label form='telefonoInput' className='form-telefono'>Telefono</label>
                    <input type='text' className='form-control' id='telefonoInput'></input>
                  </div>
                  <div className='col-6'>
                  <br/>
                  <input type='text' className='form-control' id='telefonoInput'></input>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <label form='Nacionalidad'>Nacionalidad</label>
                    <input type='text' className='form-control' id='nacionalidadInput'></input>                      
                  </div>
                <div className='col-6'>
                  <label form='Estudiar' className='form-estudiar'>¿Qué quieres estudiar?</label>
                  <input type='text' className='form-control' id='telefonoInput'></input>
                </div>
              </div>
              <br/>
              <br/>
              <div>
              <input type='checkbox'></input>
              {/*<img src={tick} className='tick'></img>*/}
              <p className='privacidad'>He leído y acepto el aviso legal y la política de privacidad.</p>
              </div>
              
              <div className='enviarBoton'>
                <div className='enviar'>Enviar</div>
              </div>
            </div>
          </div>
          </div>

            <div className='col'>
              <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas
              </p>
            </div>
      
          </div>
          
    </header>

    <body>
    
    </body>
    
    </div>
    
  );
}

export default App;
