// @flow strict

import * as React from 'react';
import nanoid from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import CreateIconPanel from 'components/AddIconModal/CreateIconPanel';
import PopularIconPanel from 'components/AddIconModal/PopularIconPanel';
import spaces from 'utils/spaces';
import { updateIconItems } from 'actions/IconItemActions';
import { closeModal } from 'actions/ModalActions';
import type { ReduxState, Dispatch } from 'types/Redux';
import type { IconItem } from 'types/IconItem';

type Props = {|
  isOpen: boolean,
|};

const AddIconModal = ({ isOpen }: Props): React.Node => {
  const { iconItems } = useSelector<ReduxState, $ElementType<ReduxState, 'iconItems'>>(state => state.iconItems);
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [iconItem, setIconItem] = React.useState<IconItem>({
    id: nanoid(),
    name: '',
    url: '',
    iconSrc: '',
  });

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch<Dispatch>();
  const modalSize: string = tabIndex === 0 ? 'sm' : 'md';

  const handleModalClose = React.useCallback((): void => {
    dispatch(closeModal());
  }, [dispatch]);

  const handleTabClick = (_event: SyntheticEvent<Event>, value: number): void => {
    setTabIndex(value);
  };

  const handleIconItemChange = (updatedIconItem: IconItem): void => {
    setIconItem(updatedIconItem);
  };

  const handleConfirmButtonClick = React.useCallback((): void => {
    const newIconItems: Array<IconItem> = [...iconItems, iconItem];
    dispatch(updateIconItems(newIconItems)).then(() => {
      dispatch(closeModal());
      enqueueSnackbar('Icon added', { variant: 'success' });
    });
  }, [dispatch, enqueueSnackbar, iconItems, iconItem]);

  return (
    <Dialog maxWidth={modalSize} fullWidth open={isOpen} onClose={handleModalClose} disableScrollLock>
      <Box p={spaces.md}>
        <Box>
          <Tabs value={tabIndex} onChange={handleTabClick} indicatorColor="primary" textColor="primary" centered>
            <Tab label="Create an icon" />
            <Tab label="Add popular icons" />
          </Tabs>
        </Box>

        <DialogContent>
          {tabIndex === 0 && <CreateIconPanel iconItem={iconItem} onIconItemChange={handleIconItemChange} />}
          {tabIndex === 1 && <PopularIconPanel />}
        </DialogContent>

        {tabIndex === 0 && (
          <DialogActions>
            <Box pr={spaces.md} pb={spaces.xs}>
              <Button onClick={handleConfirmButtonClick} color="primary">
                Create
              </Button>
              <Button onClick={handleModalClose} color="default">
                Cancel
              </Button>
            </Box>
          </DialogActions>
        )}
      </Box>
    </Dialog>
  );
};

export default AddIconModal;
