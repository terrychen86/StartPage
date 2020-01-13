import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers/root';

const configureStore = () => {
  const store = createStore(
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers/root', () => {
      const nextRootReducer = createRootReducer();
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;