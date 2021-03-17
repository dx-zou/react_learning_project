/**
 * 系统菜单组件
 */
import { useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router';
import routerList from '../../routes/router';
import { useAppDispatch } from '../../store';
import { setBreadcrumbs } from '../../store/reducers/setting';

const { Sider } = Layout;
const { Item, SubMenu } = Menu;
const MainMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['/dashboard']);
  const [menuList] = useState(routerList);

  // 点击菜单
  const handleMenuClick = (key, item) => {
    sessionStorage.setItem('selectedKey', key);
    dispatch(setBreadcrumbs({ breadcrumbs: [item.title] }));
    navigate(key);
    setSelectedKeys([key]);
  };

  useEffect(() => {
    const t = sessionStorage.getItem('selectedKey');
    if (t) {
      setSelectedKeys([t]);
    }
  }, []);

  // 递归渲染菜单
  const renderMenu = value => (
    <SubMenu title={value.title} icon={value.icon} key={value.title}>
      {value.children.map(i => {
        if (i.children) {
          return <>{renderMenu(i)}</>;
        }
        return (
          <Item
            key={i.path}
            icon={i.icon}
            onClick={({ key }) => handleMenuClick(key, i)}
          >
            {i.title}
          </Item>
        );
      })}
    </SubMenu>
  );

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
        {menuList.map(m => {
          if (m.children) {
            return <>{renderMenu(m)}</>;
          }
          return (
            <Item
              key={m.path}
              icon={m.icon}
              onClick={({ key }) => handleMenuClick(key, m)}
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
