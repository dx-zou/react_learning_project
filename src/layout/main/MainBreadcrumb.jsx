import { Breadcrumb } from 'antd';
import { useAppState } from '../../store';
import { useIntl } from 'react-intl';
const { Item } = Breadcrumb;

const MainBreadcrumb = () => {
  const { formatMessage } = useIntl();
  const { breadcrumbs } = useAppState(state => state.setting);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Item>{formatMessage({ id: 'app.breadcrumbs.location' })}</Item>
      {breadcrumbs.map(b => (
        <Item key={b}>{formatMessage({ id: b })}</Item>
      ))}
    </Breadcrumb>
  );
};

export default MainBreadcrumb;
