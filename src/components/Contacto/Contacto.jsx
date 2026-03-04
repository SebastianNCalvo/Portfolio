import { useState } from "react"
import Swal from "sweetalert2"
import './Contacto.css'

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "", email: "", asunto: "", comentario: ""
    })

    function handleInputChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        // Aquí podrías integrar un servicio como EmailJS en el futuro
        console.log('Enviar formulario:', formData)
        
        Swal.fire({
            title: '¡Mensaje enviado!',
            text: "Te responderé a la brevedad.",
            icon: 'success',
            background: '#112240', // --bg-light
            color: '#ccd6f6',      // --text-main
            confirmButtonColor: '#64ffda', // --primary-color
            timer: 2500
        })

        setFormData({ nombre: "", email: "", asunto: "", comentario: "" })
    }

    return (
        <section className="seccionContacto">
            <div className="headerContacto">
                <h2>¡Pongámonos en contacto!</h2>
                <p>
                    Escríbeme a través del formulario; leo cada mensaje personalmente y te daré 
                    una respuesta a la brevedad para que podamos coordinar una llamada o reunión.
                </p>
            </div>

            <form onSubmit={handleSubmit} id="formContacto" className="formCard">
                <div className="grupoInput">
                    <label htmlFor="nombre">Nombre y apellido</label>
                    <input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Juan Manuel"
                        required
                    />
                </div>

                <div className="grupoInput">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="example@example.com"
                        required
                    />
                </div>

                <div className="grupoInput">
                    <label htmlFor="asunto">Asunto</label>
                    <select
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="" disabled>-- Seleccioná una opción --</option>
                        <option value="Presupuesto">Presupuesto</option>
                        <option value="Puesto laboral">Puesto laboral</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="grupoInput">
                    <label htmlFor="comentario">Comentario</label>
                    <textarea
                        name="comentario"
                        id="comentario"
                        value={formData.comentario}
                        onChange={handleInputChange}
                        placeholder="Escríbeme tu consulta"
                        required
                    />
                </div>

                <button type="submit" className="btnEnviar">Enviar mensaje</button>
            </form>
        </section>
    )
}