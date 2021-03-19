/**
 * 头部导航组件
 */
import { Layout } from 'antd';
import MainBreadcrumb from './MainBreadcrumb';
import AccountSetting from './AccountSetting';
const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className='main-header'>
      <MainBreadcrumb />
      <AccountSetting />
    </Header>
  );
};

export default MainHeader;
