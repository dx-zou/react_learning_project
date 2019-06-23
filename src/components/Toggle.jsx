import React, { Component } from "react";
import { Button } from "antd";
import logo from "../logo.svg";
export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {
      isOn: true
    };
  }
  handleToggle = () => {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  };
  render() {
    let logoClass = this.state.isOn ? "App-logo logo-rotate" : "App-logo";
    return (
      <div>
        <img src={logo} className={logoClass} alt="logo" />
        <Button type="primary" onClick={this.handleToggle}>
          {this.state.isOn ? "OFF" : "ON"}
        </Button>
      </div>
    );
  }
}
