import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Layout } from 'antd';
import SuspenseFallbackLoading from './SuspenseFallbackLoading';
import MainHeader from './main/MainHeader';
import MainMenu from './main/MainMenu';

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
      <MainMenu />
      <Layout>
        <MainHeader />
        <Content style={{ padding: '0 20px' }}>
          <Suspense fallback={<SuspenseFallbackLoading />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}
