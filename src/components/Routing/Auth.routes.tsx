import * as React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { SignInPage } from '../../pages/Auth/SignIn.page';
import { SignUpPage } from '../../pages/Auth/SignUp.page';


export const AuthRoutes = (props: any) => {
  return (
    <Switch>
      <Redirect from="/auth" to="/auth/sign-in" exact={true} />
      {/*<Route path="/auth" component={AuthPage} exact={true} />*/}
      <Route path="/auth/sign-in" component={SignInPage} />
      <Route path="/auth/sign-up" component={SignUpPage} />
      {/*<Route path="/auth/forgot" component={ForgotPwdPage} />*/}
      <Redirect to="/auth" />
    </Switch>
  );
};
