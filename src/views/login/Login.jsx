import React, { Component } from "react";
import LoginBtn from "./LoginBtn";
import Greeting from "./Greeting";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  changeLogStatus = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };
  render() {
    let isLoggedIn = this.state.isLoggedIn;
    return (
      <div className="Login-box">
        <Greeting isLoggedIn={isLoggedIn} />
        <LoginBtn
          isLoggedIn={isLoggedIn}
          onChangeLogStatus={this.changeLogStatus}
        />
      </div>
    );
  }
}
