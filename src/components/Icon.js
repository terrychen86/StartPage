// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import * as colors from 'utils/colors';
import spaces from 'utils/spaces';

type Props = {|
  +name: string,
  +url: string,
|};

const Icon = (props: Props): React.Node => {
  const { name, url } = props;

  return (
    <Box width="150px" textAlign="center">
      <Box
        mx="auto"
        my="0"
        width="80px"
        height="80px"
        bgcolor={colors.white}
        borderRadius="20px"
        boxShadow="4px 4px 16px 8px rgba(0,0,0,0.1)"
      >
        <Box p={spaces.sm}>
          <Box component="img" width="100%" src={url} alt={name} />
        </Box>
      </Box>
      <Box
        display="inline-block"
        maxWidth="125px"
        my={spaces.xs}
        mx="auto"
        px={spaces.sm}
        py={spaces.tiny}
        borderRadius="8px"
        bgcolor="rgba(0, 0, 0, 0.5)"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        <Typography align="center" variant="button">
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default Icon;
