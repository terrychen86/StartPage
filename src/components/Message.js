// @flow strict

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { dismissMessage } from 'actions/MessageActions';
import { type Dispatch, type ReduxState } from 'types/Redux';

const Message = (): React.Node => {
  const dispatch = useDispatch<Dispatch>();
  const { message, severity, shouldShowMessage } = useSelector<ReduxState, $ElementType<ReduxState, 'messages'>>(
    state => state.messages,
  );
  const handleDismissMessage = React.useCallback((): void => {
    dispatch(dismissMessage());
  }, [dispatch]);

  return (
    <Snackbar open={shouldShowMessage} autoHideDuration={2000} onClose={handleDismissMessage}>
      <MuiAlert variant="filled" onClose={handleDismissMessage} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Message;
