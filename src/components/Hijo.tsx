import { useContext } from "react"
import { ContadorContext } from "../contexts/ContadorContextProvider"

const Hijo = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const { incrementaContador } = useContext(ContadorContext)
    return (
        <div>
            <h2 className={`${isDarkMode ? "dark" : "light"}`}>Hijo</h2>
            <button onClick={incrementaContador}>Incrementa</button>
        </div>
    )
}

export default Hijo
