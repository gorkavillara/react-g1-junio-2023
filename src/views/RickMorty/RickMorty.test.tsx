import axios from "axios"
import { render, screen } from "@testing-library/react"
import RickMorty from "./RickMorty"
import { vi } from "vitest"

describe("Mocking axios", () => {
    beforeEach(() => {
        vi.mock("axios")
        axios.get = vi.fn().mockResolvedValue({
            data: { name: "Gorka Villar" },
        })
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    it("Gets a custom character", async () => {
        render(<RickMorty />)
        const characterName = await screen.findByTitle("character-name")

        expect(characterName.innerHTML).toBe("Gorka Villar")
    })
})

describe("Mocking axios Brais", () => {
    beforeEach(() => {
        vi.mock("axios")
        axios.get = vi.fn().mockResolvedValue({
            data: { name: "Brais Gabin" },
        })
    })

    afterEach(() => {
        vi.clearAllMocks()
    })

    it("Gets a custom character", async () => {
        render(<RickMorty />)
        const characterName = await screen.findByTitle("character-name")

        expect(characterName.innerHTML).toBe("Brais Gabin")
    })
})