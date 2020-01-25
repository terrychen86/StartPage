// @flow

import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Icon from 'components/Icon';
import spaces from 'utils/spaces';
import iconData from 'data/iconData';

import type { IconItem } from 'types/IconItem';

const CreateIconPanel = (): React.Node => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filteredIcons, setFilteredIcons] = React.useState<Array<IconItem>>(iconData);

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setSearchQuery(value);
    setFilteredIcons(iconData.filter(icon => icon.name.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <Box minHeight="576px">
      <Box textAlign="right" pb={spaces.xs} pr={spaces.xl}>
        <TextField
          label="Search"
          value={searchQuery}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box display="flex" alignItems="center" p={spaces.xs} flexWrap="wrap" hight="500px" maxHeight="500px" mx="auto">
        {filteredIcons.map(icon => (
          <Box
            py={spaces.xxs}
            data-id={icon.id}
            key={icon.id}
            flex="0 1 25%"
            width="25%"
            height="175px"
            display="flex"
            justifyContent="center"
          >
            <Icon name={icon.name} src={icon.iconSrc} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreateIconPanel;
