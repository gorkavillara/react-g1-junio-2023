import "./App.scss"
import Contador from "./views/Contador/Contador"

function App() {
    const mode = import.meta.env.MODE
    return (
        <div className={mode}>
            <h2>{import.meta.env.VITE_APP_NAME}</h2>
            <Contador />
            <p>Modo: {mode}</p>
            <p>API url: {import.meta.env.VITE_API_URL}</p>
        </div>
    )
}

export default App
