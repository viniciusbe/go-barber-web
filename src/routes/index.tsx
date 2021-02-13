import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Loading from '../pages/Loading';

const SignIn = lazy(() => import('../pages/SignIn'));
const SignUp = lazy(() => import('../pages/SignUp'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const ResetPassword = lazy(() => import('../pages/ResetPassword'));

const Profile = lazy(() => import('../pages/Profile'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const NotFound = lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <Suspense fallback={Loading}>
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
