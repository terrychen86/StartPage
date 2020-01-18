// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { renderPage } from 'routes/routes';

const App = (): React.Node => {
  const routes = useSelector(state => state.routes);
  const { route } = routes;

  return (
    <Box height="100vh" minWidth="1024px" minHeight="640px">
      {renderPage(route)}
    </Box>
  );
};

export default App;
