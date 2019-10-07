import { combineReducers } from 'redux';
import {
  routerReducer,
  RouterState,
} from 'react-router-redux';
import { createSelector } from 'reselect';
import { IAccountState } from './account/account.models';
import * as accountReducer from './account/account.reducer';
import { IGeneralState } from './general/general.models';
import * as generalReducer from './general/general.reducer';


export interface IApplicationState {
  readonly account: IAccountState;
  readonly general: IGeneralState;
  readonly routing: RouterState;
}

export default combineReducers<IApplicationState>({
  account: accountReducer.reducer,
  general: generalReducer.reducer,
  routing: routerReducer,
});

// selectors
// IAccountState
export const getAccountState = (state: IApplicationState): IAccountState => state.account;
export const selectUser = createSelector(getAccountState, accountReducer.getUser);
export const selectToken = createSelector(getAccountState, accountReducer.getToken);
// IGeneralState
export const getGeneralState = (state: IApplicationState): IGeneralState => state.general;
export const selectIsSidebarExpanded = createSelector(getGeneralState, generalReducer.getIsSidebarExpanded);
export const selectExampleData = createSelector(getGeneralState, generalReducer.getExampleData);
