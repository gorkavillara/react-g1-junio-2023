export const contadorInitialState = {
    valor: 0,
}

type ContadorAction = "incrementa" | "incrementaCinco"

const contadorReducer = (
    state: { valor: number },
    action: { payload?: any, type: ContadorAction }
) => {
    if (action.type === "incrementa") return { valor: state.valor + 1 }
    if (action.type === "incrementaCinco") return { valor: state.valor + 5 }
    return { valor: state.valor }
}

export default contadorReducer
