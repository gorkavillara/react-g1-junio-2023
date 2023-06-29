import { Outlet, NavLink } from "react-router-dom"
import styles from "./Dashboard.module.scss"

const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/alumnos">Alumnos</NavLink>
                <NavLink to="/main">Main</NavLink>
                <NavLink to="/protegida">PROHIBIDO</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard
