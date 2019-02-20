import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { logger } from 'app/middleware';
import { RootState, rootReducer } from 'app/reducers';
import initialize from 'app/actions/initialize';
import { createHashHistory } from 'history'

export const history =  createHashHistory({
  hashType: 'slash'
})

export function configureStore(initialState?: RootState): Store<RootState> {
  let middleware = applyMiddleware(routerMiddleware(history), thunk, logger);

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(
    rootReducer(history) as any,
    initialState as any,
    middleware
  ) as Store<RootState>;

  initialize(store.dispatch);

  if (module.hot) {
    module.hot.accept('app/reducers', () => {
      const nextReducer = require('app/reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
