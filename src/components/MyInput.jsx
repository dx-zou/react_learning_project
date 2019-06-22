import React from "react";
import { Input, Button } from "antd";
export default class MyInput extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      msg: "what can I do for you?",
      list: []
    };
  }

  render() {
    return (
      <div className="Input-container">
        <Input
          size="large"
          ref={this.inputRef}
          value={this.state.msg}
          style={{ width: "50%" }}
          onChange={e => {
            this.changeInputValue(e);
          }}
          onPressEnter={e => this.showListItem(e)}
          placeholder="请输入内容"
        />
        <Button
          type="primary"
          size="large"
          className="my-button"
          onClick={() => this.pushToList()}
        >
          添加
        </Button>
        {this.state.list.map((item, index) => {
          return (
            <ul>
              <li key={index + item} onClick={() => this.removeItem(index)}>
                {item}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
  showListItem(e) {
    this.setState({
      list: [...this.state.list, e.target.value]
    });
  }
  pushToList() {
    this.setState({
      list: [...this.state.list, this.state.msg]
    });
  }
  changeInputValue(e) {
    this.setState({
      msg: e.target.value
    });
  }
  removeItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
