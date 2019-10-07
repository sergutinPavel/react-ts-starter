/* tslint:disable:jsx-no-lambda */
import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

export const PrivateRoute: React.FC<any> = ({ component: Component, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/auth/sign-in',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
