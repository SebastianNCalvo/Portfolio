import { useState } from "react"
import Swal from "sweetalert2"
import './Contacto.css'

export default function Contacto(){
    const [formData, setFormData] = useState({
        nombre:"", email:"", asunto:"", comentario: ""
    })

    function handleInputChange(e){
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    function handleSubmit(e){
        e.preventDefault()
        setFormData({nombre:"", email:"", asunto:"", comentario: ""})
        console.log('Enviar formulario:', formData)
        Swal.fire({
            text:"¡Mensaje enviado con exito!",
            background:'#ddf0ce',
            timer: 1300,
            showConfirmButton:false
        })
    }

    return(
        <div>
            <h3>¡Pongamonos en contacto!</h3>
            <p>Dejame tu consulta y en la brevedad estaré respondiendo tu mensaje</p>
            <p>Escríbeme a través del formulario; leo cada mensaje personalmente y te daré una respuesta a la brevedad para que podamos coordinar una llamada o reunión.</p>
            <form onSubmit={handleSubmit} id="formContacto">

                <label htmlFor="nombre">Nombre y apellido: 
                    <input 
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Juan Manuel"
                    required/>
                </label>

                <label htmlFor="email">Email: 
                    <input 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="example@example.com"
                    required/>
                </label>
                <label htmlFor="asunto">Asunto:
                    <select  id="asunto" name="asunto" value={formData.asunto} onChange={handleInputChange} placeholder="Selecciona una opción" required>
                        <option>--Selecioná un opción--</option>
                        <option>Presupuesto</option>                    
                        <option>Puesto laboral</option>
                    </select>
                </label>

                <label htmlFor="comentario" id="labelConTextarea">Comentario: 
                    <textarea name="comentario" id="comentario"
                    type="text"
                    value={formData.comentario}
                    onChange={handleInputChange}
                    placeholder="Escribíme tu consulta"
                    required>
                    </textarea>
                </label>

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}