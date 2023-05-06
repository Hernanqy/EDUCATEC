
import './Cardparalax.css'

import p3 from "./../assets/imagenes/brunillo.png"
import p4 from "./../assets/imagenes/hernan.png"
import 'animate.css';


const Cardparalx = () => {
    return (
        <div className='Carcontainer'>
           <div> <h2 className='actividades animate_animate animate__heartBeat'>Quienes Somos</h2></div>
           



            <div className="container__cards">



<div className="card">
    <div className="cover">
        <img src={p3} alt=""/>
        <div className="img__back"></div>
    </div>
    <div className="description">
        <h2>Bruno Vitale</h2>
        <p>Profesor de Biologia-Educador de Museo-Experto universitario en Tecnologia Educativa</p>
        <div><input type="button" value="Leer Más"/></div>
    </div>
</div>

<div className="card">
    <div className="cover">
        <img src={p4} alt=""/>
        <div className="img__back"></div>
    </div>
    <div className="description">
        <h2>Hernan Gustavo Quiroga</h2>
        <p>Museologo-Desarrollador Web Full Stack-Educador de museo-Experto Universitario en Tecnologia Educativa</p>
        <div><input type="button" value="Leer Más"/></div>
    </div>
</div>

</div>
        </div>
    );
};

export default Cardparalx;