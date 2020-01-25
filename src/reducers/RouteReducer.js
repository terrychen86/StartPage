// @flow

import { ROUTES, ROUTE_ACTIONS, type RouteType, type RouteActionType } from 'actions/RouteActions';

export type State = {
  route: RouteType,
};

const ROUTE_ACTION_TYPE_DEFAULT_STATE: State = {
  route: ROUTES.INDEX,
};

const RouteReducer = (state: State = ROUTE_ACTION_TYPE_DEFAULT_STATE, action: RouteActionType): State => {
  const { type, route } = action;
  switch (type) {
    case ROUTE_ACTIONS.UPDATE_ROUTE: {
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
