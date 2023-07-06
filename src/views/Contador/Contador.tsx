import { useContext } from "react"
import { ContadorContext } from "../../contexts/ContadorContextProvider"
import useContador from "../../hooks/useContador"

const Contador = () => {
    // const { contador, incrementaContador, incrementaCinco } = useContador()
    const { contador, incrementaContador, incrementaCinco } = useContext(ContadorContext)

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementaContador}>Incrementa</button>
            <button onClick={incrementaCinco}>Incrementa 5</button>
        </div>
    )
}

export default Contador
