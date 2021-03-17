/**
 * 头部导航组件
 */
import { Layout } from 'antd';
import MainBreadcrumb from './MainBreadcrumb';

const { Header } = Layout;

export default function MainHeader() {
  return (
    <Header className='main-header'>
      <MainBreadcrumb />
    </Header>
  );
}
