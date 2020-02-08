// @flow strict

import { combineReducers, type Action } from 'redux';
import RouteReducer, { type State as RouteState } from 'reducers/RouteReducer';
import ModalReducer, { type State as ModalState } from 'reducers/ModalReducer';
import IconItemReducer, { type State as IconItemState } from 'reducers/IconItemReducer';

export type ReduxState = {|
  +routes: RouteState,
  +modals: ModalState,
  +iconItems: IconItemState,
|};

type CreateRootReducer = () => (ReduxState | void, Action<any>) => ReduxState;

const createRootReducer: CreateRootReducer = () =>
  combineReducers({
    routes: RouteReducer,
    modals: ModalReducer,
    iconItems: IconItemReducer,
  });

export default createRootReducer;
