import React, { Fragment} from "react";

import Part1 from "./Part1";
import Part2 from "./Part2";
import HookForm from "./HookForm";

const Form = (props) => {
  return (
    <Fragment>
      <Part1 parte="Parte-1" />
      <Part2 parte="Parte-2" />
      <HookForm name="Formulario con Form Hook" />
    </Fragment>
  );
};

export default Form;
