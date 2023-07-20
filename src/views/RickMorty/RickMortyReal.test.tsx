import { render, screen } from "@testing-library/react"
import RickMorty from "./RickMorty"

describe("Not mocking", () => {
    it("Gets a character", async () => {
        render(<RickMorty />)
        const characterName = await screen.findByTitle("character-name")

        expect(characterName.innerHTML).toBe("Morty Smith")
    })
})