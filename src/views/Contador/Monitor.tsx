import { memo } from "react"

// const calculoSuperGrande = () => {
//     let suma = 0
//     for (let i = 0; i < 123456789; i++) {
//         suma++
//     }
//     return suma
// }

const BaseMonitor = ({ contador }: { contador: number }) => {
    // const resultado = calculoSuperGrande()
    return (
        <div>
            El valor del contador es{" "}
            <span title="contador-value">{contador}</span>
        </div>
    )
}

// const Monitor = BaseMonitor
const Monitor = memo(BaseMonitor)

export default Monitor
