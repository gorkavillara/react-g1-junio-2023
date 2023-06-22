import { Component } from "react"

export default class CicloVidaClase extends Component<{ contador: number }> {
    state = {
        nombre: "",
        apellidos: "",
        email: ""
    }
    componentDidMount(): void {
        console.log("El componente se ha montado")
        // Se suelen hacer llamadas a apis -> Modificar el estado
    }
    shouldComponentUpdate(nextProps: Readonly<{ contador: number }>): boolean {
        console.log(nextProps.contador)
        return nextProps.contador % 2 === 0
    }
    componentDidUpdate(): void {
        console.log("El componente se ha actualizado")
    }

    componentWillUnmount(): void {
        console.log("El componente se va a desmontar")
        // Eliminar eventListeners
    }
    render() {
        const { contador } = this.props
        return <div>Contador: {contador}</div>
    }
}
