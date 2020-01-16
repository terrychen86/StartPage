// @flow

export const UPDATE_ROUTE: string = 'UPDATE_ROUTE';

export type RouteActions = {
  type: string,
  route: string,
};

export const updateRoute = (route: string): RouteActions => ({
  type: UPDATE_ROUTE,
  route,
});
