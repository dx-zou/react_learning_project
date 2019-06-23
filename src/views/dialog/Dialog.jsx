import React, { Component } from "react";
import FancyBorder from "./FancyBorder";
import { Button } from "antd";
export default class Dialog extends Component {
  render() {
    return (
      <div className="Dialog-container">
        <FancyBorder>
          <p>确定删除吗？</p>
          <Button type="primary">确定</Button>
        </FancyBorder>
      </div>
    );
  }
}
