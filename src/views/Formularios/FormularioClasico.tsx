import { useState } from "react"
import styles from "./Formularios.module.scss"

interface IFormData {
    username: string
    password: string
}

const FormularioClasico = () => {
    const [formData, setFormData] = useState<IFormData>({
        username: "gorka",
        password: "",
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("enviando formulario...")
        console.log({ datos: formData })
    }
    return (
        <div className={styles.Formularios}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Tu nombre de usuario"
                    value={formData.username}
                    onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                    }
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Tu contraseña"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                    }
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default FormularioClasico
