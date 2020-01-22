// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Icon from 'components/Icon';
import spaces from 'utils/spaces';
import iconData from 'data/iconData';

const CreateIconPanel = (): React.Node => {
  return (
    <Box display="flex" alignItems="center" p={spaces.xs} flexWrap="wrap" maxHeight="375px">
      {iconData.map(icon => (
        <Box py={spaces.xxs} data-id={icon.id} key={icon.id} flex="0 1 33%" width="33%" height="175px">
          <Icon name={icon.name} src={icon.iconSrc} />
        </Box>
      ))}
    </Box>
  );
};

export default CreateIconPanel;
