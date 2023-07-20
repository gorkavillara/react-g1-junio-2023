import { useState } from "react"
import { tiempoInstance } from "../../../assets/axiosInstances"

const EnviaTiempo = ({ tiempo }: { tiempo: number }) => {
    const [nombre, setNombre] = useState("")
    const enviaTiempo = () => {
        tiempoInstance
            .post("/tiempos", {
                action: "create",
                tiempo,
                nombre,
            })
            .then(console.log)
            .catch(console.error)
    }
    return (
        <div>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button onClick={enviaTiempo}>Enviar</button>
        </div>
    )
}

export default EnviaTiempo
