import React from "react";
import HeaderLink from "./HeaderLink";
import Login from "../login/Login";
export default function MainHeader() {
  return (
    <div className="Main-header">
      <HeaderLink />
      <Login />
    </div>
  );
}
