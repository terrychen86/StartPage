import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { SnackbarProvider } from 'notistack';
import Backend from 'react-dnd-html5-backend';

import './index.scss';
import App from './App';

import configureStore from './store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={2} autoHideDuration={3000}>
      <DndProvider backend={Backend}>
        <App />
      </DndProvider>
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
);
