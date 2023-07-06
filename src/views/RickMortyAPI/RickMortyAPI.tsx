import { useState } from "react"
import axios, { AxiosError } from "axios"
import { rickMortyInstance } from "../../assets/instances"
import { RMPersonaje } from "../../models"

const RickMortyAPI = () => {
    const [id, setId] = useState("")
    const [personaje, setPersonaje] = useState<RMPersonaje | null>(null)
    const [error, setError] = useState(null)

    const buscarPersonaje = async () => {
        const url = `https://rickandmortyapi.com/api/character/${id}`
        try {
            // const { data } = await axios.get<RMPersonaje>(url)
            const { data } = await rickMortyInstance(id)
            setError(null)
            setPersonaje(data)
        } catch(e) {
            const error = e as AxiosError
            console.error(error.response?.data.error)
            setError(error.response?.data.error)
        }
    }
    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Introduce el id"
            />
            <button onClick={buscarPersonaje}>Buscar</button>

            {error && <h2>ERROR: {error}</h2>}

            {!error && personaje && (
                <div>
                    <h2>
                        {personaje.id}. {personaje.name}
                    </h2>
                    <img src={personaje.image} alt={personaje.name} />
                </div>
            )}
        </div>
    )
}

export default RickMortyAPI
