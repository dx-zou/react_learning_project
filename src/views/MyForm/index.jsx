import React, { Component } from "react";
export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "mango"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleSubmit(e) {
    alert("您选择的口味是" + this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <div className="My-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            选择您喜欢的奶茶口味：
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">葡萄柚</option>
              <option value="lime">柠檬</option>
              <option value="coconut">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
}
