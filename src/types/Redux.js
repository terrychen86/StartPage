// @flow

/* eslint-disable no-use-before-define */
import type { IconItemAction } from 'actions/IconItemActions';

export type Action = IconItemAction;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type ThunkAction = (dispatch: Dispatch) => Promise<void>;
export type PromiseAction = Promise<Action>;
