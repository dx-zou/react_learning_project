// 路由模块
import React, { Suspense, lazy } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
const Home = lazy(() => import("../views/Home"));
const MyForm = lazy(() => import("../views/MyForm"));
const MyInput = lazy(() => import("../views/MyInput/MyInput"));
const Dialog = lazy(() => import("../views/dialog/Dialog"));
const MyContext = lazy(() => import("../views/Context/MyContext"));
const ReactJsx = lazy(() => import("../views/ReactJsx/ReactJsx"));
export default function AppRouter() {
  return (
    <div className="Main-container">
      <Suspense fallback={<span>Loading······</span>}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/input-box" component={MyInput} />
          <Route path="/my-form" component={MyForm} />
          <Route path="/dialog" component={Dialog} />
          <Route path="/context" component={MyContext} />
          <Route path="/jsx" component={ReactJsx} />
        </Switch>
      </Suspense>
    </div>
  );
}
