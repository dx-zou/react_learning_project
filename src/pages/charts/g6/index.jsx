import { useState, useEffect, useRef } from 'react';
import G6 from '@antv/g6';
import './index.less';

const initData = {
  // 点集
  nodes: [
    {
      id: 'node1', // 节点的唯一标识
      x: 100, // 节点横坐标
      y: 200, // 节点纵坐标
      label: '起始点', // 节点文本
    },
    {
      id: 'node2',
      x: 200,
      y: 300,
      label: '目标点',
    },
  ],
  // 边集
  edges: [
    // 表示一条从 node1 节点连接到 node2 节点的边
    {
      source: 'node1', // 起始点 id
      target: 'node2', // 目标点 id
      // label: '连线', // 边的文本
    },
  ],
};
const G6Charts = () => {
  const graph = useRef();
  useEffect(() => {
    const minimap = new G6.Minimap({
      size: [100, 100],
      className: 'minimap',
      type: 'delegate',
    });
    const grid = new G6.Grid();
    graph.current = new G6.Graph({
      plugins: [grid, minimap],
      container: 'g6-container', // 指定挂载容器
      width: 1600, // 图的宽度
      height: 600, // 图的高度
      fitView: false,
      defaultNode: {
        type: 'rect',
        size: [100, 50],
        color: '#5B8FF9',
        style: {
          fill: '#9EC9FF',
          lineWidth: 1,
        },
        linkPoints: {
          top: true,
          bottom: true,
          left: true,
          right: true,
          // ... 四个圆的样式可以在这里指定
        },
        labelCfg: {
          style: {
            fill: '#fff',
            fontSize: 6,
          },
        },
      },
      defaultEdge: {
        type: 'polyline',
        style: {
          radius: 5,
          offset: 30,
          endArrow: true,
          stroke: '#e2e2e2',
        },
        // 边上的标签文本配置
        labelCfg: {
          autoRotate: true, // 边上的标签文本根据边的方向旋转
        },
      },
      modes: {
        // 允许拖拽画布、放缩画布、拖拽节点
        default: ['drag-canvas', 'zoom-canvas', 'drag-node'],
      },
      // 节点不同状态下的样式集合
      nodeStateStyles: {
        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
        hover: {
          fill: 'lightsteelblue',
        },
        // 鼠标点击节点，即 click 状态为 true 时的样式
        click: {
          stroke: '#eee',
          lineWidth: 1,
        },
      },
      // 边不同状态下的样式集合
      edgeStateStyles: {
        // 鼠标点击边，即 click 状态为 true 时的样式
        click: {
          stroke: 'steelblue',
        },
      },
    });
    graph.current.data(initData); // 加载数据
    graph.current.render(); // 渲染
    graph.current.on('node:mouseenter', e => {
      const nodeItem = e.item; // 获取鼠标进入的节点元素对象
      graph.current.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
    });
    // 鼠标离开节点
    graph.current.on('node:mouseleave', e => {
      const nodeItem = e.item; // 获取鼠标离开的节点元素对象
      graph.current.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
    });

    // 点击节点
    graph.current.on('node:click', e => {
      // 先将所有当前是 click 状态的节点置为非 click 状态
      const clickNodes = graph.current.findAllByState('node', 'click');
      clickNodes.forEach(cn => {
        graph.current.setItemState(cn, 'click', false);
      });
      const nodeItem = e.item; // 获取被点击的节点元素对象
      graph.current.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
    });
    // 点击边
    graph.current.on('edge:click', e => {
      // 先将所有当前是 click 状态的边置为非 click 状态
      const clickEdges = graph.current.findAllByState('edge', 'click');
      clickEdges.forEach(ce => {
        graph.current.setItemState(ce, 'click', false);
      });
      const edgeItem = e.item; // 获取被点击的边元素对象
      graph.current.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
    });
  }, []);
  return (
    <div>
      <div id='g6-container' className='g6-grid-bg'></div>
    </div>
  );
};
export default G6Charts;
