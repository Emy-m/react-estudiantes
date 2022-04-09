import React, { Component } from 'react'

export default class Estudiante extends Component {
    render() {
        const { estudiante, index } = this.props
        
        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.apellido}</td>
                <td>{estudiante.nota}</td>
            </tr>
        )
    }
}
