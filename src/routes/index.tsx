import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const SignIn = lazy(() => import('../pages/SignIn'));

const Routes: React.FC = () => (
  <Suspense fallback={<h1>CARREGANDO...</h1>}>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
