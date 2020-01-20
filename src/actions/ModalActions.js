// @flow

export const MODAL_ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
};

export const MODALS = {
  ADD_ICON: 'ADD_ICON',
  EDIT_ICON: 'EDIT_ICON',
};

export type ModalType = $Keys<typeof MODALS>;

export type ModalActionType = {|
  +type: $Keys<typeof MODAL_ACTIONS>,
  +modal: ?ModalType,
|};
