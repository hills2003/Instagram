import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from "./Main";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/instagram" component={Main} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

