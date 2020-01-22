import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
