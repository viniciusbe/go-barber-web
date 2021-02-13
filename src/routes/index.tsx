import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Loading from '../pages/Loading';

const SignIn = React.lazy(() => import('../pages/SignIn'));
const SignUp = React.lazy(() => import('../pages/SignUp'));
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'));

const Profile = React.lazy(() => import('../pages/Profile'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const NotFound = React.lazy(() => import('../pages/NotFound'));

const Routes: React.FC = () => (
  <Suspense fallback={<Loading />}>
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
