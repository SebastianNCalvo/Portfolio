import { variableProyectos } from "./ComponenteDeProyectos";
import './DetallesProyectos.css'
import * as Icons from 'react-icons/si';

const iconMap = {
    React: Icons.SiReact,
    Firebase: Icons.SiFirebase,
    JavaScript: Icons.SiJavascript,
    CSS: Icons.SiCss3,
    HTML: Icons.SiHtml5,
    Vercel: Icons.SiVercel,
    GitHub: Icons.SiGithub,
    Supabase: Icons.SiSupabase
}

export default function DetallesProyecto() {
    // Usamos una constante para mayor claridad
    const proyectos = variableProyectos;

    return (
        <section className="divDetallesProyectosEnConjunto">
            {proyectos.map(proyecto => {
                return (
                    <article className="divDeProyectosIndividual" key={proyecto.id}>
                        <div className="contenedorImagenProyecto">
                            <img src={proyecto.image} alt={`Captura de pantalla de ${proyecto.name}`} className="imgProyectos" />
                        </div>
                        
                        <div className="contenedorInfoProyecto">
                            <h3>{proyecto.name}</h3>
                            <p>{proyecto.description}</p>
                            
                            <div className="accionesProyecto">
                                <a href={proyecto.link} target="_blank" rel="noopener noreferrer" className="btnVisitar">
                                    Visitar Sitio
                                </a>
                            </div>

                            <div className="seccionTecnologias">
                                <h4>Tecnologías utilizadas:</h4>
                                <div className="tecnologias-container">
                                    {proyecto.technologies && proyecto.technologies.map((tech, index) => {
                                        const IconComponent = iconMap[tech];
                                        return (
                                            <div key={index} className="tech-badge" title={tech}>
                                                {IconComponent && <IconComponent className="tech-icon" />}
                                                <span>{tech}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}