import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmpleado extends Component {

  constructor(props) {
    super(props)

    // Configurar funciones
    this.onChangeEmpleadoName = this.onChangeEmpleadoName.bind(this);
    this.onChangeEmpleadoEmail = this.onChangeEmpleadoEmail.bind(this);
    this.onChangeEmpleadoRollno = this.onChangeEmpleadoRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Configurar estados
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  onChangeEmpleadoName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeEmpleadoEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeEmpleadoRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const empleadoObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };
    axios.post('http://localhost:4000/students/create-empleado', empleadoObject)
      .then(res => console.log(res.data));
    this.setState({ name: '', email: '', rollno: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmpleadoName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmpleadoEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeEmpleadoRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Crear Empleado
        </Button>
      </Form>
    </div>);
  }
}