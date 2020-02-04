// @flow

import { MODAL_ACTIONS, type ModalType, type ModalAction } from 'actions/ModalActions';

export type State = {
  modal: ?ModalType,
};

const ROUTE_ACTION_TYPE_DEFAULT_STATE: State = {
  modal: null,
};

const ModalReducer = (state: State = ROUTE_ACTION_TYPE_DEFAULT_STATE, action: ModalAction): State => {
  const { type, modal } = action;
  switch (type) {
    case MODAL_ACTIONS.OPEN_MODAL: {
      return {
        modal,
      };
    }
    case MODAL_ACTIONS.CLOSE_MODAL: {
      return {
        modal: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default ModalReducer;
