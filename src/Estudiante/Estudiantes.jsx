import React, { Component } from 'react'
import Estudiante from './Estudiante'

const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        nota: 10
    },
    {
        nombre: 'Pedro',
        apellido: 'Barrera',
        nota: 5
    },
    {
        nombre: 'Maria',
        apellido: 'Alvarez',
        nota: 8
    },
    {
        nombre: 'Jose',
        apellido: 'Gonzalez',
        nota: 9
    },
    {
        nombre: 'Ana',
        apellido: 'Garcia',
        nota: 7
    },
    {
        nombre: 'Carlos',
        apellido: 'Martinez',
        nota: 3
    },
]

export default class Estudiantes extends Component {
    render() {
        const renderEstudiantes = estudiantes.sort((a, b) => {
            return a.nota > b.nota ? 1 : a.nota < b.nota ? 1 : 0
        }).map((estudiante, index) => {
            return (
                <Estudiante estudiante={estudiante} index={index} key={index} />
            )
        })

        return (
            <div style={{width:50 + "%"}}>
                <h3>Estudiantes</h3>
                <div className="table-responsive">
                    <table className="table table-dark" style={{width:100 + "%"}}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Nota</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderEstudiantes}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
