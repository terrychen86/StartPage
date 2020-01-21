// @flow

import * as React from 'react';
import nanoid from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import spaces from 'utils/spaces';
import fetchIcon from 'utils/fetchIcon';
import type { IconItem } from 'types/IconItem';
import { MODALS, MODAL_ACTIONS, type ModalActionType } from 'actions/ModalActions';

const AddIconModal = (): React.Node => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [iconItem, setIconItem] = React.useState<IconItem>({
    id: nanoid(),
    name: '',
    url: '',
    iconUrl: fetchIcon('defaultIcon'),
  });

  const { modal } = useSelector(state => state.modals);
  const dispatch = useDispatch();

  const shouldOpenModal: boolean = modal === MODALS.ADD_ICON;
  const handleModalClose = React.useCallback((): void => {
    const action: ModalActionType = { type: MODAL_ACTIONS.OPEN_MODAL, modal: null };
    dispatch(action);
  }, [dispatch]);

  const handleTabClick = (_event: SyntheticEvent<Event>, value: number): void => {
    setTabIndex(value);
  };

  const handleIconItemChange = (updatedIconItem: IconItem): void => {
    setIconItem(updatedIconItem);
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={shouldOpenModal} onClose={handleModalClose} disableScrollLock>
      <Box p={spaces.md}>
        <Tabs value={tabIndex} onChange={handleTabClick} indicatorColor="primary" textColor="primary" centered>
          <Tab label="Create an icon" />
          <Tab label="Add popular icons" />
        </Tabs>
      </Box>

      <DialogContent>
        <Box display="flex">
          <Box flex="1 1 40%">
            <CreateIconPanel iconItem={iconItem} onIconItemChange={handleIconItemChange} />
          </Box>

          <Box flex="1 1 60%">TBD</Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleModalClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleModalClose} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddIconModal;
