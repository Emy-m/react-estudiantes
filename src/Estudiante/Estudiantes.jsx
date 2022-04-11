import React, { Component } from 'react'
import Estudiante from './Estudiante'
import Cursos from '../Cursos/Cursos'

let listaEstudiantes = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        promedio: 10,
        cursos: [{
            nombre: 'Programacion',
            nota: 10,
            horasSemanales: 10
        }]
    },
    {
        id: 2,
        nombre: 'Pedro',
        apellido: 'Barrera',
        promedio: 5,
        cursos: [{
            nombre: 'Matematicas',
            nota: 5,
            horasSemanales: 5
        },
        {
            nombre: 'Programacion',
            nota: 5,
            horasSemanales: 10
        }]
    },
    {
        id: 3,
        nombre: 'Maria',
        apellido: 'Alvarez',
        promedio: 8,
        cursos: [{
            nombre: 'Ciencias',
            nota: 8,
            horasSemanales: 10
        },
        {
            nombre: 'Programacion',
            nota: 8,
            horasSemanales: 10
        }]
    },
    {
        id: 4,
        nombre: 'Jose',
        apellido: 'Gonzalez',
        promedio: 9,
        cursos: [{
            nombre: 'Derecho',
            nota: 10,
            horasSemanales: 10
        },
        {
            nombre: 'Tecnologia',
            nota: 8,
            horasSemanales: 8
        }]
    },
    {
        id: 5,
        nombre: 'Ana',
        apellido: 'Garcia',
        promedio: 7,
        cursos: [{
            nombre: 'Deportes',
            nota: 9,
            horasSemanales: 4
        },
        {
            nombre: 'Reporteria',
            nota: 7,
            horasSemanales: 4
        },
        {
            nombre: 'Moda',
            nota: 5,
            horasSemanales: 4
        }]
    },
    {
        id: 6,
        nombre: 'Carlos',
        apellido: 'Martinez',
        promedio: 3,
        cursos: [{
            nombre: 'Gimnasia',
            nota: 4,
            horasSemanales: 4
        },
        {
            nombre: 'Kinesiologia',
            nota: 3,
            horasSemanales: 10
        },
        {
            nombre: 'Cocteleria',
            nota: 2,
            horasSemanales: 4
        }]
    },
    {
        id: 7,
        nombre: 'Paola',
        apellido: 'Torres',
        promedio: '-',
        cursos: [{
            nombre: 'Ciencias',
            nota: '-',
            horasSemanales: '10'
        }]
    }
]

export default class Estudiantes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estudiantes: listaEstudiantes,
            estudianteSeleccionado: null
        }
    }

    render() {
        const { estudiantes, estudianteSeleccionado } = this.state
        const mostrarCursos = (estudiante) => {
            this.setState({estudianteSeleccionado: estudiante})
        }

        const agregarCurso = (estudiante, nombre, horas) => {
            estudiantes.find(est => est.id === estudiante.id).cursos.push({
                nombre: nombre,
                nota: '-',
                horasSemanales: horas
            })
            this.setState({estudiantes: estudiantes})
        }

        const renderEstudiantes = estudiantes.sort((a, b) => {
            return a.promedio > b.promedio ? 1 : a.promedio < b.promedio ? 1 : 0
        }).map((estudiante, index) => {
            return (
                <Estudiante estudiante={estudiante} index={index} mostrarCursos={() => {mostrarCursos(estudiante)}} key={index} />
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
                                <th scope="col">Promedio</th>
                                <th scope="col">Cursos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderEstudiantes}
                        </tbody>
                    </table>
                </div>
                {estudianteSeleccionado ? <Cursos estudiante={estudianteSeleccionado} cerrar={mostrarCursos} agregarCurso={agregarCurso} /> : null}
            </div>
        )
    }
}
