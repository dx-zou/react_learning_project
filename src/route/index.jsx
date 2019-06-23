// 路由模块
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Comment from "../views/Comment/Comment";
import MyInput from "../views/MyInput/MyInput";
import Home from "../views/Home";
import MyForm from "../views/MyForm";
export default function AppRouter() {
  return (
    <div className="Main-container">
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route exact path="/comment" component={Comment} />
      <Route exact path="/input-box" component={MyInput} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/my-form" component={MyForm} />
    </div>
  );
}
