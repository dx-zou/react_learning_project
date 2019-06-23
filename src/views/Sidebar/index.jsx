import React from "react";
import Toggle from "../../components/Toggle";
import Clock from "../../components/Clock";
export default function Sidebar() {
  return (
    <aside className="App-sidebar">
      <Toggle />
      <Clock />
    </aside>
  );
}
