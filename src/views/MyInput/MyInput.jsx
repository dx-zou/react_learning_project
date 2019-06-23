import React from "react";
import { Input, Button, message } from "antd";
export default class MyInput extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      msg: "what can I do for you?",
      list: []
    };
  }
  showListItem(e) {
    if (!e.target.value) {
      return message.warning("空空如也。。。");
    }
    this.setState({
      list: [...this.state.list, e.target.value]
    });
  }
  pushToList() {
    if (!this.state.msg) {
      return message.warning("空空如也。。。");
    }
    this.setState({
      list: [...this.state.list, this.state.msg]
    });
  }
  // 输入框值发生改变
  changeInputValue(e) {
    // 去除字符串两端的空格
    let val = e.target.value.replace(/^\s*|\s*$/g, "");
    this.setState({
      msg: val
    });
  }

  removeItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  componentDidMount() {
    this.inputRef.current.focus();
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
        <h2>{this.state.msg}</h2>
        <ul className="list-box">
          {this.state.list.map((item, index) => {
            return (
              <li key={index + item} onClick={() => this.removeItem(index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
