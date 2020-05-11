import React, { Fragment, useState } from "react";

const Part2 = (props) => {
  const [fruta, setFruta] = useState("");
  const [description, setDescription] = useState("");
  const [lista, setLista] = useState([]);

  const saveData = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      console.log("esta vacio frutas");
      return;
    }
    if (!description.trim()) {
      console.log("estas vacio la description");
      return;
    }

    console.log(`Procesando ${fruta}  ${description}`);

    setLista([
      ...lista,
      { nombreFruta: fruta, nombreDescription: description },
    ]);

    e.target.reset();
    setFruta("");
    setDescription("");
  };

  const frutaSave = (e) => {
    setFruta(e.target.value);
  };

  const descriptionSave = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Fragment>
      <h2 className="mt-4">Formulario {props.parte}</h2>
      <form className="row" onSubmit={saveData}>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Ingrese Fruta"
            className="form-control mb-2"
            onChange={frutaSave}
            name=""
            id=""
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Ingrese Descriptio"
            className="form-control mb-2"
            onChange={descriptionSave}
            name=""
            id=""
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block col-md-3">
          Save
        </button>
      </form>
      <ul>
        {lista.map((item, index) => (
          <li className="list" key={index}>
            {item.nombreFruta} - {item.nombreDescription}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Part2;
