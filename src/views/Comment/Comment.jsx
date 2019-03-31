import React from "react";
import Item from "./Item";
// import '../css/Comment.css'
//创建一个有状态的组件
class CommentLsit extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        {id: 1, name: '小王', content: '哈哈哈哈哈哈'},
        {id: 2, name: '小王', content: '哈哈哈哈哈哈'},
        {id: 3, name: '小王', content: '哈哈哈哈哈哈'},
        {id: 4, name: '小王', content: '哈哈哈哈哈哈'},
        {id: 5, name: '小王', content: '哈哈哈哈哈哈'},
      ]
    }
  }
  render() {
    return (
      <div className="Comment-container">
        <h1 className="title">评论组件</h1>
        {this.state.list.map(item => <Item {...item} key={item.id}></Item>)}
      </div>
    )
  }
}
export default CommentLsit