import React from "react"

interface IProps {
    decrementa: () => void
    incrementa: () => void
}

const Controles = React.memo(({ decrementa, incrementa }: IProps) => {
    return (
        <>
            <button onClick={decrementa}>Decrementa</button>
            <button onClick={incrementa}>Incrementa</button>
        </>
    )
})

export default Controles
