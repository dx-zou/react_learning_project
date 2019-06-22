import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./views/class-extends/class";
import "./views/class-extends/class-extend";
import Comment from "./views/Comment/Comment";
import InputBox from "./components/MyInput";
import { HashRouter, Route, Link, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>This is my first React project</h1>
          </header>
          <div className="Content">
            <div className="content-header">
              <Link to="/">首页--</Link>
              <Link to="/inputBox">输入框--</Link>
              <Link to="/comment">评论--</Link>
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

export default App;
