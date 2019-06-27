import React, { Component } from "react";
import { Button } from "antd";
export default class ThemeButton extends Component {
  componentDidMount() {
    let value = this.context;
    console.log(value);
  }

  render() {
    return (
      <div>
        <Button>切换主题</Button>
      </div>
    );
  }
}
