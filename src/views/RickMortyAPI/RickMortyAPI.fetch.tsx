import { useState } from "react"
import { RMPersonaje } from "../../models"

const RickMortyAPI = () => {
    const [id, setId] = useState("")
    const [personaje, setPersonaje] = useState<RMPersonaje | null>(null)

    const buscarPersonaje = async () => {
        const url = `https://rickandmortyapi.com/api/character/${id}`
        // fetch(url)
        //     .then(respuesta => respuesta.json())
        //     .then(datos => console.log(datos))
        //     .catch(error => console.error(error))
        try {
            const respuesta = await fetch(url)
            const datos = await respuesta.json()
            console.log(datos)
            setPersonaje(datos)
        } catch (e) {
            console.error(e)
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

            {personaje && (
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
