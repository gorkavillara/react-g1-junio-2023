import "./App.css"
import ContadorClase from "./components/ContadorClase"
import ContadorFuncional from "./components/ContadorFuncional"

function App() {
    return (
        <>
            <ContadorFuncional valorInicial={5} />
            <ContadorClase valorInicial={5} />
        </>
    )
}

export default App
