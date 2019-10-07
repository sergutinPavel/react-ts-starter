/* tslint:disable:jsx-no-lambda */
import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';


export const AuthRoute: React.FC<any> = ({ component: Component, isAuthorized, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthorized ? (
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
