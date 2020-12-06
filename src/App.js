import React from "react";
import "./App.css";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Othoni from "./Othoni";




function App() {
  return (
    <Router>
      
      <Switch>
       
        <Route path="/" exact component={Home}></Route>
        <Route path="/othoni" component={Othoni}></Route>
      </Switch>
    </Router>
  );
}

export default App;