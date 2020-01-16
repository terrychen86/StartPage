// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';

import spaces from '../utils/spaces';
import DroppablePanel from '../components/DroppablePanel';
import background from '../images/background.jpg';

const Main = (): React.Node => {
  return (
    <Box position="relative" width="100%" height="100%" px={spaces.xxl} py={spaces.xl}>
      <Box position="absolute" left="0" right="0" top="0" bottom="0" zIndex="1" overflow="hidden">
        <Box component="img" alt="bg" src={background} />
      </Box>
      <Box position="relative" height="100%" zIndex="2">
        <DroppablePanel />
      </Box>
    </Box>
  );
};

export default Main;
