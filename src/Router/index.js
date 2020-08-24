import React from 'react';
import { Route, Switch } from 'react-router-dom';
const Login = React.lazy(() => import('../container/Login'));
const Home = React.lazy(() => import('../container/Home'));
const SignUp = React.lazy(() => import('../container/SignUp'));
const NotFound = React.lazy(() => import('../container/NotFound'));

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default AppRouter;
