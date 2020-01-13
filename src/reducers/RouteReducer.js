// @flow

import type { RouteActions } from '../actions/RouteActions';
import { UPDATE_ROUTE } from '../actions/RouteActions';

export type State = {
  route: string,
};

const ROUTE_ACTION_TYPE_DEFAULT_STATE: State = {
  route: "index",
};

const RouteReducer = (
  state: State = ROUTE_ACTION_TYPE_DEFAULT_STATE,
  action: RouteActions
): State => {
  const { type, route} = action;
  switch (type) {
    case UPDATE_ROUTE: {
      return {
        route,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default RouteReducer;
