import './SobreMi.css'
import DesarrolloWeb from '../../assets/DesarrolloWeb.png';
import Javascript from '../../assets/Javascript.png';
import ReactJs from '../../assets/ReactJs.png';
import BDSQL from '../../assets/BDSQL.png';

export default function SobreMi(){
    return(
        <div className='divSobreMi'>
            <h1>Sobre mi</h1>
            <h3>Mi camino hacia el desarrollo web no fue lineal, pero sí lógico. Como profesor de matemática, desarrollé una capacidad analítica y una estructura mental orientada a resolver problemas complejos, habilidades que hoy aplico en cada línea de código que escribo.

                Decidí dar el salto al mundo tech formándome como Desarrollador Full Stack en Coderhouse, donde obtuve certificaciones que avalan mis competencias en el ciclo completo de vida de una aplicación. No me detuve ahí: actualmente sigo profesionalizando mi perfil cursando una Tecnicatura Universitaria, convencido de que la base académica y la práctica constante son la clave de la excelencia técnica.</h3>
            <h3><bold>Mi Formación y Certificaciones</bold></h3>
            <div className='divImagenesCertificaciones'>
                <img src={DesarrolloWeb} alt="Desarrollo Web"/>
                <img src={Javascript} alt="Javascript"/>
                <img src={ReactJs} alt="React Js"/>
                <img src={BDSQL} alt="Base de Datos SQL"/>
            </div>
        </div>
    )
}