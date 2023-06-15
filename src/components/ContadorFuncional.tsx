import { useState } from "react"

const ContadorFuncional = ({ valorInicial }: { valorInicial: number }) => {
    const [valorContador, setValorContador] = useState(valorInicial)
    // const valorContador = estado[0]
    // const funcionCambiaValor = estado[1]

    // console.log(estado)

    // let contador = 0
    // const handleClick = () => {
    //     contador++
    // }

    // function handleClick() {
    //     contador++
    //     console.log("contador", contador)
    // }

    const incrementaContador = () => {
        // setValorContador(valorContador + 1)
        // setValorContador(valorContador + 1)
        // setValorContador(valorContador + 1)
        // valorContador++
        setValorContador((v) => v + 1)
        setValorContador(function (valorAnterior) {
            return valorAnterior + 1
        })
        setValorContador((valorAnterior) => valorAnterior + 1)
        setValorContador((valorAnterior) => valorAnterior + 1)
        // setValorContador(valorContador + 1)
    }
    return (
        <>
            <div>
                <h1>Contador</h1>
                <span>Valor: {valorContador}</span>
            </div>
            <button onClick={incrementaContador}>Incrementa</button>
        </>
    )
}

export default ContadorFuncional
