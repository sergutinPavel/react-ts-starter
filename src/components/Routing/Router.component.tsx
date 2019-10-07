import * as React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { AuthRoute } from './AuthRoute.component';
import { AuthRoutes } from './Auth.routes';
import { RootRoutes } from './Root.routes';


interface IProps {
  readonly [key: string]: any;
}
export const RouterComponent: React.FC<any> = (props: IProps) => {
  // const { isAuthorised } = props;
  const isAuthorised = true;
  return (
    <div className="app-layout">
      <Switch>
        <AuthRoute path="/auth" component={AuthRoutes} is_authorized={isAuthorised} />
        <Route path="/" component={RootRoutes} />
      </Switch>
    </div>
  );
};
