import React, { Fragment, useState } from "react";

const Lista = () => {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const [tiempo, setTiempo] = useState(1);

  const Aumentar = () => {
    setNumeros([...numeros, tiempo + 6]);
    setTiempo(tiempo + 1);
  };

  return (
    <Fragment>
      <ul>
        <button onClick={Aumentar}>Aumentar</button>
        <p>Tiempo es {tiempo}</p>
        {numeros.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Lista;
