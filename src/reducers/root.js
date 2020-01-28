import { combineReducers } from 'redux';
import RouteReducer from 'reducers/RouteReducer';
import ModalReducer from 'reducers/ModalReducer';
import IconItemReducer from 'reducers/IconItemReducer';

export default () =>
  combineReducers({
    routes: RouteReducer,
    modals: ModalReducer,
    iconItems: IconItemReducer,
  });
