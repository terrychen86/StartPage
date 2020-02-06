// @flow strict

export const MESSAGE_ACTIONS = {
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  DISMISS_MESSAGE: 'DISMISS_MESSAGE',
};

export type Severity = 'error' | 'warning' | 'info' | 'success';

export type MessageAction = {|
  +type: $Keys<typeof MESSAGE_ACTIONS>,
  +message?: string,
  +severity?: Severity,
|};

export const showMessage = (severity: Severity, message: string): MessageAction => ({
  type: MESSAGE_ACTIONS.SHOW_MESSAGE,
  severity,
  message,
});

export const dismissMessage = (): MessageAction => ({
  type: MESSAGE_ACTIONS.DISMISS_MESSAGE,
});
