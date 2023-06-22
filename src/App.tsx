import { useState, useMemo } from "react"
import "./App.css"
// import CicloVidaClase from "./components/CicloVidaClase"
import CicloVidaFuncional from "./components/CicloVidaFuncional"
import Card from "./components/Card"

function App() {
    const [contador, setContador] = useState(0)

    // const incrementaContador = () => {
    //     // setContador(contador + 1) // contador = 14
    //     // setContador(contador + 1) // contador = 14
    //     // setContador(contador + 1) // contador = 14
    //     // setContador(contador + 1) // contador = 14
    //     setContador((valorAnterior) => valorAnterior + 1)
    //     setContador((valorAnterior) => valorAnterior + 1)
    //     setContador((valorAnterior) => valorAnterior + 1)
    //     setContador((valorAnterior) => valorAnterior + 1)
    // }
    // let miValor: number | string = 18
    // miValor = "hola mundo"

    const mostrarCicloVida = useMemo(() => contador < 10 || contador > 15, [contador])

    // const miNombre = "Gorka"

    return (
        <>
            {/* {mostrarCicloVida && <CicloVidaClase contador={contador} />} */}
            {/* <button onClick={() => setContador((v) => v + 1)}>
                Incrementa
            </button> */}
            {/* <button onClick={incrementaContador}>Incrementa</button> */}
            {/* {mostrarCicloVida && <CicloVidaFuncional contador={contador} />} */}
            <Card contador={contador} setContador={setContador}>
                <CicloVidaFuncional contador={contador} />
            </Card>
        </>
    )
}

export default App
