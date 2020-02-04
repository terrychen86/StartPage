// @flow strict

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Icon from 'components/Icon';
import spaces from 'utils/spaces';
import { closeModal, MODALS } from 'actions/ModalActions';
import { updateIconItems, setEditIconId } from 'actions/IconItemActions';

import type { IconItem } from 'types/IconItem';
import type { Dispatch, ReduxState } from 'types/Redux';

const EditIconModal = (): React.Node => {
  const { modal } = useSelector((state: ReduxState) => state.modals);
  const { iconItems, editId } = useSelector((state: ReduxState) => state.iconItems);
  const dispatch: Dispatch = useDispatch();

  const [iconItem, setIconItem] = React.useState<IconItem>({
    id: '',
    name: '',
    url: '',
    iconSrc: '',
  });

  React.useEffect(() => {
    const targetIconItem: ?IconItem = iconItems.find(icon => icon.id === editId);
    if (!editId) return;

    if (!targetIconItem) {
      // TODO: ErrorBoundary
      throw new Error();
    }

    setIconItem(targetIconItem);
  }, [iconItems, editId]);

  const dispatchUpdateIconItems = React.useCallback(
    (updatedIconItems: Array<IconItem>) => {
      dispatch(updateIconItems(updatedIconItems));
    },
    [dispatch],
  );

  const shouldOpenModal: boolean = modal === MODALS.EDIT_ICON;
  const { id, name, url, iconSrc } = iconItem;
  const isBuiltInIcon: boolean = id.startsWith('default');

  const handleNameChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setIconItem({
      ...iconItem,
      name: value,
    });
  };

  const handleUrlChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setIconItem({
      ...iconItem,
      url: value,
    });
  };

  const handleIconSrcChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setIconItem({
      ...iconItem,
      iconSrc: value,
    });
  };

  const handleModalClose = React.useCallback((): void => {
    dispatch(closeModal());
    dispatch(setEditIconId(''));
  }, [dispatch]);

  const handleConfirmButtonClick = React.useCallback(
    (_e: SyntheticEvent<HTMLButtonElement>): void => {
      const newIconItems: Array<IconItem> = iconItems.map(icon => {
        if (icon.id !== editId) {
          return { ...icon };
        }
        return { ...iconItem };
      });
      dispatch(updateIconItems(newIconItems));
      dispatch(closeModal());
    },
    [dispatch, editId, iconItems, iconItem],
  );

  return (
    <Dialog maxWidth="sm" fullWidth open={shouldOpenModal} onClose={handleModalClose} disableScrollLock>
      <DialogContent>
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
                <TextField
                  label="Icon"
                  size="small"
                  fullWidth
                  value={isBuiltInIcon ? 'Built in' : iconSrc}
                  disabled={isBuiltInIcon}
                  onChange={handleIconSrcChange}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box pr={spaces.md} pb={spaces.xs}>
          <Button onClick={handleConfirmButtonClick} color="primary">
            Update
          </Button>
          <Button onClick={handleModalClose} color="default">
            Cancel
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default EditIconModal;
