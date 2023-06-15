import "./App.css"
import ComponenteClase from "./components/ComponenteClase"
import ComponenteFuncional from "./components/ComponenteFuncional"

export const saludo = <h1>Hola mundo</h1> // eslint-disable-line

export const Boton = () => {
    return <button>Soy un componente botón</button>
}

function App() {
    return (
        <div>
            {saludo}
            <Boton />
            <ComponenteClase />
            <ComponenteFuncional />
        </div>
    )
}

export default App
