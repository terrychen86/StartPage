// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Icon from 'components/Icon';
import type { IconItem } from 'types/IconItem';

type Props = {|
  iconItem: IconItem,
  onIconItemChange: IconItem => void,
|};

const CreateIconPanel = (props: Props): React.Node => {
  /* eslint-disable-next-line no-unused-vars */
  const { iconItem, onIconItemChange } = props;
  return (
    <Box>
      <Icon name={iconItem.name} url={iconItem.iconUrl} />
    </Box>
  );
};

export default CreateIconPanel;
