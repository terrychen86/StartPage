// @flow
import { chromeStorage } from 'utils/chrome';
import { initIconItems } from 'data/iconData';
import type { IconItem } from 'types/IconItem';
import { type ThunkAction, type Dispatch } from 'types/Redux';

export const ICON_ITEM_ACTIONS = {
  UPDATE_ICON_ITEMS: 'UPDATE_ICON_ITEMS',
  UPDATE_EDIT_ICON_ID: 'UPDATE_EDIT_ICON_ID',
};

export type IconItemAction = {|
  +type: $Keys<typeof ICON_ITEM_ACTIONS>,
  +iconItems?: Array<IconItem>,
  +editId?: string,
|};

export const setEditIconId = (editId: string): IconItemAction => ({
  type: ICON_ITEM_ACTIONS.UPDATE_EDIT_ICON_ID,
  editId,
});

export const receiveIconItems = (iconItems: Array<IconItem>): IconItemAction => ({
  type: ICON_ITEM_ACTIONS.UPDATE_ICON_ITEMS,
  iconItems,
});

export const requestIconItems = (): ThunkAction => async (dispatch: Dispatch) => {
  try {
    const res: { [string]: string } = await chromeStorage.get('iconItems');
    const { iconItems } = res;
    if (!iconItems) {
      dispatch(receiveIconItems(initIconItems));
    } else {
      const icons: Array<IconItem> = JSON.parse(iconItems);
      dispatch(receiveIconItems(icons));
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const updateIconItems = (iconItems: Array<IconItem>): ThunkAction => async (dispatch: Dispatch) => {
  try {
    await chromeStorage.set({ iconItems: JSON.stringify(iconItems) });
    dispatch(receiveIconItems(iconItems));
  } catch (err) {
    throw new Error(err);
  }
};
