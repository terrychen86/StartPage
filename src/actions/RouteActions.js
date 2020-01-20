// @flow

export const ROUTE_ACTIONS = {
  UPDATE_ROUTE: 'UPDATE_ROUTE',
};

export const ROUTES = {
  INDEX: 'INDEX',
  SETTING: 'SETTING',
};

export type RouteType = $Keys<typeof ROUTES>;

export type RouteActionType = {|
  +type: $Keys<typeof ROUTE_ACTIONS>,
  +route: RouteType,
|};
