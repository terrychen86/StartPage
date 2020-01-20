import { combineReducers } from 'redux';
import RouteReducer from 'reducers/RouteReducer';
import ModalReducer from 'reducers/ModalReducer';

export default () =>
  combineReducers({
    routes: RouteReducer,
    modals: ModalReducer,
  });
