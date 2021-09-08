import React from "react";

export default class Historial extends React.Component {
    render() {
        const { historial, opcionAnterior } = this.props
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {opcionAnterior}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {historial.map((historia, index) => (
                        <li key={String(index)}>{historia}</li>
                    ))}
                </ul>
            </div>)
    }
}