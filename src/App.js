import React, { Component } from "react";
import "./App.scss";
import "./views/class-extends/class";
import "./views/class-extends/class-extend";
import Comment from "./views/Comment/Comment";
import InputBox from "./components/MyInput";
import Clock from "./components/Clock";
import Toggle from "./components/Toggle";
import Login from "./views/login/Login";
import { HashRouter, Route, Link, Redirect } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-sidebar">
            <Toggle />
            <h1>Learning React</h1>
            <Clock />
          </header>
          <div className="App-main">
            <div className="App-header">
              <div className="App-nav">
                <Link to="/">首页--</Link>
                <Link to="/inputBox">输入框--</Link>
                <Link to="/comment">评论--</Link>
              </div>
              <Login />
            </div>
            <Route exact path="/" render={() => <Redirect to="/inputBox" />} />
            <Route exact path="/comment" component={Comment} />
            <Route exact path="/inputBox" component={InputBox} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
