import { lazy } from 'react';
import {
  Html5Outlined,
  BarChartOutlined,
  RadarChartOutlined,
  PieChartOutlined,
  AreaChartOutlined,
  ShoppingOutlined,
  BarcodeOutlined,
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
const CodeEditor = lazy(
  () => import(/* webpackChunkName: "market'"*/ '../pages/market/CodeEditor')
);
const TextLoop = lazy(
  () => import(/* webpackChunkName: "market'"*/ '../pages/market/TextLoop')
);
const Document = lazy(
  () => import(/* webpackChunkName: "market'"*/ '../pages/document/index')
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
    title: '最佳实践',
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
      {
        path: 'market/code-editor',
        title: 'CodeEditor',
        icon: <PieChartOutlined />,
        element: <SwitchRoute title='CodeEditor' element={<CodeEditor />} />,
      },
      {
        path: 'market/textloop',
        title: '二维码',
        icon: <BarcodeOutlined />,
        element: <SwitchRoute title='TextLoop' element={<TextLoop />} />,
      },
    ],
  },
  {
    path: '/document',
    title: '文档',
    icon: <ShoppingOutlined />,
    element: <SwitchRoute title='文档' element={<Document />} />,
  },
];

export default routerList;
