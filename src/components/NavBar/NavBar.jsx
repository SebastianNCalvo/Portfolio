
import './NavBar.css'
import { NavLink } from 'react-router'


export default function NavBar(){
    return(
        <div className='divNavBar'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><h3>Inicio</h3></NavLink>
            <NavLink to="/sobremi" className={({ isActive }) => isActive ? 'active' : ''}><h3>Sobre mi</h3></NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}><h3>Proyectos</h3></NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}><h3>Contacto</h3></NavLink>
        </div>
    )
}