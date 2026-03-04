import './Inicio.css'
import fotoLinkedin from '../../assets/perfilLinkedin2.png'

export default function Inicio(){
    return(
        <section className="divInicio">
            <div className='divInicioIzquierdo'>
                <div className="fotoContainer">
                    <img src={fotoLinkedin} alt="Fotografía de Sebastián - Full Stack Developer" className="fotoPerfil" />
                </div>
            </div>
            <div className='divInicioDerecho'>
                <span className="saludo">Hola, mi nombre es</span>
                <h1>Sebastián</h1>
                <h2>Full Stack Developer</h2>
                <h3>Transformando ideas en productos digitales 🚀</h3>
                <p className="descripcionHero">
                    "No solo escribo código; construyo soluciones web innovadoras, 
                    escalables y centradas en el usuario."
                </p>
                <div className="inicioAcciones">
                    <a href="#proyectos" className="btn-primary">Ver Proyectos</a>
                    <a href="#contacto" className="btn-secondary">Contactar</a>
                </div>
            </div>
        </section>
    )
}