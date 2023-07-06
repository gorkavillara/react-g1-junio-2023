import { useState, useEffect } from "react"

interface Cliente {
    nombre: string
    email: string
}

const useClientes = () => {
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        // llamada a api
        // setClientes(respuesta)
    }, [])

    const nuevoCliente = (cliente: Cliente) => setClientes(prev => [...prev, cliente])

    return { clientes, nuevoCliente }
}

export default useClientes
