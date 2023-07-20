import { render, screen, fireEvent } from "@testing-library/react"
import Contador from "./Contador"
it("Renders correctly", () => {
    // Renderizar el componente Contador
    render(<Contador />)
})

it("Title is correct", () => {
    render(<Contador />)
    const title = screen.getByText("Contador")

    expect(title.tagName).toBe("H2")
    // expect(title).toEqual(render(<h2>Contador</h2>))
})

it("Increment adds a value", () => {
    render(<Contador />)
    const value = screen.getByTitle("contador-value")
    expect(value.innerHTML).toBe("0")

    const button = screen.getByText("Incrementa")

    fireEvent.click(button)
    expect(value.innerHTML).toBe("2")
})
