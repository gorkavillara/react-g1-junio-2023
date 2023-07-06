import React from "react"
import Modal from "./Modal"

const Bootstrap = () => {
    return (
        <div className="container">
            <p className="h3 text-bg-primary p-3">Estoy utilizando Bootstrap</p>
            <span className="badge text-bg-primary">Primary</span>
            <button type="button" className="btn btn-success">Success</button>
            <div className="row">
                <div className="col-md-6 col-xl-3">Columna 1</div>
                <div className="col-6 col-md-2">Columna 2</div>
                <div className="col-6 col-md-4">Columna 3</div>
            </div>

            <Modal />
        </div>
    )
}

export default Bootstrap
