import { Breadcrumb } from 'antd';
import React from 'react';

const { Item } = Breadcrumb;

export default function MainBreadcrumb() {
	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Item>当前位置：</Item>
			<Item>Home</Item>
			<Item>List</Item>
			<Item>App</Item>
		</Breadcrumb>
	);
}
