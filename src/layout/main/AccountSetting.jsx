/**
 * 账户设置组件
 */
import { useEffect, useState } from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined, TranslationOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import { useAppState, useAppDispatch } from '@/store';
import { setLocale } from '@/store/reducers/setting';
import avatar from '@/assets/images/avatar.jpg';

const AccountSetting = () => {
  const { formatMessage } = useIntl();
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
        {formatMessage({ id: 'app.setting.user' })}
      </Menu.Item>
      <Menu.Item icon={<TranslationOutlined />} key='lang'>
        {langText}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <div className='flex-bc'>
        <Avatar src={avatar} alt='头像' size='large' />
        <span className='avatar-name'>任我行</span>
      </div>
    </Dropdown>
  );
};

export default AccountSetting;
