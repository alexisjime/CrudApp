import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./components/footer";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateEmpleado from "./components/create-empleado.component";
import EditEmpleado from "./components/edit-empleado.component";
import EmpleadoList from "./components/empleado-list.component";

function App() {
  return (<Router>
    <div className="page-container">
    <div>

   
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create-empleado"} className="nav-link">
                Bienvenidos a AppEmpleado
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-empleado"} className="nav-link">
                  Crear Empleado
                </Link>
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/empleado-list"} className="nav-link">
                  Empleados Agregados
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateEmpleado} />
                <Route path="/create-empleado" component={CreateEmpleado} />
                <Route path="/edit-empleado/:id" component={EditEmpleado} />
                <Route path="/empleado-list" component={EmpleadoList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <Footer/>
    </div>
  </Router>);
}

export default App;