import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home'
import './views/class-extends/class'
import './views/class-extends/class-extend'
import User from './views/User/User'
import Comment from './views/Comment/Comment'
import InputBox from './components/Input'
const dog = {
  name: '大黄',
  age: 3,
  eat: '肉'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>This is my first React project</h1>
        </header>
        <div className="Content">
          {/* 注释的方法 */}
          下面是引入的组件
          <p>1.使用构造函数创建组件</p>
          <Home {...dog}></Home>
          <p>2.使用class类继承创建组件</p>
          <User {...dog}></User>
          <Comment></Comment>
          <InputBox></InputBox>
        </div>
      </div>
    );
  }
}

export default App;
