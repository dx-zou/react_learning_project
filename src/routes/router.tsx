import React, { lazy } from 'react';
import SwitchRoute from './SwitchRoute';
const Dashboard = lazy(
	() => import(/* webpackChunkName: "dashboard'"*/ '../pages/dashboard')
);
const Todos = lazy(
	() => import(/* webpackChunkName: "todos'"*/ '../pages/todos')
);
const routerList = [
	{
		path: 'dashboard',
		title: 'css',
		element: <SwitchRoute element={<Dashboard />} titleId='title.dashboard' />,
	},
	{
		path: 'todos',
		title: 'todos',
		element: <SwitchRoute element={<Todos />} titleId='title.dashboard' />,
	},
];

export default routerList;
