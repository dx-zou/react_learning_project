/**
 * 系统菜单组件
 */
import { useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
const { Item } = Menu;
const list = [
	{
		path: '/dashboard',
		name: 'CSS',
	},
	{
		path: '/todos',
		name: 'Todo',
	},
];
const MainMenu = () => {
	const navigate = useNavigate();

	const handleMenuClick = (key: any): void => {
		navigate(key);
	};
	useEffect(() => {});
	return (
		<Menu theme='light' mode='horizontal' defaultSelectedKeys={['/dashboard']}>
			{list.map(m => (
				<Item key={m.path} onClick={({ key }) => handleMenuClick(key)}>
					{m.name}
				</Item>
			))}
		</Menu>
	);
};
export default MainMenu;
