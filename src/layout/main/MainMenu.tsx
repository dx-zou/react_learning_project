/**
 * 系统菜单组件
 */
import { FC, useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router';
import routerList from '../../routes/router';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;
const MainMenu: FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['/dashboard'] as any);
  const [menuList] = useState(routerList);
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
      <div className='logo-container'>码农火星</div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['/dashboard']}
        selectedKeys={selectedKeys}
        style={{ height: 'calc(100vh - 109px)', overflowY: 'auto' }}
      >
        {menuList.map(m => {
          if (m.children) {
            return (
              <SubMenu key={m.title} icon={m.icon} title={m.title}>
                {m.children.map(i => (
                  <Item
                    key={i.path}
                    icon={i.icon}
                    onClick={({ key }) => handleMenuClick(key)}
                  >
                    {i.title}
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
              {m.title}
            </Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default MainMenu;
