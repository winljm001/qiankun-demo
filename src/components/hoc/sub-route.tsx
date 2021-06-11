import React from 'react';
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config';
import { useLocation, matchPath } from 'react-router';

function subRoute<T extends RouteConfigComponentProps>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const location = useLocation();
    if (matchPath(location.pathname, { ...props.route, exact: true })) {
      return <Component {...props} />;
    }
    return renderRoutes(props.route.routes);
  };
}

export default subRoute;
