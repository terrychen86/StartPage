// @flow

import { MODAL_ACTIONS, type ModalType, type ModalActionType } from 'actions/ModalActions';

export type State = {
  modal: ?ModalType,
};

const ROUTE_ACTION_TYPE_DEFAULT_STATE: State = {
  modal: null,
};

const ModalReducer = (state: State = ROUTE_ACTION_TYPE_DEFAULT_STATE, action: ModalActionType): State => {
  const { type, modal } = action;
  switch (type) {
    case MODAL_ACTIONS.OPEN_MODAL: {
      return {
        modal,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default ModalReducer;
