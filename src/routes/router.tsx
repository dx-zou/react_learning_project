import { lazy } from 'react';
import SwitchRoute from './SwitchRoute';
const Dashboard = lazy(
  () => import(/* webpackChunkName: "dashboard'"*/ '../pages/dashboard')
);
const ECharts = lazy(
  () =>
    import(/* webpackChunkName: "Echarts'"*/ '../pages/charts/echarts/index')
);
const G2Plot = lazy(
  () => import(/* webpackChunkName: "Echarts'"*/ '../pages/charts/g2plot/index')
);
const Drag = lazy(
  () => import(/* webpackChunkName: "Echarts'"*/ '../pages/drag/index')
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
    path: '/echarts',
    title: 'echarts',
    element: <SwitchRoute title='echarts' element={<ECharts />} />,
  },
  {
    path: '/g2plot',
    title: 'g2plot',
    element: <SwitchRoute title='g2plot' element={<G2Plot />} />,
  },
  {
    path: '/drag',
    title: 'drag',
    element: <SwitchRoute title='drag' element={<Drag />} />,
  },
];

export default routerList;
