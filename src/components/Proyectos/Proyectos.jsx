import DetallesProyecto from "./DetallesProyectos";
import './DetallesProyectos.css'

export default function Proyectos(){
    return(
        <div className="divPresentaciónProyectos">
            <h1>Estos son mis proyectos</h1>
            <DetallesProyecto></DetallesProyecto>
        </div>

    )
}