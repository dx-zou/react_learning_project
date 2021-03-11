import { Result, Button } from 'antd';
import { useNavigate } from 'react-router';
export default function Index() {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button
            type='primary'
            onClick={() => {
              navigate('/');
            }}
          >
            Back Home
          </Button>
        }
      />
      ,
    </div>
  );
}
