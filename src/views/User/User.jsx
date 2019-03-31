import React from "react";
//第二种创建组件的方式
class User extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '这是组件内部的私有数据，可读可写，相当于vue中data的数据'
    }
  }
  render() {
    return (
      <div className="user-container">
        <h3>this is user Component</h3>
        <p>{this.props.name}-----{this.props.age}</p>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}
export default User