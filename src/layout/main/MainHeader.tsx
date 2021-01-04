/**
 * 头部导航组件
 */
import { Layout } from 'antd';
import MainMenu from './MainMenu';
const { Header } = Layout;

export default function MainHeader() {
	return (
		<Header className='main-header'>
			<div className='logo'>学习共享平台</div>
			<MainMenu />
		</Header>
	);
}
