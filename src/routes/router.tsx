import { lazy } from 'react';
import {
  Html5Outlined,
  BarChartOutlined,
  RadarChartOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import SwitchRoute from './SwitchRoute';

const Dashboard = lazy(
  () => import(/* webpackChunkName: "dashboard'"*/ '../pages/dashboard')
);
const ECharts = lazy(
  () => import(/* webpackChunkName: "charts'"*/ '../pages/charts/echarts/index')
);
const G2Plot = lazy(
  () => import(/* webpackChunkName: "charts'"*/ '../pages/charts/g2plot/index')
);
const Canvas = lazy(
  () => import(/* webpackChunkName: "charts'"*/ '../pages/canvas/index')
);
const Drag = lazy(
  () => import(/* webpackChunkName: "market'"*/ '../pages/drag/index')
);
const JsonView = lazy(
  () => import(/* webpackChunkName: "market'"*/ '../pages/market/JsonView')
);
const routerList = [
  {
    path: 'dashboard',
    title: 'css',
    icon: <Html5Outlined />,
    element: (
      <SwitchRoute
        title='css'
        element={<Dashboard />}
        titleId='title.dashboard'
      />
    ),
  },
  {
    path: '',
    title: '图表',
    icon: <AreaChartOutlined />,
    children: [
      {
        path: 'chart/echarts',
        title: 'echarts',
        icon: <PieChartOutlined />,
        element: <SwitchRoute title='echarts' element={<ECharts />} />,
      },
      {
        path: 'chart/g2plot',
        title: 'g2plot',
        icon: <BarChartOutlined />,
        element: <SwitchRoute title='g2plot' element={<G2Plot />} />,
      },
    ],
  },
  {
    path: 'drag',
    title: 'drag',
    icon: <PieChartOutlined />,
    element: <SwitchRoute title='drag' element={<Drag />} />,
  },
  {
    path: 'canvas',
    title: 'canvas',
    icon: <RadarChartOutlined />,
    element: <SwitchRoute title='canvas' element={<Canvas />} />,
  },
  {
    path: '',
    title: '组件市场',
    icon: <ShoppingOutlined />,
    children: [
      {
        path: 'market/json-view',
        title: 'JsonView',
        icon: <PieChartOutlined />,
        element: <SwitchRoute title='JsonView' element={<JsonView />} />,
      },
    ],
  },
];

export default routerList;
