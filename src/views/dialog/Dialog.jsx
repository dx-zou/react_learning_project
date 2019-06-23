import React, { Component, Suspense } from "react";
import { Button } from "antd";
const FancyBorder = React.lazy(() => import("./FancyBorder"));
export default class Dialog extends Component {
  render() {
    return (
      <div className="Dialog-container">
        <Suspense fallback={<div>loading...</div>}>
          <FancyBorder>
            <p>确定删除吗？</p>
            <Button type="primary">确定</Button>
          </FancyBorder>
        </Suspense>
      </div>
    );
  }
}
