import { useSearchParams } from "react-router-dom"
import "./App.scss"
function App() {
    const [searchParams, iterator] = useSearchParams()
    console.log(searchParams.get("nombre"))
    console.log(searchParams.get("email"))
    console.log(searchParams.get("age"))
    return (
        <>
            <h1>App</h1>
        </>
    )
}

export default App
