import React, { Component } from "react";

export default class ReactJsx extends Component {
  // React 组件也能够返回存储在数组中的一组元素：
  render() {
    return [
      <li key={"fdfdf1"}>1</li>,
      <li key={"fdfdf2"}>2</li>,
      <li key={"fdfdf3"}>3</li>,
      <li key={"fdfdf4"}>4</li>
    ];
  }
}
