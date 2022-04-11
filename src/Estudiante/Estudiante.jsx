import React, { Component } from 'react'

export default class Estudiante extends Component {
    render() {
        const { estudiante, index, mostrarCursos } = this.props

        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.apellido}</td>
                <td>{estudiante.promedio}</td>
                <td><button className='btn btn-secondary' onClick={() => {mostrarCursos(estudiante)}}>Gestionar Cursos</button></td>
            </tr>
        )
    }
}
