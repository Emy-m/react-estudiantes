import React, { Component } from 'react'
import Curso from './Curso'

export default class Cursos extends Component {
    render() {
        const { estudiante, cerrar, agregarCurso } = this.props
        const renderCursos = estudiante.cursos.sort((a, b) => {
            return a.nota > b.nota ? 1 : a.nota < b.nota ? 1 : 0
        }).map((curso, index) => {
            return (
                <Curso curso={curso} index={index} key={index} />
            )
        })

        function handleSubmit(event) {
            event.preventDefault();
            let nombre = event.target[0].value
            let horas = event.target[1].value
            agregarCurso(estudiante, nombre, horas)
        }

        return (
            <div className="table-responsive">
                <h3>Cursos de {estudiante.nombre + " " + estudiante.apellido}</h3>
                <table className="table table-dark" style={{width:100 + "%"}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Nota</th>
                            <th scope="col">Horas Semanales</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCursos}
                    </tbody>
                </table>
                <form style={{margin: '0px auto', width: '50%'}} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre-curso" className="form-label">Nombre del Curso</label>
                        <input type="text" className="form-control" id="nombre-curso" name="nombre-curso"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="horas-semanales" className="form-label">Horas Semanales</label>
                        <input type="number" className="form-control" id="horas-semanales" name='horas-semanales'/>
                    </div>
                    <button type="submit" className="btn btn-primary me-3">Agregar Curso</button>
                    <button className='btn btn-secondary' onClick={() => {cerrar(null)}}>Cerrar</button>
                </form>
            </div>
        )
  }
}
