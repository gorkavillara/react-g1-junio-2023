// import { useState } from "react"
import "./App.scss"
// import Hijo from "./components/Hijo"
import Contador from "./views/Contador/Contador"
import ContadorConHook from "./views/Contador/ContadorConHook"
function App() {
    // const [isDarkMode, setIsDarkMode] = useState(false)
    return (
        <>
            {/* <h1 className={`${isDarkMode ? "dark" : "light"}`}>
                App
            </h1>
            <Hijo isDarkMode={isDarkMode} /> */}
            <ContadorConHook />
        </>
    )
}

export default App
