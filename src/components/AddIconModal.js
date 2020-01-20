// @flow

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { MODALS, MODAL_ACTIONS, type ModalActionType } from 'actions/ModalActions';

const AddIconModal = (): React.Node => {
  const { modal } = useSelector(state => state.modals);
  const dispatch = useDispatch();

  const shouldOpenModal: boolean = modal === MODALS.ADD_ICON;
  const handleModalClose = React.useCallback((): void => {
    const action: ModalActionType = { type: MODAL_ACTIONS.OPEN_MODAL, modal: null };
    dispatch(action);
  }, [dispatch]);

  return (
    <Dialog open={shouldOpenModal} onClose={handleModalClose} aria-labelledby="form-dialog-title" disableScrollLock>
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates occasionally.
        </DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
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
