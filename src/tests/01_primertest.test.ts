import { describe, expect, test, it, beforeEach } from "vitest"

const suma = (a: number, b: number) => a + b

const funcionAsincrona = () => new Promise((resolve) => setTimeout(() => resolve("Resuelto!"), 2000))

const lanzaErrorSiNegativo = (numero: number) => {
    if (numero < 0) throw new Error("Error lanzado")
    return true
}

it("Función asíncrona lanzada", async () => {
    const respuesta = await funcionAsincrona()
    expect(respuesta).toBe("Resuelto!")
})

describe("Función suma", () => {
    test("Primer test", () => {
        console.log("Estoy realizando mi primer test")
        const miResultado = suma(1, 2)
        expect(miResultado).toBe(3)
    })
    
    test("Suma números negativos", () => {
        expect(suma(-5, -10)).toBeLessThan(0)
    })
})

it("Adds negative numbers correctly", () => {
    expect(suma(-5, -10)).toBe(-15)
})

it("Objeto igual a otro", () => {
    const miCoche = { marca: "Audi", modelo: "A5" }
    const miOtroCoche = { marca: "Audi", modelo: "A5" }

    expect(miCoche).toStrictEqual(miOtroCoche)
    expect(miCoche).not.toBe(miOtroCoche)
})

it("Lanza error si el número es negativo", () => {
    expect(() => lanzaErrorSiNegativo(-10)).toThrowError()
})

describe("Preparando entorno", () => {
    const alumno = {
        nombre: "David",
        nota: 2
    }

    beforeEach(() => {
        alumno.nota = 2
    })

    it("Alumno está suspendido", () => {
        expect(alumno.nota).toBeLessThan(5)
    })

    it("Alumno si aprueba, aprueba", () => {
        alumno.nota = 9
        expect(alumno.nota).not.toBeLessThan(5)
    })

    it("Alumno está suspendido", () => {
        expect(alumno.nota).toBeLessThan(5)
    })
})