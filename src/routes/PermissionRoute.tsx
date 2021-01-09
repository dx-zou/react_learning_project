/**
 * @description 登录验证路由
 */
import React, { useState, FC } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
import { useLocation, RouteProps } from 'react-router';
// import { useAppState } from '../store';

const PermissionRoute: FC<RouteProps> = props => {
	// const { logged } = useAppState(state => state.user);
	const [logged] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();
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
