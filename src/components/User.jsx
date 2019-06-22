import React from "react";
export default function User(props) {
  return (
    <div className="user-info">
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
}
