import {
  put,
  takeLatest,
  // select,
} from 'redux-saga/effects';
import { ActionTypes } from './account.actions';
import { API } from '../../utils/ApiCall';
import { history } from '../';


function* loginSaga(action: any) {
  try {
    const data = yield API({
      url: '/login',
      params: action.payload,
    });

    history.push('/home');
    yield put({ type: ActionTypes.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: ActionTypes.LOGIN_ERROR, payload: error });
  }
}

export function* accountSaga() {
  yield takeLatest(ActionTypes.LOGIN, loginSaga);
}
