import React, { Component } from "react";
import { Button } from "antd";
// import Toolbar from "./Toolbar";
const ThemeContext = React.createContext("light");
export default class MyContext extends Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

class ThemeButton extends Component {
  static contextType = ThemeContext;
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <div>
        <Button>切换主题</Button>
      </div>
    );
  }
}
