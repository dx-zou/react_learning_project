import CommonTable from '@/components/CommonTable';
import { useRef } from 'react';
import { Form, Input, Button } from 'antd';

const columns = [
  {
    dataIndex: 'name',
    title: '姓名',
  },
  {
    dataIndex: 'age',
    title: '年龄',
  },
  {
    dataIndex: 'address',
    title: '地址',
  },
];
const SearchTable = () => {
  const ref = useRef();
  const renderSearchForm = [
    <Form.Item label='姓名' name='name'>
      <Input />
    </Form.Item>,
    <Form.Item label='年龄' name='age'>
      <Input />
    </Form.Item>,
    <Form.Item label='地址' name='address'>
      <Input />
    </Form.Item>,
    <Form.Item label='地址' name='address1'>
      <Input />
    </Form.Item>,
    <Form.Item label='地址' name='address2'>
      <Input />
    </Form.Item>,
    <Form.Item label='地址' name='address3'>
      <Input />
    </Form.Item>,
    <Form.Item label='地址' name='address4'>
      <Input />
    </Form.Item>,
  ];
  const renderActionBar = [
    <Button type='primary' key='add'>
      新增
    </Button>,
  ];
  return (
    <CommonTable
      ref={ref}
      columns={columns}
      renderSearchForm={renderSearchForm}
      renderActionBar={renderActionBar}
    />
  );
};

export default SearchTable;
