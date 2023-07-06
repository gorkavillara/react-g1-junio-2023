import { createSlice } from "@reduxjs/toolkit"

const contadorSlice = createSlice({
    name: "contador",
    initialState: {
        nombre: "contador",
        valor: 10
    },
    // initialState: 0,
    reducers: {
        // incrementa: (state) => ({ ...state, valor: state.valor + 1})
        incrementa: (state) => {
            state.valor += 1
        },
        // incrementa: (state) => state++
        incrementaX: (state, payload) => {
            console.log(payload)
            state.valor += payload.payload
        }
    }
})

export const { incrementa, incrementaX } = contadorSlice.actions

export default contadorSlice.reducer