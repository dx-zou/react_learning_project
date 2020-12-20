import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import LoginPage from '@/layout/login';
import LayoutPage from '@/layout/index';
import WrapperRouteComponent from './config';
import router from './router';

const NotFound = lazy(() =>
	import(/* webpackChunkName: "404'"*/ '@/pages/404')
);

const routeList = [
	{
		path: 'login',
		element: (
			<WrapperRouteComponent element={<LoginPage />} titleId='title.login' />
		),
	},
	{
		path: '',
		element: <WrapperRouteComponent element={<LayoutPage />} titleId='' />,
		children: [
			...router,
			{
				path: '*',
				element: (
					<WrapperRouteComponent
						element={<NotFound />}
						titleId='title.notFount'
					/>
				),
			},
		],
	},
];

const RenderRouter = () => {
	return useRoutes(routeList);
};

export default RenderRouter;
