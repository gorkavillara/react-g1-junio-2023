import { useState, useEffect } from "react"
import EnviaTiempo from "./components/EnviaTiempo"
import { tiempoInstance } from "../../assets/axiosInstances"

const frases = [
    "Mi mamá me mima",
    "Supercalifragilisticoexpialidoso",
    "Eso no es un bug, es un cambio de requerimiento",
    "Tres tristes tigres tragaban trigo en un trigal",
]

const Juego = () => {
    const [fraseObjetivo, setFraseObjetivo] = useState(frases[1])
    const [fraseEscrita, setFraseEscrita] = useState("")
    const [startTime, setStartTime] = useState<Date | null>(null)
    const [tiempo, setTiempo] = useState<number | null>(null)
    const [tiempos, setTiempos] = useState<any>([])

    useEffect(() => {
        obtenTiempos()
    }, [])

    useEffect(() => {
        if (fraseEscrita !== fraseObjetivo) return
        if (!startTime) return

        const endTime = new Date()
        setTiempo((endTime.getTime() - startTime.getTime()) / 1000)
        alert(
            `Has ganado! Has tardado ${
                (endTime.getTime() - startTime.getTime()) / 1000
            } segundos`
        )
    }, [fraseEscrita, fraseObjetivo, startTime])

    const chequeaInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // console.log(e.key)
        if (fraseEscrita.length === 0) setStartTime(new Date())
        const siguienteLetra = fraseObjetivo.at(fraseEscrita.length)
        if (e.key !== siguienteLetra) return

        setFraseEscrita((frase) => `${frase}${e.key}`)
    }

    const obtenTiempos = () => {
        tiempoInstance
            .post("/tiempos", { action: "get" })
            .then((res) => setTiempos(res.data))
            .catch(console.error)
    }

    return (
        <>
            <h1>Juego</h1>
            <div>{fraseObjetivo}</div>
            <input
                type="text"
                onKeyDown={chequeaInput}
                value={fraseEscrita}
                onChange={() => null}
            />
            {tiempo && <EnviaTiempo tiempo={tiempo} />}
            <h3>Ranking</h3>
            {tiempos &&
                tiempos.map((tiempo) => (
                    <div key={tiempo.tiempo}>
                        {tiempo.nombre}: {tiempo.tiempo}
                    </div>
                ))}
        </>
    )
}

export default Juego
