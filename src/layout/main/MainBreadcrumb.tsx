import { Breadcrumb } from 'antd';
import React from 'react';
// import { useLocation } from 'react-router';
const { Item } = Breadcrumb;

export default function MainBreadcrumb() {
	return (
		<Breadcrumb style={{ margin: '16px 0' }}>
			<Item>当前位置：</Item>
			<Item>css</Item>
		</Breadcrumb>
	);
}
