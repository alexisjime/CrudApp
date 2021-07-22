
import React from "react";
import "./footer.css"
const footer =() => {
    return(
    <div className="main-footer">
    <div className="container">
    <div className="row">
          {/* Column1 */}
          <div className="col">
              <h4>Telefono</h4>
              <ul className="list-unstyled">
              <li>934-129-56-28</li>
              </ul>
          </div>
          {/* Column2 */}
          <div className="col">
              <h4>Correo</h4>
              <ul className="list-unstyled">
              <li>cristobaljim21@gmail.com</li>
              <li>alexisjim21@hotmail.com</li>
              </ul>
          </div>
          {/* Column3 */}
          <div className="col">
              <h4>Redes Sociales</h4>
              <ul className="list-unstyled">
              <li>https://es-la.facebook.com/</li>
              </ul>
          </div>


    </div>
    <div className="row">
    <p classname="col-sm">
    &copy; Derechos reservados 2021 | Desarrollado Por Cristobal Alexis
    </p>
    </div>
    </div>  
    </div>
)
}

export default footer;