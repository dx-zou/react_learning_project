import { lazy, FC } from 'react';
import { useRoutes } from 'react-router-dom';
import LoginPage from '../layout/login';
import LayoutPage from '../layout/index';
import { PartialRouteObject } from 'react-router';
import SwitchRoute from './SwitchRoute';
import router from './router';

const NotFound = lazy(
  () => import(/* webpackChunkName: "404'"*/ '../pages/404')
);

const routeList: PartialRouteObject[] = [
  {
    path: 'login',
    element: <SwitchRoute element={<LoginPage />} titleId='title.login' />,
  },
  {
    path: '',
    element: <SwitchRoute element={<LayoutPage />} />,
    children: [
      ...router,
      {
        path: '*',
        element: <SwitchRoute element={<NotFound />} />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  return useRoutes(routeList);
};

export default RenderRouter;
