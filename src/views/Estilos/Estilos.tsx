// import "./Estilos.css"
import styles from "./Estilos.module.css"
import Hijo from "./Hijo"

const Estilos = () => {
    return (
        <div>
            <h2 className={styles.titulo}>Estilos</h2>
            <Hijo />
        </div>
    )
}

export default Estilos
