import {
  createStore,
  applyMiddleware,
  Store,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import RootReducer, { IApplicationState } from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.effects';


export const history = createBrowserHistory();
const routingMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware, routingMiddleware];

if ((process.env as any).NODE_ENV !== 'production') {
  middleware = [...middleware, createLogger()];
}

const createApplicationStore: Store<IApplicationState> = (() => {
  const store: any = createStore(
    RootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
  );
  sagaMiddleware.run(rootSaga);

  return store;
})();

export default createApplicationStore;
