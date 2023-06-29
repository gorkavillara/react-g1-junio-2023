import "./App.css"
import EventosTeclado from "./components/EventosTeclado"
import Formulario from "./components/Formulario"
function App() {
    // useEffect(() => {
    //     const button = document..........
    //     button.addEventListener("click", () => {
    //         return
    //     })
    //     return () => {
    //         button.removeEventListener("click", () => null)
    //     }
    // }, [])
    return (
        <>
            <EventosTeclado />
            <button onClick={() => alert("has hecho clic en react")}>Click</button>
            <Formulario />
        </>
    )
}

export default App
