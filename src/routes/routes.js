// @flow

import * as React from 'react';
import Main from '../layouts/Main';

export type Route = {
  [string]: React.Node,
};

export const routes: Route = {
  index: <Main />,
};

export const renderPage = (route: string): React.Node => routes[route] || <></>;

export default routes;
