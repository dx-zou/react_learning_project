import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Layout } from 'antd';
import SuspenseFallbackLoading from './SuspenseFallbackLoading';
import MainHeader from './main/MainHeader';
// import MainBreadcrumb from './main/MainBreadcrumb';

const { Content } = Layout;

export default function Index() {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		if (location.pathname === '/') {
			navigate('/dashboard');
		}
	}, [navigate, location]);
	return (
		<Layout>
			<MainHeader />
			<Content style={{ padding: '10px 20px', marginTop: 64 }}>
				{/* <MainBreadcrumb /> */}
				<Suspense fallback={<SuspenseFallbackLoading />}>
					<Outlet />
				</Suspense>
				{/* <Layout
					className='site-layout-background'
					style={{ padding: '15px 0' }}
				>
					<Content style={{ padding: '0 15px', minHeight: 280 }}>
						
					</Content>
				</Layout> */}
			</Content>
		</Layout>
	);
}
