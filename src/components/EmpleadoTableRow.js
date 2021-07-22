import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmpleadoTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmpleado = this.deleteEmpleado.bind(this);
    }

    deleteEmpleado() {
        axios.delete('http://localhost:4000/students/delete-empleado/' + this.props.obj._id)
            .then((res) => {
                console.log('Empleado eliminado correctamente!')
            }).catch((error) => {
                console.log(error)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td>
                    <Link className="edit-link" to={"/edit-empleado/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteEmpleado} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}