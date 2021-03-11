import { useEffect } from 'react';
import { Line, Column, Pie, measureTextWidth } from '@antv/g2plot';
import { Card } from 'antd';
import '../index.less';

const Chart = () => {
  const cardList = [
    {
      id: 'line',
      title: '折线图',
    },
    {
      id: 'column',
      title: '柱状图',
    },
    {
      id: 'pie',
      title: '饼图',
    },
    {
      id: 'pie2',
      title: '环图',
    },
  ];
  useEffect(() => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
    )
      .then(res => res.json())
      .then(data => {
        const line = new Line('line', {
          data,
          padding: 'auto',
          xField: 'Date',
          yField: 'scales',
          xAxis: {
            tickCount: 5,
          },
          isStack: true,
        });
        line.render();
      });
    const data = [
      {
        country: 'Asia',
        year: '1750',
        value: 502,
      },
      {
        country: 'Asia',
        year: '1800',
        value: 635,
      },
      {
        country: 'Asia',
        year: '1850',
        value: 809,
      },
      {
        country: 'Asia',
        year: '1900',
        value: 947,
      },
      {
        country: 'Asia',
        year: '1950',
        value: 1402,
      },
      {
        country: 'Asia',
        year: '1999',
        value: 3634,
      },
      {
        country: 'Asia',
        year: '2050',
        value: 5268,
      },
      {
        country: 'Africa',
        year: '1750',
        value: 106,
      },
      {
        country: 'Africa',
        year: '1800',
        value: 107,
      },
      {
        country: 'Africa',
        year: '1850',
        value: 111,
      },
      {
        country: 'Africa',
        year: '1900',
        value: 133,
      },
      {
        country: 'Africa',
        year: '1950',
        value: 221,
      },
      {
        country: 'Africa',
        year: '1999',
        value: 767,
      },
      {
        country: 'Africa',
        year: '2050',
        value: 1766,
      },
      {
        country: 'Europe',
        year: '1750',
        value: 163,
      },
      {
        country: 'Europe',
        year: '1800',
        value: 203,
      },
      {
        country: 'Europe',
        year: '1850',
        value: 276,
      },
      {
        country: 'Europe',
        year: '1900',
        value: 408,
      },
      {
        country: 'Europe',
        year: '1950',
        value: 547,
      },
      {
        country: 'Europe',
        year: '1999',
        value: 729,
      },
      {
        country: 'Europe',
        year: '2050',
        value: 628,
      },
    ];
    const columnPlot = new Column('column', {
      data,
      xField: 'year',
      yField: 'value',
      seriesField: 'country',
      isPercent: true,
      isStack: true,
      label: {
        position: 'middle',
        content: item => {
          return item.value.toFixed(2);
        },
        style: {
          fill: '#fff',
        },
      },
      interactions: [
        { type: 'element-highlight-by-color' },
        { type: 'element-link' },
      ],
    });
    columnPlot.render();
    const data1 = [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ];

    const piePlot = new Pie('pie', {
      appendPadding: 10,
      data: data1,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      label: {
        type: 'outer',
        content: '{name} {percentage}',
      },
      interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
    });

    piePlot.render();

    function renderStatistic(containerWidth, text, style) {
      const { width: textWidth, height: textHeight } = measureTextWidth(
        text,
        style
      );
      const R = containerWidth / 2;
      // r^2 = (w / 2)^2 + (h - offsetY)^2
      let scale = 1;
      if (containerWidth < textWidth) {
        scale = Math.min(
          Math.sqrt(
            Math.abs(
              Math.pow(R, 2) /
                (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
            )
          ),
          1
        );
      }
      const textStyleStr = `width:${containerWidth}px;`;
      return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
        scale < 1 ? 1 : 'inherit'
      };">${text}</div>`;
    }

    const data2 = [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ];

    const piePlot2 = new Pie('pie2', {
      appendPadding: 10,
      data: data2,
      angleField: 'value',
      colorField: 'type',
      radius: 1,
      innerRadius: 0.64,
      meta: {
        value: {
          formatter: v => `${v} ¥`,
        },
      },
      label: {
        type: 'inner',
        offset: '-50%',
        style: {
          textAlign: 'center',
        },
        autoRotate: false,
        content: '{value}',
      },
      statistic: {
        title: {
          offsetY: -4,
          customHtml: (container, view, datum) => {
            const { width, height } = container.getBoundingClientRect();
            const d = Math.sqrt(
              Math.pow(width / 2, 2) + Math.pow(height / 2, 2)
            );
            const text = datum ? datum.type : '总计';
            return renderStatistic(d, text, { fontSize: 28 });
          },
        },
        content: {
          offsetY: 4,
          style: {
            fontSize: '32px',
          },
          customHtml: (container, view, datum, data) => {
            const { width } = container.getBoundingClientRect();

            const text = datum
              ? `¥ ${datum.value}`
              : `¥ ${data.reduce((r, d) => r + d.value, 0)}`;
            return renderStatistic(width, text, { fontSize: 32 });
          },
        },
      },
      // 添加 中心统计文本 交互
      interactions: [
        { type: 'element-selected' },
        { type: 'element-active' },
        { type: 'pie-statistic-active' },
      ],
    });

    piePlot2.render();
  }, []);
  return (
    <div className='chart-container'>
      {cardList.map(({ id, title }) => (
        <Card title={title} key={id} style={{ width: '49.5%' }} hoverable>
          <div className='chart-box' id={id} />
        </Card>
      ))}
    </div>
  );
};
export default Chart;
