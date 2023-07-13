import { useState, useCallback } from "react"
import Monitor from "./Monitor"
import Controles from "./Controles"

// const calculoSuperGrande = (valor: number) => {
//     let suma = 0
//     for (let i = 0; i < 923456789; i++) {
//         suma++
//     }
//     return valor * 2
// }

const Contador = () => {
    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState(false)

    // const dobleContador = calculoSuperGrande(contador)
    // const dobleContador = useMemo(() => calculoSuperGrande(contador), [contador])
    const dobleContador = 2 * contador

    // const decrementa = useCallback(() => setContador(contador - 1), [contador])
    // const incrementa = useCallback(() => setContador(contador + 1), [contador])

    // function decrementa() {
    //     setContador((prev) => prev - 1)
    // }
    // function incrementa() {
    //     setContador((prev) => prev + 1)
    // }

    const decrementa = useCallback(() => setContador((prev) => prev - 1), [])
    const incrementa = useCallback(() => setContador((prev) => prev + 1), [])
    return (
        <>
            <h2>Contador</h2>
            <button onClick={() => setToggle((prev) => !prev)}>
                {toggle ? "On" : "Off"}
            </button>
            <Monitor contador={dobleContador} />
            <Controles decrementa={decrementa} incrementa={incrementa} />
        </>
    )
}

export default Contador
