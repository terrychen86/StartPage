// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import IconSpeedDial from 'components/IconSpeedDial';
import ModalLoader from 'components/ModalLoader';

import { useSelector } from 'react-redux';
import { renderPage } from 'routes/routes';
import type { State as RouteState } from 'reducers/RouteReducer';

const App = (): React.Node => {
  const { route }: RouteState = useSelector(state => state.routes);

  return (
    <Box height="100vh" minWidth="1024px" minHeight="640px" overflow="hidden">
      {renderPage(route)}
      <ModalLoader />
      <IconSpeedDial />
    </Box>
  );
};

export default App;
