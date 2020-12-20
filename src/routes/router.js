import React, { lazy } from 'react';
import WrapperRouteComponent from './config';
const Dashboard = lazy(() =>
	import(/* webpackChunkName: "dashboard'"*/ '@/pages/dashboard')
);
const Todos = lazy(() =>
	import(/* webpackChunkName: "todos'"*/ '@/pages/todos')
);
const DirManage = lazy(() =>
	import(/* webpackChunkName: "DirManage'"*/ '@/pages/dirManage')
);
const routerList = [
	{
		path: 'dashboard',
		element: (
			<WrapperRouteComponent
				element={<Dashboard />}
				titleId='title.dashboard'
			/>
		),
	},
	{
		path: 'todos',
		element: (
			<WrapperRouteComponent element={<Todos />} titleId='title.dashboard' />
		),
	},
	{
		path: 'dir-manage',
		element: (
			<WrapperRouteComponent
				element={<DirManage />}
				titleId='title.dashboard'
			/>
		),
	},
];

export default routerList;
