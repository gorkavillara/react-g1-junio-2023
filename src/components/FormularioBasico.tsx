import { useRef, useState } from "react"

const FormularioBasico = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [apellidos, setApellidos] = useState("Villar")

    const handleSubmit = (evento: React.FormEvent) => {
        evento.preventDefault()
        console.log("Enviando formulario...")
        // Enviamos la información a un endpoint...
        console.log(
            ((evento.target as HTMLFormElement)[0] as HTMLInputElement).value
        )

        const valorInput = inputRef.current?.value || null

        console.log("Valor del input", valorInput)
    }
    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        // Cambiar el estado
        setApellidos(evento.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <br/>
                <input
                    ref={inputRef}
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                />
                <input
                    type="text"
                    name="apellidos"
                    placeholder="Tus apellidos"
                    value={apellidos}
                    // onChange={handleChange}
                    onChange={(e) => setApellidos(e.target.value)}
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

export default FormularioBasico
