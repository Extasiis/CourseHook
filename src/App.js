import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Menu from "./components/Menu";
import Contador from "./components/Contador";
import Lista from "./components/Lista";
import Home from "./components/Home";
import Form from "./components/Form";
import CRUD from './components/CRUD'

function App() {
  return (
    <Router>
      <Menu />
      <div className="container py-4">
        <Switch>
          <Route path="/contador" component={Contador} />
          <Route path="/lista" component={Lista} />
          <Route path="/formulario" component={Form} />
          <Route path="/crud" component={CRUD} />
          <Route exact path="/home" component={Home} />
          <Redirect path="/" to="/home" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
