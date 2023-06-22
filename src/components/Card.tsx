import { PropsWithChildren } from "react"
import "./Card.css"

interface CardProps extends PropsWithChildren {
    contador: number
    setContador: React.Dispatch<React.SetStateAction<number>>
}

const Card = ({
    contador,
    setContador,
    children
}: CardProps) => {
    return (
        <div className="card">
            {children}
            <button onClick={() => setContador(prev => prev + 1)}>{contador}</button>
        </div>
    )
}

export default Card
