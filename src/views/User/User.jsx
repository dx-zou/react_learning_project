import React from "react"
import PropTypes from 'prop-types'
//第二种创建组件的方式
class User extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '这是组件内部的私有数据，可读可写，相当于vue中data的数据'
    }
  }
  static propTypes = {
    name: PropTypes.string, // 规定属性的类型
    age: PropTypes.number
    // initAge: PropTypes.number.isRequired // 规定属性的类型，且规定为必传字段
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