// 路由模块
import React from "react";
import { Route, Redirect } from "react-router-dom";
import Comment from "../views/Comment/Comment";
import MyInput from "../views/MyInput/MyInput";
import Home from "../views/Home";
import MyForm from "../views/MyForm";
import Dialog from "../views/dialog/Dialog";
export default function AppRouter() {
  return (
    <div className="Main-container">
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/comment" component={Comment} />
      <Route path="/input-box" component={MyInput} />
      <Route path="/home" component={Home} />
      <Route path="/my-form" component={MyForm} />
      <Route path="/dialog" component={Dialog} />
    </div>
  );
}
