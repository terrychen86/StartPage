// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import Icon from 'components/Icon';
import type { IconItem } from 'types/IconItem';
import TextField from '@material-ui/core/TextField';
import spaces from 'utils/spaces';

type Props = {|
  iconItem: IconItem,
  onIconItemChange: IconItem => void,
|};

const CreateIconPanel = (props: Props): React.Node => {
  const { iconItem, onIconItemChange } = props;
  const { name, url, iconUrl } = iconItem;
  const handleNameChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    onIconItemChange({
      ...iconItem,
      name: value,
    });
  };

  const handleUrlChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    onIconItemChange({
      ...iconItem,
      url: value,
    });
  };

  const handleIconUrlChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    onIconItemChange({
      ...iconItem,
      iconUrl: value,
    });
  };

  return (
    <Box display="flex" alignItems="center" p={spaces.sm}>
      <Box flex="0 0 auto" textAlign="center">
        <Icon name={iconItem.name} url={iconItem.iconUrl} />
      </Box>
      <Box flex="1 1 auto">
        <Box maxWidth="275px" mx="auto">
          <Box my={spaces.xxs}>
            <TextField label="Name" size="small" fullWidth value={name} onChange={handleNameChange} />
          </Box>
          <Box my={spaces.xxs}>
            <TextField label="Url" size="small" fullWidth value={url} onChange={handleUrlChange} />
          </Box>
          <Box my={spaces.xxs}>
            <TextField label="Icon" size="small" fullWidth value={iconUrl} onChange={handleIconUrlChange} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateIconPanel;
