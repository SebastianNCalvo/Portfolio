import { variableProyectos } from "./ComponenteDeProyectos";
import fondoCompleto from '../../assets/fondoCompleto.png'
import './DetallesProyectos.css'

export default function DetallesProyecto(){
    let proyectos = variableProyectos

    return(
        <div className="divDetallesProyectos">
            {
                proyectos.map(proyecto =>{
                    return(
                        <div className="divDeProyectos" key={proyecto.id}>
                            <div>
                                <img className="imgProyectos" src={fondoCompleto} alt="" />
                            </div>
                            <div>
                                <h4>{proyecto.name}</h4>
                                <p>{proyecto.description}</p>
                                <button>Visitar Sitio</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}