import React, { Fragment } from "react";
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
        <div className="container">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand" to="/">
          Hooks
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0 mx-">
          <li className="nav-item">
                <Link to="/contador" className="nav-link">Contador</Link>
            </li>
            <li className="nav-item">
                <Link to="/lista" className="nav-link">Listas</Link>
            </li>
            <li className="nav-item">
              <Link to="/formulario" className="nav-link" >Formulario</Link>
            </li>
            <li className="nav-item">
              <Link to="/crud" className="nav-link" >CRUD</Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Menu;
