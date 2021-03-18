import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { lacaleConfig } from './locales';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import RenderRouter from './routes';
import { useAppState } from './store';

const App = () => {
  const { locale } = useAppState(state => state.setting);
  useEffect(() => {
    if (locale === 'en_US') {
      moment.locale('en');
    } else if (locale === 'zh_CN') {
      moment.locale('zh-cn');
    }
  }, [locale]);

  const getAntdLocale = () => {
    return locale === 'en_US' ? enUS : zhCN;
  };

  return (
    <ConfigProvider locale={getAntdLocale()} componentSize='middle'>
      <IntlProvider
        locale={locale.split('_')[0]}
        messages={lacaleConfig[locale]}
      >
        <Router>
          <RenderRouter />
        </Router>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
