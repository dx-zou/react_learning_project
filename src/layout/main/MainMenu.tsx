/**
 * 系统菜单组件
 */
import { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router';
import {
  MailOutlined,
  BarChartOutlined,
  SettingOutlined,
  PieChartOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;
const list = [
  {
    path: '/dashboard',
    name: 'CSS',
    icon: <MailOutlined />,
  },
  {
    path: '/charts',
    name: '图表',
    icon: <AreaChartOutlined />,
    children: [
      {
        path: '/g2plot',
        name: 'G2Plot',
        icon: <PieChartOutlined />,
      },
      {
        path: '/echarts',
        name: 'ECharts',
        icon: <BarChartOutlined />,
      },
    ],
  },
  {
    path: '/canvas',
    name: 'canvas',
    icon: <PieChartOutlined />,
  },
  {
    path: '/drag',
    name: '拖拽',
    icon: <SettingOutlined />,
  },
];
const MainMenu = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['/dashboard'] as any);
  const handleMenuClick = (key: string | number): void => {
    sessionStorage.setItem('selectedKey', key as string);
    navigate(key as string);
    setSelectedKeys([key]);
  };
  useEffect(() => {
    const t = sessionStorage.getItem('selectedKey');
    if (t) {
      setSelectedKeys([t]);
    }
  }, []);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(c => !c)}
    >
      <div className='logo-container'>前端火星</div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['/dashboard']}
        selectedKeys={selectedKeys}
        style={{ height: 'calc(100vh - 109px)', overflowY: 'auto' }}
      >
        {list.map(m => {
          if (m.children) {
            return (
              <SubMenu key={m.name} icon={m.icon} title={m.name}>
                {m.children.map(i => (
                  <Item
                    key={i.path}
                    icon={i.icon}
                    onClick={({ key }) => handleMenuClick(key)}
                  >
                    {i.name}
                  </Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Item
              key={m.path}
              icon={m.icon}
              onClick={({ key }) => handleMenuClick(key)}
            >
              {m.name}
            </Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default MainMenu;
