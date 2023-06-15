import "./App.css"
import SaludoClase from "./components/SaludoClase"
import SaludoFuncional from "./components/SaludoFuncional"

function App() {
    return (
        <div>
            <SaludoClase nombre="Gorka" />
            <SaludoFuncional nombre="Gorka" />
        </div>
    )
}

export default App
