import axios from "axios"
import { RMPersonaje } from "../models"

const token = "uf29j23fj2jffo298fj2f-2ffj2o3f2-f28fj2jf-d92fj"

export const rickMortyInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    method: "GET"
})

export const clientesInstance = axios.create({
    baseURL: "https://miservicio.com/api",
    headers: {
        Authorization: "cualquiercosa"
    },
    method: "POST",
    transformResponse: (response: RMPersonaje) => {
        return { id: response.id, success: true }
    },
    transformRequest: (request) => {
        return { ...request, success: true }
    }
})