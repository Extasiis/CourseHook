import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const HookForm = (props) => {
  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Fragment>
      <h2>{props.name}</h2>
      <form className="row" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3 mb-2">
          <input
            type="text"
            placeholder="Ingrese nombre de usuario"
            name="usario"
            className="form-control"
            id=""
            ref={register({
              required: {
                value: true,
                message: "Nombre es Requerido",
              },
              maxLength: {
                value: 8,
                message: "No mas de 8 caracteres!",
              },
              minLength: {
                value: 4,
                message: "no menos de 4",
              },
            })}
          />
          <span className="text-danger text-small d-block mb-2">
          {errors?.usario?.message}
        </span>
        </div>
        
        <div className="col-md-3 mb-2">
          <input
            type="password"
            placeholder="Ingrese tu contraseña"
            name="password"
            className="form-control"
            id=""
            ref={register({
              required: {
                value: true,
                message: "No olvides ingresar tu contraseña",
              },
              maxLength: {
                value: 8,
                message: "No mas de 8 caracteres",
              },
              minLength: {
                value: 4,
                message: "No menos de 4 caracteres",
              },
            })}
          />
          <span className="text-danger text-small d-block mb-2">
          {errors?.password?.message}
        </span>
        </div>
        <div className="col-md-3 mb-2">
        <button className="btn btn-primary btn-block" type="submit">
            Enviar
          </button>
          </div>
      </form>

    </Fragment>
  );
};

export default HookForm;
