// @flow strict

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { renderPage } from 'routes/routes';
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Message from 'components/Message';
import IconSpeedDial from 'components/IconSpeedDial';
import ModalLoader from 'components/ModalLoader';
import theme from 'themes/theme';
import { requestIconItems } from 'actions/IconItemActions';
import type { State as RouteState } from 'reducers/RouteReducer';
import type { ReduxState, Dispatch } from 'types/Redux';

const App = (): React.Node => {
  const { route }: RouteState = useSelector<ReduxState, $ElementType<ReduxState, 'routes'>>(state => state.routes);
  const dispatch = useDispatch<Dispatch>();

  React.useEffect(() => {
    dispatch(requestIconItems());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" minWidth="1024px" minHeight="640px" overflow="hidden">
        {renderPage(route)}
        <ModalLoader />
        <Message />
        <IconSpeedDial />
      </Box>
    </ThemeProvider>
  );
};

export default App;
