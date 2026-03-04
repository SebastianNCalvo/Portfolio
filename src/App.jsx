import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router';
import NavBar from './components/NavBar/NavBar'
import SobreMi from './components/SobreMi/SobreMi'
import Footer from './components/Footer/Footer';
import Proyectos from './components/Proyectos/Proyectos';
import Inicio from './components/Inicio/Inicio';
import Contacto from './components/Contacto/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className='contenedorPrincipal'>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/sobremi' element={<SobreMi />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<h2>404: Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}