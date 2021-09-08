import React from "react";

export default class Opciones extends React.Component {
    render() {
        const { actualizarOpciones, opcionActual } = this.props
        return (
            <div className="opciones">
                <div className="opcion">
                    <button id="A" className="botones" onClick={(event) => actualizarOpciones(event.target.id)}>A</button>
                    <h2>{opcionActual.opciones.a}</h2>
                </div>
                <div className="opcion">
                    <button id="B" className="botones" onClick={(event) => actualizarOpciones(event.target.id)}>B</button>
                    <h2>{opcionActual.opciones.b}</h2>
                </div>
            </div>
        )
    }
}