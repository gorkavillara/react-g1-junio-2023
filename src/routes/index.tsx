import { createBrowserRouter, RouteObject, Navigate } from "react-router-dom"
import App from "../App"
import { Alumnos, DetalleAlumno } from "../views"
import { Dashboard } from "../layouts"

const checkAuthentication = (): boolean => {
    console.log("Ejecutando")
    return Math.random() > 0.5
}

const protectRoute = (element: JSX.Element): JSX.Element => {
    // const isAuthenticated = checkAuthentication()
    // console.log(isAuthenticated)
    if (checkAuthentication()) return element
    return <Navigate to="/notauthenticated" />
}

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <App />
            },
            {
                path: "*",
                element: <h1>404 not found</h1>,
            },
            {
                path: "alumnos",
                element: <Alumnos />,
                // lazy: () => import("../views/Alumnos/Alumnos.tsx"),
            },
            {
                path: "alumnos/:alumnoId",
                element: <DetalleAlumno />,
            },
            {
                path: "main/*",
                element: <h1>Main</h1>,
            },
            {
                path: "protegida",
                element: protectRoute(<h1>Esta es la ruta protegida</h1>)
            }
        ],
    },
]

const router = createBrowserRouter(routes)

export default router
