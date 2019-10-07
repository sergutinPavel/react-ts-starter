/* tslint:disable:jsx-no-lambda */
import * as React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';


export const AuthRoute: React.FC<any> = ({ component: Component, is_authorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        is_authorized ? (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: props.location },
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
