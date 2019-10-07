import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import { AuthRoute } from './AuthRoute.component';
import { PrivateRoute } from './PrivateRoute.component';
import { AuthRoutes } from './Auth.routes';
import { RootRoutes } from './Root.routes';


interface IProps {
  readonly [key: string]: any;
}
export const RouterComponent: React.FC<IProps> = (props) => {
  // const { isAuthorised } = props;
  const isAuthorised = true;
  return (
    <div className="app-layout">
      <Switch>
        <AuthRoute path="/auth" component={AuthRoutes} isAuthorized={isAuthorised} />
        <PrivateRoute path="/" component={RootRoutes} isAuthorized={isAuthorised} />
      </Switch>
    </div>
  );
};
