import { Route, Switch } from 'react-router-dom';
import routes from './routes';

function RouteWithSubRoutes(route) {
  const { path, exact } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
export function RenderRoutes() {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
    </Switch>
  );
}
