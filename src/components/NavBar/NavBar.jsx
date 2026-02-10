
import './NavBar.css'
import { NavLink } from 'react-router'


export default function NavBar(){
    return(
        <div className='divNavBar'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}><h2>Inicio</h2></NavLink>
            <NavLink to="/sobremi" className={({ isActive }) => isActive ? 'active' : ''}><h2>Sobre mi</h2></NavLink>
            <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}><h2>Proyectos</h2></NavLink>
            <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}><h2>Contacto</h2></NavLink>
        </div>
    )
}