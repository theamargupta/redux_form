import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Login = React.lazy(() => import('../container/Login'));
const NotFound = React.lazy(() => import('../container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
