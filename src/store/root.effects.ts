import {
  all,
  fork,
} from 'redux-saga/effects';
import { accountSaga } from './account/account.effect';

export default function* rootSaga() {
  yield all([
    fork(accountSaga),
  ]);
}
