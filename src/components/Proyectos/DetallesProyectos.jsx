import { variableProyectos } from "./ComponenteDeProyectos";
import distribuidoraDeLaCosta from '../../assets/distribuidoraDeLaCosta.png'
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
                                <img src={proyecto.image} alt="" className="imgProyectos"/>
                            </div>
                            <div>
                                <h4>{proyecto.name}</h4>
                                <p>{proyecto.description}</p>
                                <button>Visitar Sitio</button>
                                <h5>Tecnologias utilizadas:</h5>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}