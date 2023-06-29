export interface Alumno {
    id: number
    nombre: string
    email: string
    nota: number
}

export const alumnos: Alumno[] = [{
    id: 0,
    nombre: "Bruno Sanz",
    email: "bruno@sanz.com",
    nota: 0
}, {
    id: 1,
    nombre: "David Gonzalo",
    email: "david@gonzalo.com",
    nota: 5
}, {
    id: 2,
    nombre: "Diego Morard",
    email: "diego@morard.com",
    nota: 9.99
}, {
    id: 3,
    nombre: "D. Enrique Romero",
    email: "enrique@romero.com",
    nota: 2.99
}]