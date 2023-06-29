import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import styles from "./Formularios.module.scss"

const validationSchema = yup.object({
    username: yup
        .string()
        .required("El campo username es un campo obligatorio")
        .min(4, "El nombre de usuario debería tener mínimo 4 caracteres")
        .max(15, "El nombre de usuario debería tener máximo 15 caracteres"),
    age: yup.number().required().integer().min(18),
    password: yup.string().required(),
    date: yup.date().max(new Date()),
})

const FormularioFormik = () => {
    return (
        <div className={styles.Formularios}>
            <h2>Formularios con Formik</h2>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    age: "",
                    date: new Date(),
                }}
                onSubmit={(values, options) => {
                    console.log(values, options)
                }}
                validationSchema={validationSchema}
                validate={(values) => {
                    const errores: { username?: string; age?: string } = {}

                    // if (values.username.length < 4) {
                    //     errores.username =
                    //         "El nombre debe tener mínimo 4 caracteres"
                    // }

                    // if (Number(values.age) < 18) {
                    //     errores.age = "Debes ser mayor de edad"
                    // }

                    return errores
                }}
                validateOnBlur
                validateOnChange={true}
            >
                <Form>
                    <Field
                        type="text"
                        name="username"
                        placeholder="Tu username"
                    />
                    <ErrorMessage name="username" />
                    <Field type="number" name="age" placeholder="Tu age" />
                    <ErrorMessage name="age" />
                    <Field
                        type="password"
                        name="password"
                        placeholder="Tu password"
                    />
                    <ErrorMessage name="password" />
                    <Field type="date" name="date" placeholder="Tu date" />
                    <ErrorMessage name="date" />
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormularioFormik
