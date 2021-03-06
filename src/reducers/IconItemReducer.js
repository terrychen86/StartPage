// @flow

import { ICON_ITEM_ACTIONS, type IconItemAction } from 'actions/IconItemActions';
// import { initIconItems } from 'data/iconData';
import type { IconItem } from 'types/IconItem';

export type State = {
  iconItems: Array<IconItem>,
  editId: string,
};

const ICON_ITEM_DEFAULT_STATE: State = {
  iconItems: [],
  editId: '',
};

const IconItemReducer = (state: State = ICON_ITEM_DEFAULT_STATE, action: IconItemAction): State => {
  const { type, iconItems = [], editId = '' } = action;
  switch (type) {
    case ICON_ITEM_ACTIONS.UPDATE_ICON_ITEMS: {
      return {
        ...state,
        iconItems: [...iconItems],
      };
    }
    case ICON_ITEM_ACTIONS.UPDATE_EDIT_ICON_ID: {
      return {
        ...state,
        editId,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default IconItemReducer;
