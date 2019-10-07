import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  IHeaderProps,
  IHeaderState
} from './index';



class AppHeaderComponent extends Component<IHeaderProps, IHeaderState> {
  goBack = (): void => {
    this.props.history.goBack();
  };

  navigateTo = (path: string): void => {
    this.props.history.push(path);
  };

  render() {
    return (
      <header className={`app-layout__header`}>
        <nav className='top-nav'>
          <NavLink className={'top-nav__link'}
                   to="/home"
                   activeClassName={'active'}>
            Home
          </NavLink>
          <NavLink className={'top-nav__link'}
                   to="/settings"
                   activeClassName={'active'}>
            Settings
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default AppHeaderComponent;
