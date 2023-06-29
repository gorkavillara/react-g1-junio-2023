import { useState } from "react"

const Principal = () => {
    const [toggle, setToggle] = useState(true)

    // if (toggle) return <div>El interruptor está encendido</div>

    // return <div>El interruptor está apagado</div>

    return (
        <>
            {toggle && (
                <div>
                    {toggle ? <h3>Encendido</h3> : <h3>Apagado</h3>}
                    {toggle && <p>El interruptor está encendido</p>}
                    <button onClick={() => setToggle((prev) => !prev)}>
                        {toggle ? "On" : "Off"}
                    </button>
                </div>
            )}
        </>
    )
}

export default Principal
