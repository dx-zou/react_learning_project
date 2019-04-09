import React from 'react'
import '../css/Comment.scss'
//创建一个无状态的组件
export default function Item(props) {
  return <div>
    <h2 className="title">评论人：{props.name}</h2>
    <p>{props.content}</p>
  </div>
}