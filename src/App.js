import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Women from "./components/Women";
import Men from "./components/Men";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Kids from "./components/Kids";
import Sports from "./components/Sports";
import My404Component from "./components/My404Component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <Switch>
            <Route path="/women" exact component={Women}></Route>
            <Route path="/men" exact component={Men}></Route>
            <Route path="/kids" exact component={Kids}></Route>
            <Route path="/sports" exact component={Sports}></Route>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="*" exact component={My404Component} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
