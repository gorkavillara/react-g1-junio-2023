import { useParams, useNavigate } from "react-router-dom"
import { alumnos } from "../../assets"

const DetalleAlumno = () => {
    const navigate = useNavigate()
    const { alumnoId } = useParams()
    console.log(alumnoId)
    if (!alumnoId) return <h1>No hay id</h1>

    const alumno = alumnos.find((it) => it.id.toString() === alumnoId)


    if (!alumno) {
        console.log("Redireccionando...")
        setTimeout(() => navigate("/notfound"), 3000)
        return <h1>Alumno no encontrado</h1>
    }

    return (
        <div>
            <p>Nombre: {alumno.nombre}</p>
            <p>Email: {alumno.email}</p>
            <p>Nota: {alumno.nota}</p>
        </div>
    )
}

export default DetalleAlumno
