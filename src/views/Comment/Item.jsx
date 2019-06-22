import React from "react";
//创建一个无状态的组件
export default function Item(props) {
  return (
    <li>
      <span className="title">评论人：{props.name}</span>
      <p>{props.content}</p>
    </li>
  );
}
