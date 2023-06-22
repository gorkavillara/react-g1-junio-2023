import { useState, useEffect } from "react"

const CicloVidaFuncional = ({ contador, esMayorQueDos = false }: { contador: number, esMayorQueDos?: boolean }) => {
    const [toggle, setToggle] = useState(false)
    console.log(esMayorQueDos)

    useEffect(() => { // Equiv. componentDidMount
        console.log("El componente se ha montado")
        setToggle((prev) => !prev)
    }, [])

    useEffect(() => { // Equiv. componentDidUpdate (contador, toggle)
        console.log("El contador ha cambiado", contador)
    }, [contador, toggle])

    useEffect(() => { // Equiv. componentWillUnmount
        return () => {
            console.log("El componente va a desmontarse")
        }
    }, [])

    return (
        <>
            <div>Contador: {contador}</div>
            <button onClick={() => setToggle((prev) => !prev)}>CambiaToggle</button>
        </>
    )
}

export default CicloVidaFuncional
