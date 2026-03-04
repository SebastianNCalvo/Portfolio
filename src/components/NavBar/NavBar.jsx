import './NavBar.css'
import { NavLink } from 'react-router'

export default function NavBar() {
    return (
        <header className="header">
            <nav className="navContainer">
                <ul className="navList">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobremi" className={({ isActive }) => isActive ? 'active' : ''}>
                            Sobre mi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/proyectos" className={({ isActive }) => isActive ? 'active' : ''}>
                            Proyectos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}