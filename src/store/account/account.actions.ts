import { action } from 'typesafe-actions';


export enum ActionTypes {
    LOGIN = '[account] LOGIN',
    LOGIN_SUCCESS = '[account] LOGIN_SUCCESS',
    LOGIN_ERROR = '[account] LOGIN_SUCCESS',
    LOGOUT = '[account] LOGOUT',
}

export const LoginAction = (payload?: any) => {
  return action(ActionTypes.LOGIN, payload);
};
export const LoginActionSuccess = (payload?: any) => {
  return action(ActionTypes.LOGIN_SUCCESS, payload);
};
export const LoginActionError = (payload?: any) => {
  return action(ActionTypes.LOGIN_ERROR, payload);
};

export const LogoutAction = (payload?: any) => {
  return action(ActionTypes.LOGOUT, payload);
};
