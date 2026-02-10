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
    GitHub: Icons.SiGithub
}

export default function DetallesProyecto(){
    let proyectos = variableProyectos

    return(
        <div className="divDetallesProyectosEnConjunto">
            {
                proyectos.map(proyecto =>{
                    return(
                        <div className="divDeProyectosIndividual" key={proyecto.id}>
                            <div>
                                <img src={proyecto.image} alt="" className="imgProyectos"/>
                            </div>
                            <div>
                                <h4>{proyecto.name}</h4>
                                <p>{proyecto.description}</p>
                                <button><a href={proyecto.link}>Visitar Sitio</a></button>
                                <h5>Tecnologias utilizadas:</h5>
                                <div className="tecnologias-container">
                                    {proyecto.technologies && proyecto.technologies.map((tech, index) => {
                                        const IconComponent = iconMap[tech];
                                        return (
                                            <div key={index} className="tech-badge" id={tech}>
                                                {IconComponent && <IconComponent className="tech-icon" />}
                                                <span>{tech}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}