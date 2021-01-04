import React, { FC, useState, useEffect } from 'react';
import {
	Modal,
	Form,
	Input,
	Select,
	Row,
	Col,
	DatePicker,
	Switch,
	Space,
	notification,
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
const { Option } = Select;
const layout = {
	labelCol: {
		span: 3,
	},
	wrapperCol: {
		span: 21,
	},
};

interface Props {
	visible: boolean;
	onCancel: Function;
	onOk: Function;
}
const formData = { names: [''], list: [{ first: '', last: '' }] };
const CommonForm: FC<Props> = props => {
	const { visible, onCancel, onOk } = props;
	const [form] = Form.useForm();
	const [title] = useState('新增');
	const [initialValues] = useState(formData);
	useEffect(() => {
		console.log('加载了。。。。。。。');
	});
	// 保存表单
	const handleSaveForm = async () => {
		try {
			// 表单校验
			const values = await form.validateFields();
			console.log(values);
			onOk();
		} catch {}
	};
	// 关闭弹窗
	const handleCloseModal = () => {
		form.resetFields();
		onCancel();
	};
	return (
		<Modal
			width='50vw'
			title={
				<div
					style={{
						width: '100%',
						cursor: 'move',
					}}
				>
					{title}
				</div>
			}
			visible={visible}
			onOk={handleSaveForm}
			onCancel={handleCloseModal}
			modalRender={modal => <Draggable>{modal}</Draggable>}
		>
			<Form
				{...layout}
				form={form}
				initialValues={initialValues}
				scrollToFirstError
			>
				<Form.Item
					name='name'
					label='姓名'
					rules={[{ required: true }]}
					tooltip='中文姓名'
				>
					<Input allowClear placeholder='姓名' />
				</Form.Item>
				<Form.Item
					name='gender'
					label='Gender'
					rules={[
						{
							required: true,
						},
					]}
				>
					<Select
						placeholder='Select a option and change input text above'
						allowClear
					>
						<Option value='male'>male</Option>
						<Option value='female'>female</Option>
						<Option value='other'>other</Option>
					</Select>
				</Form.Item>
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item
							labelCol={{ span: 6 }}
							wrapperCol={{ span: 18 }}
							label='时间'
							name='startTime'
							rules={[{ required: true }]}
						>
							<DatePicker style={{ width: '100%' }} />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							labelCol={{ span: 6 }}
							wrapperCol={{ span: 18 }}
							name='switch'
							label='开关'
							rules={[
								{
									required: true,
								},
							]}
						>
							<Switch />
						</Form.Item>
					</Col>
				</Row>
				<Form.List name='names'>
					{(fields, { add, remove }, { errors }) => (
						<>
							{fields.map((field, index) => (
								<Form.Item
									label={index === 0 ? 'Passengers' : ''}
									{...(index === 0
										? null
										: {
												wrapperCol: {
													span: 24,
													offset: 3,
												},
										  })}
									required
									key={field.name}
								>
									<Form.Item
										{...field}
										validateTrigger={['onChange', 'onBlur']}
										rules={[
											{
												required: true,
												whitespace: true,
												message:
													"Please input passenger's name or delete this field.",
											},
										]}
										noStyle
									>
										<Input
											placeholder='passenger name'
											style={{ width: '60%' }}
										/>
									</Form.Item>
									<Space>
										{fields.length > 1 ? (
											<MinusCircleOutlined
												className='dynamic-delete-button'
												onClick={() => remove(field.name)}
											/>
										) : null}
										<PlusOutlined
											className='dynamic-delete-button'
											onClick={() => {
												if (fields.length > 2) return;
												add();
											}}
										/>
									</Space>
								</Form.Item>
							))}
						</>
					)}
				</Form.List>
				<Form.List name='list'>
					{(fields, { add, remove }) => (
						<>
							{fields.map((field, index) => (
								<Row key={field.name} gutter={16}>
									<Col span={12}>
										<Form.Item
											{...field}
											label={index === 0 ? '姓名' : ''}
											{...(index === 0
												? {
														labelCol: { span: 6 },
														wrapperCol: { span: 18 },
												  }
												: {
														wrapperCol: {
															span: 24,
															offset: 6,
														},
												  })}
											validateTrigger={['onChange', 'onBlur']}
											rules={[
												{
													required: true,
													whitespace: true,
													message: '请输入姓氏',
												},
											]}
											name={[field.name, 'first']}
											fieldKey={[field.name, 'first']}
										>
											<Input placeholder='user' style={{ width: '100%' }} />
										</Form.Item>
									</Col>
									<Col span={8}>
										<Form.Item
											{...field}
											wrapperCol={{ span: 24 }}
											validateTrigger={['onChange', 'onBlur']}
											rules={[
												{
													required: true,
													whitespace: true,
													message: '请输入名称',
												},
											]}
											name={[field.name, 'last']}
											fieldKey={[field.name, 'last']}
										>
											<Input placeholder='username' style={{ width: '100%' }} />
										</Form.Item>
									</Col>
									<Col span={4}>
										<Space>
											{fields.length > 1 ? (
												<MinusCircleOutlined
													className='dynamic-delete-button'
													onClick={() => remove(field.name)}
												/>
											) : null}
											<PlusOutlined
												className='dynamic-delete-button'
												onClick={() => {
													if (fields.length > 2) {
														notification.warn({
															message: '提示',
															description: '最多添加三条',
														});
														return;
													}
													add();
												}}
											/>
										</Space>
									</Col>
								</Row>
							))}
						</>
					)}
				</Form.List>
			</Form>
		</Modal>
	);
};

export default CommonForm;
