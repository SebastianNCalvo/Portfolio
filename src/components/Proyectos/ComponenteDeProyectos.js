import distribuidoraDeLaCosta from '../../assets/distribuidoraDeLaCosta.png'
import mundoBebe from '../../assets/mundoBebe.jpeg'
import elementalSoul from '../../assets/elementalSoul.png'

export const iconosTecnologias = {
    HTML: 'SiHtml5',
    CSS: 'SiCss3',
    JavaScript: 'SiJavascript',
    React: 'SiReact',
    Firebase: 'SiFirebase',
    Vercel: 'SiVercel'
}

export const variableProyectos = 
[
    {
        "id":1,
        "image":`${distribuidoraDeLaCosta}`,
        "name": "Distribuidora de La Costa",
        "description": "E-comerce para distibuidora. Renderiza el catálogo de artículos, los separa por categoria o producto especifico. Gestiona la realizacion de pedidos para mayor comodidad de los clientes, implementando Firebase como base de datos.",
        "link": "https://distribuidora-de-la-costa-react-6675-pr602qvxk.vercel.app/",
        "technologies": ["HTML","CSS", "JavaScript","React","GitHub", "Firebase", "Vercel"]
    },
    {
        "id":2,
        "image":`${mundoBebe}`,
        "name": "Mundo Bebe",
        "description": "Sistema de gestión interna para control de ventas, stock y cambios. Optimiza la postventa mediante la generación automática de Notas de Crédito en PDF con detalles de artículos devueltos. Sus fortalezas radican en la trazabilidad total de operaciones de caja, registro histórico de vendedores y una interfaz intuitiva que agiliza la resolución de saldos a favor del cliente.",
        "link": "https://mundo-bebe.vercel.app/",
        "technologies": ["HTML","CSS", "JavaScript","React","GitHub", "Supabase", "Vercel"]
    },
    {
        "id":3,
        "image":`${elementalSoul}`,
        "name": "Elemental Soul",
        "description": "Elemental Soul es un RPG de combate táctico por turnos desarrollado íntegramente como una exhibición de lógica de programación y diseño de interfaces.",
        "link": "https://sebastianncalvo.github.io/Elemental_Soul/",
        "technologies": [ "HTML", "CSS","JavaScript", "GitHub"]
    }
]