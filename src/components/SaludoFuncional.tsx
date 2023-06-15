// type Props = {
//     nombre: string
// }

interface IProps {
    nombre: string
    edad?: number
    tipo?: boolean
    isDeveloper?: boolean
}

const SaludoFuncional = ({ nombre }: IProps) => {
    return <div>Hola {nombre}</div>
}

export default SaludoFuncional
