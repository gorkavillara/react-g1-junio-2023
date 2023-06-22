import "./App.css"
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
            <button onClick={() => alert("has hecho clic en react")}>Click</button>
            <Formulario />
        </>
    )
}

export default App
