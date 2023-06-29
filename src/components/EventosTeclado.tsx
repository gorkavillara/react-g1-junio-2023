const EventosTeclado = () => {

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event)
        if (event.key !== "Enter") return

        alert("Has enviado el formulario")
    }
    return (
        <div>
            <input type="text" onKeyDown={handleKeyDown} />
        </div>
    )
}

export default EventosTeclado
