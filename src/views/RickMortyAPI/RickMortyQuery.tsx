import { useState } from "react"
import axios, { AxiosResponse } from "axios"
import { useQuery } from "@tanstack/react-query"
import { RMPersonaje } from "../../models"

const RickMortyQuery = () => {
    const [id, setId] = useState("")
    // const [personaje, setPersonaje] = useState<RMPersonaje | null>(null)

    const { data: personaje, isFetching, error } = useQuery<AxiosResponse<RMPersonaje>>({
        queryKey: [`rm-personaje-${id}`],
        queryFn: () =>
            axios.get(`https://rickandmortyapi.com/api/character/${id}`),
        enabled: id !== "",
        // onSuccess: ({ data }) => {
        //     console.log(data)
        //     setPersonaje(data)
        // },
    })

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Introduce el id"
            />

            {isFetching && <h2>Cargando...</h2>}

            {error && <h2>ERROR: {error.toString()}</h2>}

            {!error && personaje && (
                <div>
                    <h2>
                        {personaje.data.id}. {personaje.data.name}
                    </h2>
                    <img src={personaje.data.image} alt={personaje.data.name} />
                </div>
            )}
        </div>
    )
}

export default RickMortyQuery
