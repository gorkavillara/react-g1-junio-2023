import { RouteObject } from "react-router-dom"
import Dashboard from "../layouts/Dashboard"
import { Clientes } from "../views"

const routes: RouteObject[] = [{
    path: "/",
    element: <Dashboard />,
    children: [{
        path: "",
        id: "Principal",
        element: <h1>Hola mundo</h1>
    }, {
        path: "clientes",
        id: "Clientes",
        element: <Clientes />
    }, {
        path: "juego",
        id: "Juego",
        element: <h1>Juego</h1>
    }]
}]

export default routes