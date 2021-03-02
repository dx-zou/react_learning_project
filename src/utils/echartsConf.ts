// 按需导入 ECharts 模块
import * as echarts from 'echarts/core';
import { LineChart, BarChart, PieChart, GraphChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  ToolboxComponent,
  TitleComponent,
  LegendComponent,
  LegendScrollComponent,
  DataZoomComponent,
  GraphicComponent,
} from 'echarts/components';
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  GraphChart,
  GridComponent,
  TooltipComponent,
  ToolboxComponent,
  TitleComponent,
  LegendComponent,
  LegendScrollComponent,
  DataZoomComponent,
  GraphicComponent,
  SVGRenderer,
  CanvasRenderer,
]);

export interface OptionType {
  darkMode?: boolean | string;
  series?: any[];
  xData?: Array<string | number>;
  title?: string;
  yName?: string;
  type: string;
  xName: string;
  stack: string;
  legend?: {};
  yAxis?: [];
  xInterval: number;
  ref: HTMLElement;
}

/**
 * 折线图-柱状图-时间趋势图选项配置
 * @param  {Array} series [系列数据]
 * @param  {String} title  [图表标题]
 * @param  {String} yName  [y轴名称]
 * @param  {String} type  [图表类型]
 * @param  {String} yType  [y轴类型]
 * @param  {Array} xData  [x轴数据]
 * @param  {String} {stack} [是否是堆积柱状图]
 */
export const initLineBarOption = (data: OptionType) => {
  const {
    series = [],
    xData = [],
    title = '',
    yName = '',
    type = 'line',
    xName = '时间',
    stack = '',
    legend = {},
    yAxis = [],
    xInterval = 5,
    ref,
  } = data;
  const option: any = {
    chartType: 'line',
    // title: {
    //   text: title,
    //   left: '3%',
    // },
    ref, // 图表dom元素
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56',
        },
      },
    },
    legend,
    grid: {
      left: '11%',
      right: '10%',
      top: '10%',
      bottom: '10%',
    },
    // dataZoom: {
    //   type: "slider",
    //   show: false,
    //   start: 0,
    //   end: 100
    // },
    xAxis: [
      {
        type: 'category',
        name: xName,
        boundaryGap: true,
        // axisLabel: {
        //   interval: xInterval,
        //   // min: 0,
        //   // max: 100,
        //   rotate: 20, //角度顺时针计算的
        // },
        data: xData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: yName,
      },
      ...yAxis,
    ],
    series: [],
  };
  option.series = [];
  // 传入的系列数组长度
  for (let i = 0; i < series.length; i++) {
    const obj: any = {
      type,
      // smooth: true,
      // barWidth: (() => {
      //   const w = Math.floor(100 / (series.length + 1));
      //   return series.length > 10 ? `${w}%` : '20%';
      // })(),
      name: series[i].name,
      data: series[i].data,
      prop: series[i].prop,
      symbol: 'none',
    };
    if (stack) {
      obj.stack = stack;
      obj.areaStyle = {};
    }
    option.series.push(obj);
  }
  return option;
};

/**
 * 初始化图表实例
 *
 * @param dom
 * @param theme
 */
export const initChartInstance = (dom: any, theme = '') => {
  const instance = echarts.init(dom, theme);
  instance.showLoading();
  return instance;
};

// 绘制图表
export const drawChartByInstance = ({ option, instance }: any) => {
  instance.setOption(option);
  instance.hideLoading();
};

export default echarts;
