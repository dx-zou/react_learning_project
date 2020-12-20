/**
 * 头部导航组件
 */
import React from 'react';
import { Layout } from 'antd';
import AppMenu from './AppMenu';
const { Header } = Layout;
export default function MainHeader() {
	return (
		<Header className='main-header'>
			<div className='logo'>中国政务信息资源共享平台</div>
			<AppMenu />
		</Header>
	);
}
