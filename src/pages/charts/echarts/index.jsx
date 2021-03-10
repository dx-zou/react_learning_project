/* eslint-disable no-undef */
import { useEffect, useState, useMemo, useCallback } from 'react';
import { Card, Switch } from 'antd';
import {
  initChartInstance,
  initLineBarOption,
  drawChartByInstance,
} from '@/utils/echartsConf';
import './index.less';

const chartList = [
  {
    title: 'ECharts5 柱状图',
    yName: '销量',
    id: 'chart1',
    type: 'bar',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  },
  {
    title: 'ECharts5 折线图',
    yName: '销量',
    id: 'chart2',
    type: 'line',
    xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  },
];
const Index = () => {
  // 实例
  const [insList, setInsList] = useState([]);
  // 配置
  const [optionList, setOptionList] = useState([]);
  const [darkMode, setDarkMode] = useState('');

  // 初始化图表实例及配置项
  useEffect(() => {
    let t = [],
      k = [];
    chartList.forEach(item => {
      t.push(
        initChartInstance(document.querySelector(`#${item.id}`), darkMode)
      );
      k.push(initLineBarOption(item));
    });
    setInsList(t);
    setOptionList(k);
  }, [darkMode]);

  useEffect(() => {
    if (optionList.length > 0) {
      optionList.forEach((item, index) => {
        drawChartByInstance({ option: item, instance: insList[index] });
      });
    }
  }, [insList]);
  // 切换主题
  const onThemeChange = checked => {
    // 销毁当前实例
    insList.forEach(item => item.dispose());
    setDarkMode(checked ? 'dark' : '');
  };
  return (
    <div>
      <div>
        <Switch
          size='default'
          checkedChildren='深色模式'
          unCheckedChildren='浅色模式'
          onChange={onThemeChange}
        />
      </div>
      <div className='chart-container'>
        {chartList.map(item => (
          <Card
            title={item.title}
            style={{ width: '49%' }}
            hoverable
            key={item.id}
          >
            <div id={item.id} style={{ width: '100%', height: '300px' }} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;
