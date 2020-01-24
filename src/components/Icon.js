// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import * as colors from 'utils/colors';
import spaces from 'utils/spaces';
import fetchIcon from 'utils/fetchIcon';

type Props = {|
  +name: string,
  +src: string,
|};

const Icon = (props: Props): React.Node => {
  const { name, src } = props;

  return (
    <Box width="150px" height="165px" textAlign="center">
      <Box
        mx="auto"
        my="0"
        width="80px"
        height="80px"
        bgcolor={colors.nearWhite}
        borderRadius="20px"
        boxShadow="2px 2px 6px 2px rgba(0,0,0,0.1)"
      >
        <Box p={spaces.sm}>
          <Box component="img" width="100%" src={src || fetchIcon('defaultIcon')} alt={name} />
        </Box>
      </Box>
      {name && (
        <Box
          display="inline-block"
          maxWidth="120px"
          maxHeight="55px"
          my={spaces.xs}
          mx="auto"
          px={spaces.sm}
          py={spaces.tiny}
          borderRadius="8px"
          color={colors.white}
          bgcolor="rgba(0, 0, 0, 0.5)"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          <Typography align="center" variant="button" color="inherit">
            {name}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Icon;
