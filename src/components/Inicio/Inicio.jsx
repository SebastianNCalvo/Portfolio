import './Inicio.css'
import descarga from '../../assets/descarga.jpg'

export default function Inicio(){
    return(
        <div className="divInicio">
            <div className='divInicioIzquierdo'>
                <img src={descarga} alt="" />
            </div>
            <div className='divInicioDerecho'>
                <h1>¡Bienvenidos!</h1>
                <h2>🚀 Full Stack Developer | Transformando ideas en productos digitales</h2>
                <p>"No solo escribo código; construyo soluciones web innovadoras, escalables y centradas en el usuario."</p>
            </div>
        </div>
    )
}