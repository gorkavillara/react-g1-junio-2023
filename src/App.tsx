import "./App.scss"
import Contador from "./views/Contador/Contador"
import ContadorContextProvider from "./contexts/ContadorContextProvider"
import Hijo from "./components/Hijo"

function App() {
    return (
        <>
            <div className="contadores">
                <ContadorContextProvider>
                    <Contador />
                    <Contador />
                    <Hijo isDarkMode />
                </ContadorContextProvider>
            </div>
        </>
    )
}

export default App
