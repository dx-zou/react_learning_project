import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home'
import './views/class-extends/class'
import './views/class-extends/class-extend'
import User from './views/User/User'
import Comment from './views/Comment/Comment'
import InputBox from './components/Input'
import About from './components/About'
import {HashRouter,Route,Link,Redirect} from 'react-router-dom'
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
            <Link to="/">首页</Link>
            ----
            <Link to="/about/250">about</Link>
            <Route exact path="/" render={() => <Redirect to="/about"></Redirect>}></Route>
            <Route exact path="/about/:id" component={About}></Route>
            <Route exact path="/about" component={About}></Route>
            <Comment></Comment>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
