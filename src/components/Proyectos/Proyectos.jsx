import DetallesProyecto from "./DetallesProyectos";
import './DetallesProyectos.css';

export default function Proyectos() {
    return (
        <section className="seccionProyectos">
            <header className="headerProyectos">
                <h1>Portafolio de Proyectos</h1>
                <p>
                    Una selección de aplicaciones web donde aplico lógica matemática 
                    y tecnologías modernas para resolver problemas reales.
                </p>
            </header>
            
            <div className="listadoProyectos">
                <DetallesProyecto />
            </div>
        </section>
    );
}