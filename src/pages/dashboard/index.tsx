import React, { useState, useRef, useEffect, FC } from 'react';
import { Tag, Space, Button, Tooltip, Form, Input, Tabs } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import CommonForm from './CommonForm';
import CommonTreeTable from '../../components/CommonTreeTable';

const { Item } = Form;
const { TabPane } = Tabs;

const Index: FC = () => {
	const [queryForm] = useState({ type: 1 });
	const [formVisible, setFormVisible] = useState(false);
	const commonTableRef = useRef(null);
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			sorter: (a: any, b: any) => a.name - b.name,
			sortDirections: ['descend', 'ascend'],
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
			ellipsis: {
				showTitle: false,
			},
			render: (address: string) => (
				<Tooltip placement='topLeft' title={address}>
					{address}
				</Tooltip>
			),
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (tags: Array<string>) => (
				<>
					{tags.map(tag => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: () => (
				<Space size='middle'>
					<Button>delete</Button>
				</Space>
			),
		},
	];

	const onTableAdd = () => {
		setFormVisible(true);
	};
	useEffect(() => {
		// console.log(commonTableRef.current);
	});
	// 渲染搜索表单
	const renderSearchForm = [
		<Item label='地址' name='address'>
			<Input allowClear placeholder='请输入地址' />
		</Item>,
		<Item label='姓名' name='name'>
			<Input allowClear placeholder='请输入姓名' />
		</Item>,
		<Item label='姓名' name='name'>
			<Input allowClear placeholder='请输入姓名' />
		</Item>,
	];
	// 渲染操作按钮
	const renderActionBar = [
		<Button type='primary' icon={<PlusOutlined />} onClick={onTableAdd}>
			新增
		</Button>,
		<Button type='primary' danger icon={<DeleteOutlined />}>
			删除
		</Button>,
	];
	return (
		<>
			<CommonTreeTable
				ref={commonTableRef}
				treeTitle='目录分类'
				tableTitle='资源目录未发布列表'
				columns={columns}
				queryForm={queryForm}
				renderSearchForm={renderSearchForm}
				renderActionBar={renderActionBar}
			>
				<Tabs type='card' activeKey='1' tabBarGutter={0}>
					<TabPane tab='资源目录(未发布)' key='1'></TabPane>
					<TabPane tab='资源目录(已发布)' key='2'></TabPane>
					<TabPane tab='资源目录(已取消)' key='3'></TabPane>
					<TabPane tab='资源目录(已删除)' key='4'></TabPane>
				</Tabs>
			</CommonTreeTable>
			<CommonForm
				visible={formVisible}
				onCancel={() => setFormVisible(false)}
				onOk={() => setFormVisible(false)}
			/>
		</>
	);
};

export default Index;
