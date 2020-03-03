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

const CreateWebsitePanel = (props: Props): React.Node => {
  const { iconItem, onIconItemChange } = props;
  const { name, url, iconSrc } = iconItem;
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

  const handleIconSrcChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    onIconItemChange({
      ...iconItem,
      iconSrc: value,
    });
  };

  return (
    <Box display="flex" p={spaces.sm}>
      <Box flex="0 0 auto" textAlign="center" pt={spaces.md}>
        <Icon name={iconItem.name} src={iconItem.iconSrc} />
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
            <TextField label="Icon" size="small" fullWidth value={iconSrc} onChange={handleIconSrcChange} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateWebsitePanel;
