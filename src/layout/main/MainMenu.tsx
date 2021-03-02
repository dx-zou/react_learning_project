/**
 * 系统菜单组件
 */
import { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Item } = Menu;
const list = [
  {
    path: '/dashboard',
    name: 'CSS',
    icon: <MailOutlined />,
  },
  {
    path: '/todos',
    name: '图表',
    icon: <AppstoreOutlined />,
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
        mode='vertical'
        defaultSelectedKeys={['/dashboard']}
        selectedKeys={selectedKeys}
        style={{ height: 'calc(100vh - 109px)', overflowY: 'auto' }}
      >
        {list.map(m => (
          <Item
            key={m.path}
            icon={m.icon}
            onClick={({ key }) => handleMenuClick(key)}
          >
            {m.name}
          </Item>
        ))}
      </Menu>
    </Sider>
  );
};
export default MainMenu;
