import { useState, useEffect } from "react"
import axios from "axios"

const characterId = 2

const RickMorty = () => {
    const [character, setCharacter] = useState<any>(null)

    useEffect(() => {
        axios
            .get(
                `https://rickandmortyapi.com/api/character/${characterId.toString()}`
            )
            .then((res) => setCharacter(res.data))
            .catch(console.error)
    }, [])
    return (
        <div>
            <h1>Rick and Morty characters</h1>
            {character && (
                <div>
                    <h2 title="character-name">{character.name}</h2>
                </div>
            )}
        </div>
    )
}

export default RickMorty
