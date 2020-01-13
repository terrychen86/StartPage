// @flow

import * as React from 'react';
import Index from '../layouts/Index';

export type Route = {
  [string]: React.Node,
}

export const routes: Route = {
  "index": <Index />,
};

export const renderPage = (route: string): React.Node => (
  routes[route] || <></>
)

export default routes;
