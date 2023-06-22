import { useState } from "react"

const Formulario = () => {
    const [formulario, setFormulario] = useState("Villar")

    const handleSubmit = (evento: React.FormEvent) => {
        evento.preventDefault()
        console.log("Enviando formulario...")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <br/>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                />
                <input
                    type="text"
                    name="apellidos"
                    placeholder="Tus apellidos"
                />
                <br/>
                <br/>
                <button type="submit">Enviar</button>
            </form>
            <div onClick={() => console.log("Clic en el div")}>
                <br/>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        console.log("Clic en prueba")
                    }}
                >
                    prueba
                </button>
            </div>
        </>
    )
}

export default Formulario
