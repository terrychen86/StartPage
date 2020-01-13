import { combineReducers } from 'redux';
import RouteReducer from './RouteReducer';


export default () => combineReducers({
  routes: RouteReducer,
});