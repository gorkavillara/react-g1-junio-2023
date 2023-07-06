import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../app/store"
import { incrementa, incrementaX } from "../../features/contador/contadorSlice"

const Contador = () => {
    const contador = useSelector((state: RootState) => state.contador)
    console.log(contador)
    const dispatch = useDispatch()

    const incrementaContador = () => {
        dispatch(incrementa())
        // incrementa()
    }

    const incrementaCinco = () => {
        dispatch(incrementaX(5))
    }

    return (
        <div>
            <h2>Contador: {contador.valor}</h2>
            <button onClick={incrementaContador}>Incrementa</button>
            <button onClick={incrementaCinco}>Incrementa 5</button>
        </div>
    )
}

export default Contador
