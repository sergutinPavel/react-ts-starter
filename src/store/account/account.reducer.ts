import { ActionTypes } from './account.actions';
import { IAccountState } from './account.models';


export const initialState: IAccountState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export function reducer(state: IAccountState = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, loading: true, error: null };
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, token: action.payload.token };
    case ActionTypes.LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case ActionTypes.LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}

export const getToken = (state: IAccountState) => state.token;
export const getUser = (state: IAccountState) => state.user;
