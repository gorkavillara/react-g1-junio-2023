import { useState } from "react"

interface IForm {
    nombre: string
    apellidos: string
}

const formularioVacio = (): IForm => ({ nombre: "hola", apellidos: "" })

const Formulario = () => {
    const [formulario, setFormulario] = useState<IForm>(formularioVacio)

    const handleSubmit = (evento: React.FormEvent) => {
        evento.preventDefault()
        console.log("Enviando formulario...")
    }
    const changeField = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormulario({ ...formulario, [e.target.name]: e.target.value })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <br />
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formulario.nombre}
                    onChange={changeField}
                />
                <input
                    type="text"
                    name="apellidos"
                    placeholder="Tus apellidos"
                    value={formulario.apellidos}
                    onChange={changeField}
                />
                <br />
                <br />
                <button type="submit">Enviar</button>
            </form>
            <div onClick={() => console.log("Clic en el div")}>
                <br />
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
