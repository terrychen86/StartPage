// @flow strict

import type { ReduxState } from 'reducers/root';

/* eslint-disable no-use-before-define */
import type { IconItemAction } from 'actions/IconItemActions';
import type { ModalAction } from 'actions/ModalActions';

export type Action = IconItemAction | ModalAction;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type ThunkAction = (dispatch: Dispatch) => Promise<void>;
export type PromiseAction = Promise<Action>;

export type { ReduxState };
