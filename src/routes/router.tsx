import React, { lazy } from 'react';
import SwitchRoute from './SwitchRoute';
const Dashboard = lazy(
  () => import(/* webpackChunkName: "dashboard'"*/ '../pages/dashboard')
);
const Todos = lazy(
  () => import(/* webpackChunkName: "todos'"*/ '../pages/todos/index')
);
const Drag = lazy(
  () => import(/* webpackChunkName: "todos'"*/ '../pages/drag/index')
);
const routerList = [
  {
    path: '/dashboard',
    title: 'css',
    element: (
      <SwitchRoute
        title='css'
        element={<Dashboard />}
        titleId='title.dashboard'
      />
    ),
  },
  {
    path: '/todos',
    title: 'todos',
    element: (
      <SwitchRoute title='todo' element={<Todos />} titleId='title.dashboard' />
    ),
  },
  {
    path: '/drag',
    title: 'drag',
    element: (
      <SwitchRoute title='drag' element={<Drag />} titleId='title.dashboard' />
    ),
  },
];

export default routerList;
