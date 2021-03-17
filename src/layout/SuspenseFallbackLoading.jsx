import { Spin, Alert } from 'antd';

const SuspenseFallbackLoading = () => {
  return (
    <Spin tip='加载中...'>
      <Alert
        message='加载中。。。'
        description='Further details about the context of this alert.'
        type='info'
      />
    </Spin>
  );
};

export default SuspenseFallbackLoading;
