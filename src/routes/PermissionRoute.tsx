/**
 * @description 登录验证路由
 *
 */
import React, { useState, FC, useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { useLocation, RouteProps } from 'react-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 默认配置
NProgress.configure({
  speed: 500,
  showSpinner: false,
  trickle: true,
  trickleSpeed: 200,
  easing: 'ease',
  parent: 'body',
  minimum: 0.1,
});

// import { useAppState } from '../store';

const PermissionRoute: FC<RouteProps> = props => {
  // const { logged } = useAppState(state => state.user);
  const [logged] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // NProgress 加载条
  useEffect(() => {
    NProgress.done();
    return () => {
      NProgress.start();
    };
  });
  return logged ? (
    <Route {...props} />
  ) : (
    <Result
      status='403'
      title='403'
      subTitle='forbidden'
      extra={
        <Button
          type='primary'
          onClick={() =>
            navigate('/login', {
              replace: true,
              state: { from: location.pathname },
            })
          }
        >
          请登录
        </Button>
      }
    />
  );
};

export default PermissionRoute;
