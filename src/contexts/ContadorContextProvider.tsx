import { useState, useReducer, createContext, PropsWithChildren } from "react"
import contadorReducer, { contadorInitialState } from "../reducers/contadorReducer"

interface ContadorContextValues {
    contador: number
    incrementaContador: () => void
    incrementaCinco: () => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const ContadorContext = createContext<ContadorContextValues>(null!)

const ContadorContextProvider = ({ children }: PropsWithChildren) => {
    const [contador, dispatchContador] = useReducer(contadorReducer, contadorInitialState)
    
    
    // const [contador, setContador] = useState(0)
    const incrementaContador = () => dispatchContador({ type: "incrementa" })
    // const incrementaCinco = () => setContador((prev) => prev + 5)
    const incrementaCinco = () => dispatchContador({ type: "incrementaCinco" })


    return (
        <ContadorContext.Provider
            value={{ contador: contador.valor, incrementaContador, incrementaCinco }}
            children={children}
        />
    )
}

export default ContadorContextProvider
