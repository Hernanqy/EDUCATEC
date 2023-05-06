import Img1 from "./../assets/imagenes/car3.jpg";
import Img2 from "./../assets/imagenes/car2.jpg";
import Img3 from "./../assets/imagenes/car1.jpg";
import Img5 from "./../assets/imagenes/personajefeminopng.png";
import Img6 from "./../assets/imagenes/personajepng.png";
import "animate.css";

import "./Cards.css";
const Cards = () => {
  return (
    <>
      <div className="containerGrid">

        <div className="animate__animated animate__backInRight personajecaja">
          <img className="personaje1" src={Img5} alt="" />
        </div>

<div className=" tituloSub">
          <h2 className="actividades animate__animated animate__backInDown ">
            Tecnologia Educativa
          </h2>
          <p className="subtitulo1 animate__animated animate__backInLeft ">
            Aprendizaje Adaptativo
          </p>
        </div>

        <div className="animate__animated animate__backInRight">
          <img className="personaje2" src={Img6} alt="" />
        </div>
       
       

      </div>









      <div className="header">
        <div className="title-cards"></div>
        <div className="container-card bgcard1">
          <div className="card">
            <figure>
              <img src={Img1} />
            </figure>
            <div className="contenido-card">
              <div>
                <h3>Programacion</h3>
                <p>
                  Creamos tu página web utilizando las últimas tecnologías
                  disponibles. Una Web adaptativa a tu móvil o Tablet y con un
                  gestor de contenido
                </p>
              </div>
              <a href="#">Leer Màs</a>
            </div>
          </div>

          <div className="card">
            <figure>
              <img src={Img2} />
            </figure>

            <div className="contenido-card">
              <div>
                <h3>Pensamiento computacional</h3>
                <p>
                  Nosotros aprendemos como resolver problemas de manera
                  inovadora.
                </p>
              </div>
              <a href="#">Leer Màs</a>
            </div>
          </div>
          <div className="card">
            <figure>
              <img src={Img3} />
            </figure>
            <div className="contenido-card">
              <div>
                <h3>Impresion 3d</h3>
                <p>Conocemos como utilizar una impresora 3d.</p>
              </div>
              <a href="#">Leer Màs</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
