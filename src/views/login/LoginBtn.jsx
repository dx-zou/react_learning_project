import React from "React";
import { Button } from "antd";
export default class LoginBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeStatus = () => {
    this.props.onChangeLogStatus();
  };
  render() {
    let value = this.props.isLoggedIn ? "退出" : "登录";
    return (
      <Button onClick={this.changeStatus} className="Login-btn">
        {value}
      </Button>
    );
  }
}
