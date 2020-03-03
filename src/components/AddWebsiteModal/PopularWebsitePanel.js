// @flow strict

import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import Icon from 'components/Icon';
import spaces from 'utils/spaces';
import iconData from 'data/iconData';

import { updateIconItems } from 'actions/IconItemActions';
import type { ReduxState, Dispatch } from 'types/Redux';
import type { IconItem } from 'types/IconItem';

const CreateIconPanel = (): React.Node => {
  const dispatch = useDispatch<Dispatch>();
  const { iconItems } = useSelector<ReduxState, $ElementType<ReduxState, 'iconItems'>>(state => state.iconItems);
  const { enqueueSnackbar } = useSnackbar();
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [filteredIcons, setFilteredIcons] = React.useState<Array<IconItem>>(iconData);

  const handleInputChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setSearchQuery(value);
    setFilteredIcons(iconData.filter(icon => icon.name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleIconClick = React.useCallback(
    (e: SyntheticEvent<HTMLDivElement>): void => {
      const { id } = e.currentTarget.dataset;
      const isExisting: boolean = iconItems.some(n => n.id === id);
      if (isExisting) {
        enqueueSnackbar('The website has already existed', { variant: 'warning' });
        return;
      }

      const iconItem: ?IconItem = iconData.find(n => n.id === id);
      if (iconItem) {
        const newIconItems: Array<IconItem> = [...iconItems, iconItem];
        dispatch(updateIconItems(newIconItems)).then(() => {
          enqueueSnackbar('Website added', { variant: 'success' });
        });
      }
    },
    [dispatch, enqueueSnackbar, iconItems],
  );
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
            onClick={handleIconClick}
          >
            <Icon name={icon.name} src={icon.iconSrc} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreateIconPanel;
