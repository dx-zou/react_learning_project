/**
 * 头部导航组件
 */
import { useEffect, useState } from 'react';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, TranslationOutlined } from '@ant-design/icons';
import MainBreadcrumb from './MainBreadcrumb';
import avatar from '@/assets/images/avatar.jpg';
import { useAppState, useAppDispatch } from '@/store';
import { setLocale } from '@/store/reducers/setting';
const { Header } = Layout;

export default function MainHeader() {
  const dispatch = useAppDispatch();
  const { locale } = useAppState(state => state.setting);
  const [langText, setLangText] = useState('English');
  const handleSelect = ({ key }) => {
    if (key === 'lang') {
      if (locale === 'en_US') {
        dispatch(setLocale({ locale: 'zh_CN' }));
      } else {
        dispatch(setLocale({ locale: 'en_US' }));
      }
    }
  };
  useEffect(() => {
    if (locale === 'en_US') {
      setLangText('中文');
    } else {
      setLangText('English');
    }
  }, [locale]);
  const menu = (
    <Menu onClick={handleSelect}>
      <Menu.Item icon={<UserOutlined />} key='user'>
        个人中心
      </Menu.Item>
      <Menu.Item icon={<TranslationOutlined />} key='lang'>
        {langText}
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className='main-header'>
      <MainBreadcrumb />
      <div>
        <Dropdown overlay={menu}>
          <Avatar src={avatar} alt='头像' size='large' />
        </Dropdown>
      </div>
    </Header>
  );
}
