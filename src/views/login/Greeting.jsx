// 欢迎组件
import React from "react";
import Guest from "./Guest";
import User from "./User";
export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  return <React.Fragment>{isLoggedIn ? <User /> : <Guest />}</React.Fragment>;
}
