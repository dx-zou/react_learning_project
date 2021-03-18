import { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import PermissionRoute from './PermissionRoute';
import { useIntl } from 'react-intl';
export interface SwitchRouteProps extends RouteProps {
  titleId?: string;
  auth?: boolean;
  title?: string;
}
const SwitchRoute: FC<SwitchRouteProps> = ({
  auth = true,
  title = 'menu.dashboard',
  ...props
}) => {
  const { formatMessage } = useIntl();
  document.title = `${formatMessage({ id: title })} - ${formatMessage({
    id: 'app.title',
  })}`;
  const WitchRoute = auth ? PermissionRoute : Route;
  return <WitchRoute {...props} />;
};

export default SwitchRoute;
