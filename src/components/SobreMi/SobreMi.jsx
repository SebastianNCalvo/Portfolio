import './SobreMi.css'
import DesarrolloWeb from '../../assets/DesarrolloWeb.png';
import Javascript from '../../assets/Javascript.png';
import ReactJs from '../../assets/Certificado-ReactJs.png';
import BDSQL from '../../assets/BDSQL.png';

export default function SobreMi() {
    return (
        <section className='seccionSobreMi'>
            <div className='contenedorTexto'>
                <h1>Sobre mí</h1>
                <p className='introTexto'>
                    Mi camino hacia el desarrollo web no fue lineal, pero sí <strong>lógico</strong>. 
                    Como profesor de matemática, desarrollé una capacidad analítica y una estructura mental 
                    orientada a resolver problemas complejos, habilidades que hoy aplico en cada línea de código que escribo.
                </p>
                <p className='introTexto'>
                    Decidí dar el salto al mundo tech formándome como <strong>Desarrollador Full Stack en Coderhouse</strong>, 
                    donde obtuve certificaciones que avalan mis competencias en el ciclo completo de vida de una aplicación. 
                    Actualmente sigo profesionalizando mi perfil cursando una <strong>Tecnicatura Universitaria</strong>, 
                    convencido de que la base académica y la práctica constante son la clave de la excelencia técnica.
                </p>
            </div>

            <div className='formacionContenedor'>
                <h2>Mi Formación y Certificaciones</h2>
                <div className='divImagenesCertificaciones'>
                    <div className='cardCertificado'>
                        <img src={DesarrolloWeb} alt="Certificado Desarrollo Web" />
                        <span>Desarrollo Web</span>
                    </div>
                    <div className='cardCertificado'>
                        <img src={Javascript} alt="Certificado Javascript" />
                        <span>Javascript</span>
                    </div>
                    <div className='cardCertificado'>
                        <img src={ReactJs} alt="Certificado React Js" />
                        <span>React JS</span>
                    </div>
                    <div className='cardCertificado'>
                        <img src={BDSQL} alt="Certificado Base de Datos SQL" />
                        <span>Bases de Datos SQL</span>
                    </div>
                </div>
            </div>
        </section>
    )
}