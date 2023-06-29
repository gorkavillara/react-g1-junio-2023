import { useState } from "react"
import { Alumno, alumnos } from "../../assets"

const Student = ({
    alumno,
    incrementScore,
}: {
    alumno: Alumno
    incrementScore: (id: number) => void
}) => (
    <p>
        {alumno.nombre} - {alumno.email} - {alumno.nota.toFixed(2)} -{" "}
        <button
            style={{ padding: "0.1rem" }}
            onClick={() => incrementScore(alumno.id)}
        >
            +
        </button>
    </p>
)

const Alumnos = () => {
    const [students, setStudents] = useState(alumnos)

    const incrementScore = (idAlumno: number) =>
        setStudents((prevStudents) =>
            prevStudents.map((it) =>
                it.id === idAlumno ? { ...it, nota: it.nota + 0.1 } : { ...it }
            )
        )
    // console.table(alumnos)
    const elementosAlumnos = students.sort((a, b) => a.nota > b.nota ? -1 : 1).map((alumno) => (
        <Student
            key={alumno.id}
            alumno={alumno}
            incrementScore={incrementScore}
        />
    ))

    // console.log(elementosAlumnos)
    return (
        <div>
            <h2>Alumnos React</h2>
            {elementosAlumnos}
        </div>
    )
}

export default Alumnos
