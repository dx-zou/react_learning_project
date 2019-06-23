import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./views/Sidebar";
import AppMain from "./views/AppMain";
import "./styles/App.scss";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <AppMain />
        </div>
      </Router>
    );
  }
}
