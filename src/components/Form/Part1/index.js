import React, { Fragment, useState } from "react";

const Part1 = (props) => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleInputChage = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log(datos);
  };
  return (
    <Fragment>
      <h2>Formulario {props.parte}</h2>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese Nombre"
            className="form-control mb-2"
            onChange={handleInputChage}
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="apellido"
            placeholder="Ingrese Apellido"
            className="form-control mb-2"
            onChange={handleInputChage}
          />
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary btn-block" type="submit">
            Enviar
          </button>
        </div>
      </form>
      <h2>
        {datos.nombre} - {datos.apellido}
      </h2>
    </Fragment>
  );
};

export default Part1;
