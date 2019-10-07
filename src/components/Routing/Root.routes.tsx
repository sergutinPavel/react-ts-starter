import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router';
import { AppHeader } from '../AppHeader';
import HomePage from '../../pages/Home/Home.page';
import { SettingsPage } from '../../pages/Settings/Settings.page';
import { NotFound } from '../../pages/NotFound/NotFound.page';


interface IProps {
  readonly [key: string]: any;
}
export const RootRoutes = (props: IProps) => {
  return (
    <>
      <div className="app-layout__page">
        <Switch>

            <Route path="/home" component={HomePage} exact={true} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" to="/home" exact={true} />

        </Switch>
      </div>
      <AppHeader {...props} />
    </>
  );
};
