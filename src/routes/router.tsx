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
const G6Charts = lazy(
  () => import(/* webpackChunkName: "charts'"*/ '../pages/charts/g6/index')
);
const Canvas = lazy(
  () => import(/* webpackChunkName: "charts'"*/ '../pages/canvas/index')
);
const Test = lazy(
  () => import(/* webpackChunkName: "market'"*/ '../pages/test/index')
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
  () => import(/* webpackChunkName: "market'"*/ '../pages/document/react')
);
const routerList = [
  {
    path: 'dashboard',
    title: 'menu.dashboard',
    icon: <Html5Outlined />,
    element: (
      <SwitchRoute
        title='menu.dashboard'
        element={<Dashboard />}
        titleId='menu.dashboard'
      />
    ),
  },
  {
    path: '',
    title: 'menu.charts',
    icon: <AreaChartOutlined />,
    children: [
      {
        path: 'chart/echarts',
        title: 'menu.charts.echarts',
        icon: <PieChartOutlined />,
        element: (
          <SwitchRoute title='menu.charts.echarts' element={<ECharts />} />
        ),
      },
      {
        path: 'chart/g2plot',
        title: 'menu.charts.g2plot',
        icon: <BarChartOutlined />,
        element: (
          <SwitchRoute title='menu.charts.g2plot' element={<G2Plot />} />
        ),
      },
      {
        path: 'chart/g6',
        title: 'menu.charts.g6',
        icon: <BarChartOutlined />,
        element: <SwitchRoute title='menu.charts.g6' element={<G6Charts />} />,
      },
    ],
  },
  {
    path: 'test',
    title: 'menu.bestPractice',
    icon: <PieChartOutlined />,
    element: <SwitchRoute title='menu.bestPractice' element={<Test />} />,
  },
  {
    path: 'canvas',
    title: 'menu.canvas',
    icon: <RadarChartOutlined />,
    element: <SwitchRoute title='menu.canvas' element={<Canvas />} />,
  },
  {
    path: '',
    title: 'menu.market',
    icon: <ShoppingOutlined />,
    children: [
      {
        path: 'market/json-view',
        title: 'menu.market.jsonView',
        icon: <PieChartOutlined />,
        element: (
          <SwitchRoute title='menu.market.jsonView' element={<JsonView />} />
        ),
      },
      {
        path: 'market/code-editor',
        title: 'menu.market.codeEditor',
        icon: <PieChartOutlined />,
        element: (
          <SwitchRoute
            title='menu.market.codeEditor'
            element={<CodeEditor />}
          />
        ),
      },
      {
        path: 'market/textloop',
        title: 'menu.market.others',
        icon: <BarcodeOutlined />,
        element: (
          <SwitchRoute title='menu.market.others' element={<TextLoop />} />
        ),
      },
    ],
  },
  {
    path: '/document',
    title: 'menu.document',
    icon: <ShoppingOutlined />,
    element: <SwitchRoute title='menu.document' element={<Document />} />,
  },
];

export default routerList;
