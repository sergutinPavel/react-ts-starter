import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store, { history } from './store';

export const AppComponent: FC<any> = ({ children }) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);
