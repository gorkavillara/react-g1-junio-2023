import "./App.scss"
import Contador from "./views/Contador/Contador"

const contextoUsuario = {
    usuario: "Brais",
    isLoggedIn: true,
}
const contextoAjustes = {
    ajustes: {}
}

function App() {
    return (
        <>
            <Contador />
            <>
                <div className="header"></div>
                <div className="body"></div>
                <div className="footer"></div>
            </>
        </>
    )
}

export default App
