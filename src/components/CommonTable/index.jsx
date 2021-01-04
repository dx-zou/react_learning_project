import React, {
	useState,
	useEffect,
	useCallback,
	useRef,
	useMemo,
	useImperativeHandle,
	forwardRef,
} from 'react';
import { Table, Space, Button, Form, Divider } from 'antd';
import {
	SearchOutlined,
	UndoOutlined,
	FileTextTwoTone,
	DownOutlined,
	UpOutlined,
} from '@ant-design/icons';
import './index.less';

const { Item, useForm } = Form;

const Index = forwardRef((props, ref) => {
	const {
		columns = [],
		renderSearchForm,
		renderActionBar,
		queryForm,
		tableTitle,
		showSearch = true,
	} = props;
	const [tableData, setTableData] = useState([]);
	// 表格多选
	const [selectedList, setSelectedList] = useState([]);
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const [loading, setLoading] = useState(true);
	const [form] = useForm();
	const [formData, setFormData] = useState({ ...queryForm });
	// 搜索栏展开收起
	const [isExpand, setIsExpand] = useState(false);
	// 展示的搜索项
	const [formItemList, setFormItemList] = useState([]);
	// ref
	const tableRef = useRef();
	// 自定义暴露给父组件的方法
	useImperativeHandle(ref, () => ({
		getTableData: () => {
			getTableData();
		},
	}));
	// 多选框
	const rowSelection = {
		selectedRowKeys,
		onChange(selectedRowKeys, selectedRows) {
			setSelectedList(selectedRows);
			setSelectedRowKeys(selectedRowKeys);
		},
		// selections: [
		// 	Table.SELECTION_ALL,
		// 	{
		// 		key: '反选',
		// 		text: '反选所有',
		// 		onSelect() {
		// 			setSelectedRowKeys([]);
		// 		},
		// 	},
		// 	Table.SELECTION_INVERT,
		// ],
		// getCheckboxProps: record => ({
		//   disabled: record.name === 'Disabled User',
		//   name: record.name,
		// }),
	};
	// 获取表格数据
	const getTableData = useCallback(async () => {
		setLoading(true);
		const data = [
			{
				key: '1',
				name: 'John Brown',
				age: 32,
				address:
					'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',
				tags: ['nice', 'developer'],
			},
			{
				key: '2',
				name: 'John Trump',
				age: 32,
				address: 'New York No. 1 Lake Park',
				tags: ['developer'],
			},
		];
		await setTableData(data);
		setLoading(false);
	}, []);

	useEffect(() => {
		getTableData();
	}, [getTableData]);

	// 搜索表单值更新
	const onFormValuesChange = () => {
		// console.log(value);
	};
	// 搜索表单域更新
	const onFormFieldsChange = () => {
		// 	console.log(value);
		// 	console.log(all);
	};
	// 表格搜索
	const onTableSearch = () => {
		const value = form.getFieldsValue();
		setFormData(Object.assign(formData, value));
		getTableData();
	};
	// 重置搜索条件
	const onFormReset = () => {
		form.resetFields();
	};
	// 展开收起搜索栏
	const toggleExpandSeach = () => {
		setIsExpand(!isExpand);
	};
	useMemo(() => {
		if (isExpand) {
			setFormItemList(renderSearchForm);
		} else {
			setFormItemList(renderSearchForm.slice(0, 4));
		}
	}, [isExpand, renderSearchForm]);
	return (
		<div ref={tableRef} className='common-table-container'>
			<div className='common-table-toolbar'>
				<Space>{renderActionBar && renderActionBar.map(a => a)}</Space>
				<Space style={{ fontSize: '19px' }}>
					<FileTextTwoTone />
					<span>{tableTitle}</span>
				</Space>
			</div>
			<Divider style={{ margin: '10px 0' }} />
			{showSearch && (
				<Form
					colon={false}
					layout='inline'
					form={form}
					onFieldsChange={onFormFieldsChange}
					onValuesChange={onFormValuesChange}
				>
					{renderSearchForm && formItemList.map(s => s)}
					<Item>
						<Space>
							<Button
								icon={<SearchOutlined />}
								type='primary'
								onClick={onTableSearch}
							>
								搜索
							</Button>
							<Button icon={<UndoOutlined />} onClick={onFormReset}>
								重置
							</Button>
							{renderSearchForm.length > 4 && (
								<Button type='link' onClick={toggleExpandSeach}>
									{isExpand ? (
										<>
											收起
											<UpOutlined style={{ marginLeft: '5px' }} />
										</>
									) : (
										<>
											展开
											<DownOutlined style={{ marginLeft: '5px' }} />
										</>
									)}
								</Button>
							)}
						</Space>
					</Item>
				</Form>
			)}
			<Table
				columns={columns}
				dataSource={tableData}
				loading={loading}
				rowSelection={{ ...rowSelection }}
				size='small'
				bordered
			></Table>
		</div>
	);
});

export default React.memo(Index);
