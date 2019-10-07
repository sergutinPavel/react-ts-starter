import './styles/index.scss';

import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { AppComponent } from './App.component';
import { RouterComponent } from './components/Routing/Router.component';
import * as serviceWorker from './serviceWorker';


let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c344e',
    },
    secondary: {
      main: '#f1ddcf',
    },
  },
  typography: {
    button: {
      fontSize: '1.6rem',
    }
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AppComponent>
      <RouterComponent />
    </AppComponent>
  </MuiThemeProvider>,
  document.getElementById('react-app-root') as HTMLElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
