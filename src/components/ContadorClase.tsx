import { Component } from "react"

export default class ContadorClase extends Component<{ valorInicial: number }> {
    state = {
        contador: this.props.valorInicial,
        nombre: "Gorka"
    }

    // constructor(props) {
    //     super(props)
    //     this.incrementaContador = this.incrementaContador.bind(this)
    // }

    incrementaContador = () => {
        this.setState({
            ...this.state,
            contador: this.state.contador + 1
        })
        console.log(this.state)
    }

    render() {
        const { contador, nombre } = this.state
        return (
            <>
                <p>{nombre}</p>
                <p>Valor contador: {contador}</p>
                <button onClick={this.incrementaContador}>Incrementa</button>
            </>
        )
    }
}
