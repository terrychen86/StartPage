// @flow

export const MODAL_ACTIONS = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

export const MODALS = {
  ADD_ICON: 'ADD_ICON',
  EDIT_ICON: 'EDIT_ICON',
};

export type ModalType = $Keys<typeof MODALS>;

export type ModalAction = {|
  +type: $Keys<typeof MODAL_ACTIONS>,
  +modal?: ?ModalType,
|};

export const openModal = (modal: ModalType): ModalAction => ({
  type: MODAL_ACTIONS.OPEN_MODAL,
  modal,
});

export const closeModal = (): ModalAction => ({
  type: MODAL_ACTIONS.CLOSE_MODAL,
});
