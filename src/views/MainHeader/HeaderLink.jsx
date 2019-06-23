import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLink() {
  return (
    <div className="Header-link">
      <Link to="/">首页--</Link>
      <Link to="/input-box">输入框--</Link>
      <Link to="/my-form">表单--</Link>
      <Link to="/dialog">Dialog--</Link>
    </div>
  );
}
