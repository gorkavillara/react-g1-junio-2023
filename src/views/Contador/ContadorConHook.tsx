import useContador from "../../hooks/useContador"

const ContadorConHook = () => {
    const { contador, incrementaContador, incrementaCinco } = useContador()
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementaContador}>Incrementa</button>
            <button onClick={incrementaCinco}>Incrementa 5</button>
        </div>
    )
}

export default ContadorConHook
