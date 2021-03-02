import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import PermissionRoute from './PermissionRoute';

export interface SwitchRouteProps extends RouteProps {
  titleId?: string;
  auth?: boolean;
  title?: string;
}
const SwitchRoute: FC<SwitchRouteProps> = ({
  titleId,
  auth = true,
  title = '',
  ...props
}) => {
  document.title = title;
  const WitchRoute = auth ? PermissionRoute : Route;
  return <WitchRoute {...props} />;
};

export default SwitchRoute;
