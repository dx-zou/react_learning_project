import { Breadcrumb } from 'antd';
// import { useLocation } from 'react-router';
import { useAppState } from '../../store';
const { Item } = Breadcrumb;

const MainBreadcrumb = () => {
  const { breadcrumbs } = useAppState(state => state.setting);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Item>当前位置</Item>
      {breadcrumbs.map(b => (
        <Item key={b}>{b}</Item>
      ))}
    </Breadcrumb>
  );
};

export default MainBreadcrumb;
