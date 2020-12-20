/**
 * 系统菜单组件
 */
import React, { useEffect } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';
const { Item } = Menu;
const list = [
	{
		path: '/dashboard',
		name: '首页',
	},
	{
		path: '/todos',
		name: '代办任务',
	},
	{
		path: '/dir-manage',
		name: '目录管理',
	},
];
export default function AppMenu() {
	const navigate = useNavigate();
	const handleMenuClick = key => {
		navigate(key);
	};
	useEffect(() => {});
	return (
		<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['dashboard']}>
			{list.map(m => (
				<Item key={m.path} onClick={({ key }) => handleMenuClick(key)}>
					{m.name}
				</Item>
			))}
		</Menu>
	);
}
