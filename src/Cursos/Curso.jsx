import React, { Component } from 'react'

export default class Curso extends Component {
    render() {
        const { curso, index } = this.props
        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{curso.nombre}</td>
                <td>{curso.nota}</td>
                <td>{curso.horasSemanales}</td>
            </tr>
        )
    }
}