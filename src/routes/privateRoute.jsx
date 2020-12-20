import React, { useState } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { Result, Button } from 'antd';
// import { useLocale } from 'locales';
import { useLocation } from 'react-router';
// import { useAppState } from '../store';

const PrivateRoute = props => {
	// const { logged } = useAppState(state => state.user);
	const [logged] = useState(true);
	const navigate = useNavigate();
	// const { formatMessage } = useLocale();
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
					onClick={navigate('/login', {
						replace: true,
						state: { from: location.pathname },
					})}
				>
					请登录
				</Button>
			}
		/>
	);
};

export default PrivateRoute;
