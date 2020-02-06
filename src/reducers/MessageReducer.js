// @flow strict

import { MESSAGE_ACTIONS, type Severity, type MessageAction } from 'actions/MessageActions';

export type State = {
  shouldShowMessage: boolean,
  message: string,
  severity: Severity,
};

const MESSAGE_ACTION_DEFAULT_STATE: State = {
  shouldShowMessage: false,
  message: '',
  severity: 'info',
};

const MessageReducer = (state: State = MESSAGE_ACTION_DEFAULT_STATE, action: MessageAction): State => {
  const { type, message = '', severity = 'info' } = action;
  switch (type) {
    case MESSAGE_ACTIONS.SHOW_MESSAGE: {
      return {
        shouldShowMessage: true,
        message,
        severity,
      };
    }
    case MESSAGE_ACTIONS.DISMISS_MESSAGE: {
      return {
        ...state,
        shouldShowMessage: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default MessageReducer;
